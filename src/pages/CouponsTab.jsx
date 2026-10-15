import React from 'react';
import { Tag, Plus, Edit2, Trash2, CheckCircle2, XCircle, Percent, Gift } from 'lucide-react';

export const CouponsTab = ({
  coupons,
  onOpenCouponModal,
  onToggleCoupon,
  onDeleteCoupon
}) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Coupons & Discount Promotions ({coupons.length})
          </h3>
          <p className="text-xs text-[#6F5145]">
            Configure promotional promo codes, cart thresholds, percentage discounts, and free shipping triggers
          </p>
        </div>

        <button
          onClick={() => onOpenCouponModal(null)}
          className="px-4 py-2 bg-[#B96F58] hover:bg-[#332822] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>+ Create Coupon</span>
        </button>
      </div>

      {/* Coupon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className={`p-6 bg-white rounded-3xl border shadow-xs space-y-4 flex flex-col justify-between transition-all ${
              coupon.isActive ? 'border-[#D9A99A]/40' : 'border-gray-200 opacity-60'
            }`}
          >
            <div className="space-y-3">
              {/* Code & Status */}
              <div className="flex items-center justify-between">
                <div className="px-3 py-1 bg-[#F8E8D5] rounded-xl font-mono text-sm font-bold text-[#B96F58] tracking-wider border border-[#D9A99A]/60">
                  {coupon.code}
                </div>

                <button
                  onClick={() => onToggleCoupon(coupon.id)}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                    coupon.isActive
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {coupon.isActive ? 'Active' : 'Inactive'}
                </button>
              </div>

              {/* Discount Value */}
              <div>
                <h4 className="font-display text-2xl font-black text-[#332822]">
                  {coupon.discountType === 'percentage'
                    ? `${coupon.value}% OFF`
                    : coupon.discountType === 'shipping'
                    ? 'Free Shipping'
                    : `₹${coupon.value} FLAT OFF`}
                </h4>
                <p className="text-xs text-[#6F5145] mt-0.5">
                  Min Order Subtotal: ₹{coupon.minOrderAmount || 0}
                  {coupon.maxDiscount ? ` • Max Cap: ₹${coupon.maxDiscount}` : ''}
                </p>
              </div>

              {/* Usage & Expiry */}
              <div className="p-3 bg-[#FAF5EE] rounded-2xl text-[11px] text-[#6F5145] flex items-center justify-between">
                <span>Redeemed {coupon.usageCount || 0} times</span>
                <span>Expires {coupon.expiresAt || 'Never'}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-[#D9A99A]/30 text-xs">
              <button
                onClick={() => onOpenCouponModal(coupon)}
                className="px-3 py-1.5 bg-[#B96F58] hover:bg-[#332822] text-white font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>

              <button
                onClick={() => onDeleteCoupon(coupon.id)}
                className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                title="Delete Coupon"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
