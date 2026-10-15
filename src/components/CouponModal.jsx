import React, { useState, useEffect } from 'react';
import { X, Tag, Check } from 'lucide-react';

export const CouponModal = ({ isOpen, onClose, onSave, coupon }) => {
  const [formData, setFormData] = useState({
    code: '',
    discountType: 'percentage',
    value: 10,
    minOrderAmount: 299,
    maxDiscount: 100,
    expiresAt: '2026-12-31',
    isActive: true
  });

  useEffect(() => {
    if (coupon) {
      setFormData({
        code: coupon.code || '',
        discountType: coupon.discountType || 'percentage',
        value: coupon.value || 10,
        minOrderAmount: coupon.minOrderAmount || 0,
        maxDiscount: coupon.maxDiscount || 0,
        expiresAt: coupon.expiresAt || '2026-12-31',
        isActive: coupon.isActive !== undefined ? coupon.isActive : true
      });
    } else {
      setFormData({
        code: '',
        discountType: 'percentage',
        value: 10,
        minOrderAmount: 299,
        maxDiscount: 100,
        expiresAt: '2026-12-31',
        isActive: true
      });
    }
  }, [coupon, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.code.trim()) return;
    onSave({
      ...formData,
      code: formData.code.toUpperCase().trim(),
      value: Number(formData.value),
      minOrderAmount: Number(formData.minOrderAmount) || 0,
      maxDiscount: Number(formData.maxDiscount) || null
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#332822]/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full border border-[#D9A99A]/40 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-150">
        
        {/* Header */}
        <div className="bg-[#332822] text-[#F8E8D5] px-6 py-4 flex items-center justify-between border-b border-[#B96F58]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#B96F58] flex items-center justify-center font-bold text-white">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold">
                {coupon ? 'Edit Promo Coupon' : 'Create New Coupon'}
              </h3>
              <p className="text-[11px] text-[#D9A99A]">
                Configure coupon code and cart discount rules
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-[#D9A99A] hover:text-white rounded-xl">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Coupon Code *</label>
            <input
              type="text"
              required
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
              placeholder="e.g. FESTIVE20, WELCOME10"
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-mono font-bold text-[#B96F58] uppercase focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Discount Type</label>
              <select
                value={formData.discountType}
                onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                className="w-full px-3 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none"
              >
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed Amount (₹)</option>
                <option value="shipping">Free Shipping</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Discount Value</label>
              <input
                type="number"
                min="0"
                required
                value={formData.value}
                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                className="w-full px-3 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-bold text-[#332822] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Min. Cart Subtotal (₹)</label>
              <input
                type="number"
                min="0"
                value={formData.minOrderAmount}
                onChange={(e) => setFormData({ ...formData, minOrderAmount: e.target.value })}
                className="w-full px-3 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Max Discount Cap (₹)</label>
              <input
                type="number"
                min="0"
                value={formData.maxDiscount}
                onChange={(e) => setFormData({ ...formData, maxDiscount: e.target.value })}
                className="w-full px-3 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Expiry Date</label>
            <input
              type="date"
              value={formData.expiresAt}
              onChange={(e) => setFormData({ ...formData, expiresAt: e.target.value })}
              className="w-full px-3 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none"
            />
          </div>

          <label className="flex items-center gap-2 p-3 rounded-xl border border-[#D9A99A]/40 bg-[#F8E8D5]/20 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="accent-[#B96F58] w-4 h-4 rounded"
            />
            <span className="font-bold text-[#332822]">Activate coupon immediately</span>
          </label>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#D9A99A]/30">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#6F5145] font-bold rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#B96F58] hover:bg-[#332822] text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{coupon ? 'Save Changes' : 'Create Coupon'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
