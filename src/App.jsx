import React, { useState, useEffect } from 'react';
import { AdminSidebar } from './components/AdminSidebar';
import { AdminHeader } from './components/AdminHeader';
import { ProductModal } from './components/ProductModal';
import { OrderDetailsModal } from './components/OrderDetailsModal';
import { CollectionModal } from './components/CollectionModal';
import { CouponModal } from './components/CouponModal';
import { StoryFrameModal } from './components/StoryFrameModal';
import { HomepageMediaModal } from './components/HomepageMediaModal';

import { OverviewTab } from './pages/OverviewTab';
import { HomepageMediaTab } from './pages/HomepageMediaTab';
import { ProductsTab } from './pages/ProductsTab';
import { CollectionsTab } from './pages/CollectionsTab';
import { OrdersTab } from './pages/OrdersTab';
import { WholesaleTab } from './pages/WholesaleTab';
import { StoryCmsTab } from './pages/StoryCmsTab';
import { CouponsTab } from './pages/CouponsTab';
import { InventoryTab } from './pages/InventoryTab';
import { SettingsTab } from './pages/SettingsTab';
import { CustomizerTab } from './pages/CustomizerTab';
import { DEFAULT_THEME } from './data/themePresets';
import { initSyncBridge, syncToFrontendStore } from './utils/syncBridge';
import { api } from './utils/api';

import {
  INITIAL_CATEGORIES,
  INITIAL_PRODUCTS,
  INITIAL_ORDERS,
  INITIAL_WHOLESALE_APPS,
  INITIAL_BULK_ENQUIRIES,
  INITIAL_STORY_FRAMES,
  INITIAL_COUPONS,
  INITIAL_SETTINGS,
  INITIAL_HOMEPAGE_MEDIA,
  INITIAL_CUSTOMIZER_CONFIG,
  INITIAL_CUSTOMIZER_THEMES,
  INITIAL_CUSTOMIZER_SHAPES
} from './data/initialData';

export default function App() {
  const [currentTab, setCurrentTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Persistent States
  const [mediaList, setMediaList] = useState(() => {
    const saved = localStorage.getItem('giftpocket_homepage_media_v1');
    return saved ? JSON.parse(saved) : INITIAL_HOMEPAGE_MEDIA;
  });

  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('giftpocket_admin_categories');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          let updated = parsed.map(c => {
            if (c.id === 'fridge-magnets' && (!c.image || c.image.includes('photo-1584308666744-24d5c474f2ae') || c.image.includes('unsplash.com'))) {
              return { ...c, image: '/images/products/fridge-magnets.jpg' };
            }
            return c;
          });
          const hasFridge = updated.some(c => c.id === 'fridge-magnets');
          if (!hasFridge) {
            const fridgeCat = INITIAL_CATEGORIES.find(c => c.id === 'fridge-magnets');
            if (fridgeCat) updated.push(fridgeCat);
          }
          const hasJumkas = updated.some(c => c.id === 'jumkas' || c.name?.toLowerCase().includes('jumka'));
          if (!hasJumkas) {
            const jumkaCat = INITIAL_CATEGORIES.find(c => c.id === 'jumkas');
            if (jumkaCat) updated.push(jumkaCat);
          }
          localStorage.setItem('giftpocket_admin_categories', JSON.stringify(updated));
          return updated;
        }
      } catch (e) {
        console.warn('Error parsing cached categories', e);
      }
    }
    return INITIAL_CATEGORIES;
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('giftpocket_admin_products');
    if (!saved) return INITIAL_PRODUCTS;
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        const existingIds = new Set(parsed.map(p => p.id));
        const missing = INITIAL_PRODUCTS.filter(p => !existingIds.has(p.id));
        return missing.length > 0 ? [...parsed, ...missing] : parsed;
      }
    } catch (e) {
      console.warn('Error reading cached admin products', e);
    }
    return INITIAL_PRODUCTS;
  });

  const [orders, setOrders] = useState(() => {
    try {
      localStorage.removeItem('giftpocket_admin_orders');
    } catch (e) {
      console.warn('Error clearing cached orders', e);
    }
    return [];
  });

  const [wholesaleApps, setWholesaleApps] = useState(() => {
    try {
      localStorage.removeItem('giftpocket_admin_wholesale_apps');
    } catch (e) {
      console.warn('Error clearing cached wholesale apps', e);
    }
    return [];
  });

  const [bulkEnquiries, setBulkEnquiries] = useState(() => {
    try {
      localStorage.removeItem('giftpocket_admin_bulk_enquiries');
    } catch (e) {
      console.warn('Error clearing cached bulk enquiries', e);
    }
    return [];
  });

  const [storyFrames, setStoryFrames] = useState(() => {
    const saved = localStorage.getItem('giftpocket_admin_story_frames');
    return saved ? JSON.parse(saved) : INITIAL_STORY_FRAMES;
  });

  const [coupons, setCoupons] = useState(() => {
    const saved = localStorage.getItem('giftpocket_admin_coupons');
    return saved ? JSON.parse(saved) : INITIAL_COUPONS;
  });

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('giftpocket_admin_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  const [customizerConfig, setCustomizerConfig] = useState(() => {
    const saved = localStorage.getItem('giftpocket_customizer_config_v1');
    return saved ? JSON.parse(saved) : INITIAL_CUSTOMIZER_CONFIG;
  });

  const [customizerThemes, setCustomizerThemes] = useState(() => {
    const saved = localStorage.getItem('giftpocket_customizer_themes_v1');
    return saved ? JSON.parse(saved) : INITIAL_CUSTOMIZER_THEMES;
  });

  const [customizerShapes, setCustomizerShapes] = useState(() => {
    const saved = localStorage.getItem('giftpocket_customizer_shapes_v1');
    return saved ? JSON.parse(saved) : INITIAL_CUSTOMIZER_SHAPES;
  });

  const [storeTheme, setStoreTheme] = useState(() => {
    const saved = localStorage.getItem('giftpocket_store_theme_v1');
    return saved ? JSON.parse(saved) : DEFAULT_THEME;
  });

  // Initialize Cross-Origin Bridge to Frontend Store (Port 5173)
  useEffect(() => {
    initSyncBridge((initialData) => {
      if (!initialData) return;
      if (initialData.giftpocket_store_theme_v1) setStoreTheme(initialData.giftpocket_store_theme_v1);
      if (initialData.giftpocket_homepage_media_v1) setMediaList(initialData.giftpocket_homepage_media_v1);
      if (initialData.giftpocket_customizer_config_v1) setCustomizerConfig(initialData.giftpocket_customizer_config_v1);
      if (initialData.giftpocket_customizer_themes_v1) setCustomizerThemes(initialData.giftpocket_customizer_themes_v1);
      if (initialData.giftpocket_customizer_shapes_v1) setCustomizerShapes(initialData.giftpocket_customizer_shapes_v1);
      if (initialData.giftpocket_admin_categories) setCategories(initialData.giftpocket_admin_categories);
      if (initialData.giftpocket_admin_products) setProducts(initialData.giftpocket_admin_products);
      if (initialData.giftpocket_admin_orders && Array.isArray(initialData.giftpocket_admin_orders)) {
        const cleanOrders = initialData.giftpocket_admin_orders.filter(o => 
          !['ORD-98214', 'ORD-98215', 'ORD-98216', 'ORD-98217'].includes(o.id) && !o.isMock
        );
        setOrders(cleanOrders);
      }
      if (initialData.giftpocket_admin_coupons) setCoupons(initialData.giftpocket_admin_coupons);
      if (initialData.giftpocket_admin_settings) setSettings(initialData.giftpocket_admin_settings);
    });
  }, []);

  // Sync with LocalStorage and Live Storefront (Port 5173)
  useEffect(() => {
    syncToFrontendStore('giftpocket_store_theme_v1', storeTheme);
  }, [storeTheme]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_homepage_media_v1', mediaList);
  }, [mediaList]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_customizer_config_v1', customizerConfig);
  }, [customizerConfig]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_customizer_themes_v1', customizerThemes);
  }, [customizerThemes]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_customizer_shapes_v1', customizerShapes);
  }, [customizerShapes]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_admin_categories', categories);
  }, [categories]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_admin_products', products);
  }, [products]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_admin_orders', orders);
  }, [orders]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_admin_wholesale_apps', wholesaleApps);
  }, [wholesaleApps]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_admin_story_frames', storyFrames);
  }, [storyFrames]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_admin_coupons', coupons);
  }, [coupons]);

  useEffect(() => {
    syncToFrontendStore('giftpocket_admin_settings', settings);
  }, [settings]);

  // Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Modals state
  const [mediaModal, setMediaModal] = useState({ isOpen: false, item: null });
  const [productModal, setProductModal] = useState({ isOpen: false, product: null });
  const [orderDetailsModal, setOrderDetailsModal] = useState({ isOpen: false, order: null });
  const [collectionModal, setCollectionModal] = useState({ isOpen: false, collection: null });
  const [couponModal, setCouponModal] = useState({ isOpen: false, coupon: null });
  const [storyModal, setStoryModal] = useState({ isOpen: false, frame: null });

  // Handlers for Homepage Media
  const handleSaveMedia = (mediaData) => {
    if (mediaModal.item) {
      setMediaList((prev) =>
        prev.map((m) => (m.id === mediaModal.item.id ? { ...m, ...mediaData } : m))
      );
      showToast(`Updated homepage picture: ${mediaData.title}`);
    } else {
      const newMedia = {
        ...mediaData,
        id: `media-${Date.now()}`
      };
      setMediaList((prev) => [newMedia, ...prev]);
      showToast(`Added new homepage picture: ${mediaData.title}`);
    }
  };

  const handleDeleteMedia = (id) => {
    if (window.confirm('Are you sure you want to remove this picture from the homepage?')) {
      setMediaList((prev) => prev.filter((m) => m.id !== id));
      showToast('Picture removed from homepage.');
    }
  };

  const handleResetMedia = () => {
    if (window.confirm('Reset all homepage photography to initial defaults?')) {
      setMediaList(INITIAL_HOMEPAGE_MEDIA);
      showToast('Restored default photography.');
    }
  };

  // Handlers for Products
  const handleSaveProduct = async (productData) => {
    if (productModal.product) {
      const updated = { ...productModal.product, ...productData };
      setProducts((prev) =>
        prev.map((p) => (p.id === productModal.product.id ? updated : p))
      );
      showToast(`Updated product: ${productData.name}`);
      try {
        await api.put(`/products/${productModal.product.id}`, updated);
      } catch (err) {
        console.warn('Backend product update note:', err.message);
      }
    } else {
      const newProd = {
        ...productData,
        id: productData.id || `gp-prod-${Date.now()}`,
        rating: 5.0,
        reviewsCount: 0
      };
      setProducts((prev) => [newProd, ...prev]);
      showToast(`Added new product: ${productData.name}`);
      try {
        await api.post('/products', newProd);
      } catch (err) {
        console.warn('Backend product create note:', err.message);
      }
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product from the catalog?')) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      showToast('Product removed from catalog.');
      try {
        await api.delete(`/products/${id}`);
      } catch (err) {
        console.warn('Backend product delete note:', err.message);
      }
    }
  };

  // Handlers for Collections
  const handleSaveCollection = (colData) => {
    if (collectionModal.collection) {
      setCategories((prev) =>
        prev.map((c) => (c.id === collectionModal.collection.id ? { ...c, ...colData } : c))
      );
      showToast(`Updated chapter: ${colData.name}`);
    } else {
      const newCol = {
        ...colData,
        id: colData.slug || `chapter-${Date.now()}`
      };
      setCategories((prev) => [...prev, newCol]);
      showToast(`Added new chapter: ${colData.name}`);
    }
  };

  const handleDeleteCollection = (id) => {
    if (window.confirm('Delete this collection chapter?')) {
      setCategories((prev) => prev.filter((c) => c.id !== id));
      showToast('Chapter removed.');
    }
  };

  const handleResetCollections = () => {
    if (window.confirm('Reset categories back to default curation?')) {
      setCategories(INITIAL_CATEGORIES);
      showToast('Restored default chapters.');
    }
  };

  // Handlers for Orders
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    if (orderDetailsModal.order?.id === orderId) {
      setOrderDetailsModal((prev) => ({
        ...prev,
        order: { ...prev.order, status: newStatus }
      }));
    }
    showToast(`Order #${orderId} status set to ${newStatus}`);
  };

  const handleUpdateOrderTracking = (orderId, trackingNumber) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, trackingNumber } : o))
    );
    showToast(`Tracking updated for Order #${orderId}`);
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm(`Delete Order #${orderId}?`)) {
      setOrders((prev) => prev.filter((o) => o.id !== orderId));
      showToast(`Deleted order #${orderId}`);
    }
  };

  const handleClearAllOrders = () => {
    if (window.confirm('Are you sure you want to clear all orders? This will reset the pipeline to empty.')) {
      setOrders([]);
      localStorage.removeItem('giftpocket_admin_orders');
      showToast('All orders cleared.');
    }
  };

  // Handlers for Wholesale
  const handleUpdateWholesaleStatus = (appId, newStatus, assignedTier) => {
    setWholesaleApps((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, status: newStatus, tier: assignedTier } : a))
    );
    showToast(`Partner application updated to ${newStatus}`);
  };

  const handleDeleteWholesaleApp = (appId) => {
    if (window.confirm('Delete this wholesale application?')) {
      setWholesaleApps((prev) => prev.filter((a) => a.id !== appId));
      showToast('Wholesale application deleted.');
    }
  };

  const handleDeleteBulkEnquiry = (enqId) => {
    if (window.confirm('Delete this bulk inquiry?')) {
      setBulkEnquiries((prev) => prev.filter((e) => e.id !== enqId));
      showToast('Bulk inquiry deleted.');
    }
  };

  const handleClearAllWholesale = () => {
    if (window.confirm('Clear all wholesale partner applications and bulk enquiries?')) {
      setWholesaleApps([]);
      setBulkEnquiries([]);
      localStorage.removeItem('giftpocket_admin_wholesale_apps');
      localStorage.removeItem('giftpocket_admin_bulk_enquiries');
      showToast('Wholesale data cleared.');
    }
  };

  // Handlers for Story CMS
  const handleSaveStoryFrame = (frameData) => {
    if (storyModal.frame) {
      setStoryFrames((prev) =>
        prev.map((f) => (f.id === storyModal.frame.id ? { ...f, ...frameData } : f))
      );
      showToast('Story frame updated');
    } else {
      const newFrame = {
        ...frameData,
        id: `frame-${Date.now()}`
      };
      setStoryFrames((prev) => [...prev, newFrame]);
      showToast('Added new story frame');
    }
  };

  const handleDeleteStoryFrame = (id) => {
    if (window.confirm('Delete this story frame?')) {
      setStoryFrames((prev) => prev.filter((f) => f.id !== id));
      showToast('Story frame deleted');
    }
  };

  // Handlers for Coupons
  const handleSaveCoupon = (couponData) => {
    if (couponModal.coupon) {
      setCoupons((prev) =>
        prev.map((c) => (c.id === couponModal.coupon.id ? { ...c, ...couponData } : c))
      );
      showToast(`Updated coupon ${couponData.code}`);
    } else {
      const newCoupon = {
        ...couponData,
        id: `c-${Date.now()}`,
        usageCount: 0
      };
      setCoupons((prev) => [newCoupon, ...prev]);
      showToast(`Created coupon ${couponData.code}`);
    }
  };

  const handleToggleCoupon = (id) => {
    setCoupons((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isActive: !c.isActive } : c))
    );
    showToast('Coupon status toggled');
  };

  const handleDeleteCoupon = (id) => {
    if (window.confirm('Delete this coupon code?')) {
      setCoupons((prev) => prev.filter((c) => c.id !== id));
      showToast('Coupon deleted');
    }
  };

  // Handlers for Stock Restock
  const handleRestockProduct = (id, amount) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: (p.stock || 0) + amount } : p))
    );
    const item = products.find((p) => p.id === id);
    showToast(`Restocked +${amount} units for ${item?.name || 'product'}`);
  };

  // Handlers for Customizer Studio CMS
  const handleUpdateCustomizerConfig = (newConfig) => {
    setCustomizerConfig((prev) => ({ ...prev, ...newConfig }));
    showToast('Updated Customized Studio configuration');
  };

  const handleAddCustomizerTheme = (themeData) => {
    const newTheme = {
      ...themeData,
      id: `theme-${Date.now()}`,
      isActive: true
    };
    setCustomizerThemes((prev) => [...prev, newTheme]);
    showToast(`Created customizer color theme "${newTheme.name}"`);
  };

  const handleUpdateCustomizerTheme = (themeId, updatedData) => {
    setCustomizerThemes((prev) =>
      prev.map((t) => (t.id === themeId ? { ...t, ...updatedData } : t))
    );
    showToast('Saved customizer color theme');
  };

  const handleDeleteCustomizerTheme = (themeId) => {
    setCustomizerThemes((prev) => prev.filter((t) => t.id !== themeId));
    showToast('Deleted customizer color theme');
  };

  const handleResetCustomizerThemes = () => {
    setCustomizerThemes(INITIAL_CUSTOMIZER_THEMES);
    showToast('Reset customizer color themes to default');
  };

  const handleToggleCustomizerShape = (shapeId) => {
    setCustomizerShapes((prev) =>
      prev.map((s) => (s.id === shapeId ? { ...s, isActive: !s.isActive } : s))
    );
    showToast('Toggled customizer pendant shape');
  };

  const handleAddCustomizerPrompt = (promptData) => {
    const newP = {
      ...promptData,
      id: `p-${Date.now()}`
    };
    setCustomizerConfig((prev) => ({
      ...prev,
      inspirationPrompts: [...(prev.inspirationPrompts || []), newP]
    }));
    showToast('Added inspiration prompt');
  };

  const handleDeleteCustomizerPrompt = (promptId) => {
    setCustomizerConfig((prev) => ({
      ...prev,
      inspirationPrompts: (prev.inspirationPrompts || []).filter((p) => p.id !== promptId)
    }));
    showToast('Deleted inspiration prompt');
  };

  const handleResetAllCustomizer = () => {
    setCustomizerConfig(INITIAL_CUSTOMIZER_CONFIG);
    setCustomizerThemes(INITIAL_CUSTOMIZER_THEMES);
    setCustomizerShapes(INITIAL_CUSTOMIZER_SHAPES);
    showToast('Reset all Customized Studio data to defaults');
  };

  // Tab Header Details
  const tabTitles = {
    overview: { title: 'Overview & Performance', subtitle: 'Live store KPIs, recent transactions, and operational metrics' },
    media: { title: 'Homepage Pictures & Visual Media CMS', subtitle: 'Manage photography, banners, mood cards, and gallery images across the home page' },
    customizer: { title: 'Customized Site & Studio Controls', subtitle: 'Configure live bead palettes, cords, letter limits, and charm options for /customized' },
    products: { title: 'Product Catalog & Customizer', subtitle: 'Manage items, 2D customizer options, retail and wholesale prices' },
    orders: { title: 'Orders Pipeline & Fulfillment', subtitle: 'Track customer shipments, packing slips, and order fulfillment states' },
    collections: { title: 'Collections & Chapters', subtitle: 'Curate visual categories, pastel themes, and cover imagery' },
    wholesale: { title: 'Wholesale B2B & Retail Desk', subtitle: 'Vet partner stores, assign discount tiers, and quote bulk events' },
    cms: { title: 'Story Section & Campaign CMS', subtitle: 'Edit dynamic cinematic story frames and banner highlights' },
    coupons: { title: 'Coupons & Promotions', subtitle: 'Manage promotional coupon codes and cart discount thresholds' },
    inventory: { title: 'Stock Health & Inventory Audits', subtitle: 'Safety stock alerts and rapid 1-click batch replenishments' },
    settings: { title: 'Storefront Global Settings', subtitle: 'Configure free shipping rules, support helplines, and tax identifiers' }
  };

  const currentTabInfo = tabTitles[currentTab] || tabTitles.overview;

  const sidebarStats = {
    mediaCount: mediaList.length,
    customizerThemesCount: customizerThemes.length,
    productsCount: products.length,
    pendingOrders: orders.filter((o) => o.status === 'Processing' || o.status === 'Pending').length,
    categoriesCount: categories.length,
    pendingWholesale: wholesaleApps.filter((a) => a.status === 'PENDING').length,
    lowStockCount: products.filter((p) => p.stock < 50).length
  };

  return (
    <div className="flex min-h-screen bg-[#FAF5EE] text-[#332822]">
      
      {/* Sidebar */}
      <AdminSidebar
        currentTab={currentTab}
        setTab={setCurrentTab}
        stats={sidebarStats}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          title={currentTabInfo.title}
          subtitle={currentTabInfo.subtitle}
          onRefresh={() => showToast('Refreshed data views')}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {currentTab === 'overview' && (
            <OverviewTab
              products={products}
              orders={orders}
              categories={categories}
              wholesaleApps={wholesaleApps}
              bulkEnquiries={bulkEnquiries}
              setTab={setCurrentTab}
              onOpenOrderDetails={(ord) => setOrderDetailsModal({ isOpen: true, order: ord })}
              onOpenProductModal={(prod) => setProductModal({ isOpen: true, product: prod })}
            />
          )}

          {currentTab === 'media' && (
            <HomepageMediaTab
              mediaList={mediaList}
              onOpenMediaModal={(item) => setMediaModal({ isOpen: true, item })}
              onDeleteMedia={handleDeleteMedia}
              onResetMedia={handleResetMedia}
            />
          )}

          {currentTab === 'customizer' && (
            <CustomizerTab
              customizerConfig={customizerConfig}
              onUpdateConfig={handleUpdateCustomizerConfig}
              customizerThemes={customizerThemes}
              onAddTheme={handleAddCustomizerTheme}
              onUpdateTheme={handleUpdateCustomizerTheme}
              onDeleteTheme={handleDeleteCustomizerTheme}
              onResetThemes={handleResetCustomizerThemes}
              customizerShapes={customizerShapes}
              onToggleShape={handleToggleCustomizerShape}
              onAddPrompt={handleAddCustomizerPrompt}
              onDeletePrompt={handleDeleteCustomizerPrompt}
              onResetAll={handleResetAllCustomizer}
            />
          )}

          {currentTab === 'products' && (
            <ProductsTab
              products={products}
              categories={categories}
              onOpenProductModal={(prod) => setProductModal({ isOpen: true, product: prod })}
              onDeleteProduct={handleDeleteProduct}
            />
          )}

          {currentTab === 'collections' && (
            <CollectionsTab
              categories={categories}
              onOpenCollectionModal={(col) => setCollectionModal({ isOpen: true, collection: col })}
              onDeleteCollection={handleDeleteCollection}
              onResetCollections={handleResetCollections}
            />
          )}

          {currentTab === 'orders' && (
            <OrdersTab
              orders={orders}
              onOpenOrderDetails={(ord) => setOrderDetailsModal({ isOpen: true, order: ord })}
              onUpdateOrderStatus={handleUpdateOrderStatus}
              onDeleteOrder={handleDeleteOrder}
              onClearAllOrders={handleClearAllOrders}
            />
          )}

          {currentTab === 'wholesale' && (
            <WholesaleTab
              wholesaleApps={wholesaleApps}
              bulkEnquiries={bulkEnquiries}
              onUpdateAppStatus={handleUpdateWholesaleStatus}
              onDeleteApp={handleDeleteWholesaleApp}
              onDeleteEnquiry={handleDeleteBulkEnquiry}
              onClearAllWholesale={handleClearAllWholesale}
            />
          )}

          {currentTab === 'cms' && (
            <StoryCmsTab
              storyFrames={storyFrames}
              onOpenStoryModal={(frame) => setStoryModal({ isOpen: true, frame })}
              onDeleteStoryFrame={handleDeleteStoryFrame}
            />
          )}

          {currentTab === 'coupons' && (
            <CouponsTab
              coupons={coupons}
              onOpenCouponModal={(coupon) => setCouponModal({ isOpen: true, coupon })}
              onToggleCoupon={handleToggleCoupon}
              onDeleteCoupon={handleDeleteCoupon}
            />
          )}

          {currentTab === 'inventory' && (
            <InventoryTab
              products={products}
              categories={categories}
              onRestockProduct={handleRestockProduct}
            />
          )}

          {currentTab === 'settings' && (
            <SettingsTab
              settings={settings}
              onSaveSettings={(newSet) => {
                setSettings(newSet);
                showToast('Store settings updated successfully');
              }}
            />
          )}
        </main>
      </div>

      {/* Global Modals */}
      <HomepageMediaModal
        isOpen={mediaModal.isOpen}
        mediaItem={mediaModal.item}
        onClose={() => setMediaModal({ isOpen: false, item: null })}
        onSave={handleSaveMedia}
      />

      <ProductModal
        isOpen={productModal.isOpen}
        product={productModal.product}
        categories={categories}
        onClose={() => setProductModal({ isOpen: false, product: null })}
        onSave={handleSaveProduct}
      />

      <OrderDetailsModal
        isOpen={orderDetailsModal.isOpen}
        order={orderDetailsModal.order}
        onClose={() => setOrderDetailsModal({ isOpen: false, order: null })}
        onUpdateStatus={handleUpdateOrderStatus}
        onUpdateTracking={handleUpdateOrderTracking}
      />

      <CollectionModal
        isOpen={collectionModal.isOpen}
        collection={collectionModal.collection}
        onClose={() => setCollectionModal({ isOpen: false, collection: null })}
        onSave={handleSaveCollection}
      />

      <CouponModal
        isOpen={couponModal.isOpen}
        coupon={couponModal.coupon}
        onClose={() => setCouponModal({ isOpen: false, coupon: null })}
        onSave={handleSaveCoupon}
      />

      <StoryFrameModal
        isOpen={storyModal.isOpen}
        frame={storyModal.frame}
        onClose={() => setStoryModal({ isOpen: false, frame: null })}
        onSave={handleSaveStoryFrame}
      />

      {/* Toast Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#332822] text-[#F8E8D5] px-5 py-3 rounded-2xl shadow-2xl border border-[#B96F58] flex items-center gap-3 text-xs font-bold animate-in slide-in-from-bottom duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
