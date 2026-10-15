import React, { useState } from 'react';
import { X, ShoppingCart, User, MapPin, Truck, CheckCircle2, Clock, Printer, Tag } from 'lucide-react';

export const OrderDetailsModal = ({ isOpen, onClose, order, onUpdateStatus, onUpdateTracking }) => {
  const [trackingInput, setTrackingInput] = useState(order?.trackingNumber || '');
  const [statusSelect, setStatusSelect] = useState(order?.status || 'Pending');

  if (!isOpen || !order) return null;

  const handleSaveStatus = () => {
    onUpdateStatus(order.id, statusSelect);
    if (trackingInput.trim()) {
      onUpdateTracking(order.id, trackingInput.trim());
    }
  };

  const handlePrintSlip = () => {
    window.print();
  };

  const statusOptions = ['Pending', 'Confirmed', 'Processing', 'Packed', 'Shipped', 'Delivered', 'Cancelled'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#332822]/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-[#D9A99A]/40 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-150">
        
        {/* Header */}
        <div className="bg-[#332822] text-[#F8E8D5] px-6 py-4 flex items-center justify-between border-b border-[#B96F58]/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#B96F58] flex items-center justify-center font-bold text-white">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-editorial text-lg font-bold">
                  Order #{order.id}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8D49A] text-[#6F5145]">
                  {order.type || 'Retail'}
                </span>
              </div>
              <p className="text-[11px] text-[#D9A99A]">
                Placed on {order.date} • {order.paymentStatus || 'Paid (UPI)'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#D9A99A] hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-xs">
          
          {/* Status Pipeline & Action */}
          <div className="p-4 bg-[#F8E8D5]/40 rounded-2xl border border-[#D9A99A]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="font-bold text-[#6F5145] uppercase text-[10px]">Fulfillment Status</span>
              <div className="flex items-center gap-2">
                <select
                  value={statusSelect}
                  onChange={(e) => setStatusSelect(e.target.value)}
                  className="px-3 py-1.5 bg-white border border-[#D9A99A] rounded-xl font-bold text-xs text-[#332822] focus:outline-none focus:border-[#B96F58]"
                >
                  {statusOptions.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={handleSaveStatus}
                  className="px-3 py-1.5 bg-[#B96F58] hover:bg-[#332822] text-white font-bold rounded-xl transition-all shadow-xs"
                >
                  Update
                </button>
              </div>
            </div>

            <div className="space-y-1 sm:text-right">
              <span className="font-bold text-[#6F5145] uppercase text-[10px]">Courier / Tracking Ref</span>
              <input
                type="text"
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                placeholder="e.g. DELHIVERY-882194"
                className="px-3 py-1.5 bg-white border border-[#D9A99A] rounded-xl font-mono text-xs text-[#332822] focus:outline-none"
              />
            </div>
          </div>

          {/* Customer & Shipping Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-2xl border border-[#D9A99A]/40 space-y-2">
              <div className="flex items-center gap-2 text-[#B96F58] font-bold">
                <User className="w-4 h-4" />
                <span>Customer Information</span>
              </div>
              <p className="font-bold text-[#332822]">{order.customer?.name || order.customer}</p>
              <p className="text-[#6F5145]">{order.customer?.email || 'customer@giftpocket.in'}</p>
              <p className="text-[#6F5145]">{order.customer?.phone || '+91 98200 00000'}</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#D9A99A]/40 space-y-2">
              <div className="flex items-center gap-2 text-[#B96F58] font-bold">
                <MapPin className="w-4 h-4" />
                <span>Shipping Address</span>
              </div>
              <p className="text-[#332822] leading-relaxed">
                {order.customer?.address || 'Flat 402, Sunshine Heights, Mumbai - 400050'}
              </p>
            </div>
          </div>

          {/* Itemized Order Table */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs text-[#332822] uppercase tracking-wider">
              Ordered Items ({order.items?.length || 1})
            </h4>
            <div className="border border-[#D9A99A]/40 rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#F8E8D5]/50 border-b border-[#D9A99A]/40 text-[#6F5145] uppercase text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3">Item Details</th>
                    <th className="text-center">Qty</th>
                    <th className="text-right">Unit Price</th>
                    <th className="py-2.5 px-3 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9A99A]/20 bg-white">
                  {order.items?.map((item, idx) => (
                    <tr key={idx} className="py-2">
                      <td className="py-3 px-3">
                        <span className="font-bold text-[#332822] block">{item.name}</span>
                        {item.customName && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-[#F4D2BE] text-[#B96F58] rounded-full text-[10px] font-bold">
                            Custom Lettering: "{item.customName}"
                          </span>
                        )}
                        {item.notes && (
                          <span className="block text-[10px] text-[#6F5145] italic mt-0.5">
                            Note: {item.notes}
                          </span>
                        )}
                      </td>
                      <td className="text-center font-bold">{item.quantity}</td>
                      <td className="text-right text-[#6F5145]">₹{item.price}</td>
                      <td className="py-3 px-3 text-right font-bold text-[#332822]">
                        ₹{item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Calculation Summary */}
          <div className="p-4 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/40 space-y-2">
            <div className="flex justify-between text-[#6F5145]">
              <span>Subtotal</span>
              <span className="font-medium">₹{order.subtotal || order.total}</span>
            </div>
            {order.discountAmount > 0 && (
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Discount Applied</span>
                <span>-₹{order.discountAmount}</span>
              </div>
            )}
            <div className="flex justify-between text-[#6F5145]">
              <span>Shipping Fee</span>
              <span>{order.shippingFee === 0 ? 'FREE' : `₹${order.shippingFee || 49}`}</span>
            </div>
            <div className="border-t border-[#D9A99A]/30 pt-2 flex justify-between font-bold text-sm text-[#332822]">
              <span>Total Paid</span>
              <span className="text-[#B96F58]">₹{order.total}</span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-[#D9A99A]/30">
            <button
              type="button"
              onClick={handlePrintSlip}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#332822] font-bold rounded-xl transition-all flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Packing Slip</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-[#332822] text-[#F8E8D5] font-bold rounded-xl hover:bg-[#B96F58] transition-all"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
