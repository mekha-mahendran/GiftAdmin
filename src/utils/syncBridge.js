/**
 * GIFTPocket Cross-Origin Storage Sync Utility
 * Enables instant live changes from Admin (Port 5174) to Storefront (Port 5173).
 */

const FRONTEND_ORIGIN = 'http://localhost:5173';
let bridgeIframe = null;
let isBridgeReady = false;
const queuedMessages = [];

export const initSyncBridge = (onInitData) => {
  if (typeof window === 'undefined') return;

  // Listen for messages from bridge
  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!data || typeof data !== 'object') return;

    if (data.type === 'GIFTPOCKET_SYNC_BRIDGE_READY') {
      isBridgeReady = true;
      // Request initial state from frontend
      if (bridgeIframe && bridgeIframe.contentWindow) {
        bridgeIframe.contentWindow.postMessage({ type: 'GIFTPOCKET_SYNC_GET_ALL' }, '*');
      }
      // Flush queued messages
      while (queuedMessages.length > 0) {
        const msg = queuedMessages.shift();
        bridgeIframe.contentWindow.postMessage(msg, '*');
      }
    } else if (data.type === 'GIFTPOCKET_SYNC_INIT_RESPONSE' && onInitData) {
      onInitData(data.data);
    }
  });

  // Create or retrieve hidden iframe
  let iframe = document.getElementById('giftpocket-sync-iframe');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'giftpocket-sync-iframe';
    iframe.src = `${FRONTEND_ORIGIN}/sync-bridge.html`;
    iframe.style.display = 'none';
    iframe.style.width = '0px';
    iframe.style.height = '0px';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
  }
  bridgeIframe = iframe;
};

export const syncToFrontendStore = (key, value) => {
  if (!key) return;

  // 1. Save to Admin's own localStorage
  try {
    const stringVal = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, stringVal);
  } catch {
    // safe fallback
  }

  // 2. Post to frontend sync bridge iframe
  const payload = {
    type: 'GIFTPOCKET_SYNC_SET',
    key,
    value
  };

  if (bridgeIframe && bridgeIframe.contentWindow && isBridgeReady) {
    bridgeIframe.contentWindow.postMessage(payload, '*');
  } else {
    queuedMessages.push(payload);
  }
};
