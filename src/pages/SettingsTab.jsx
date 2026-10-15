import React, { useState } from 'react';
import { Settings, Save, CheckCircle2, DollarSign, Truck, Phone, Mail, ShieldCheck } from 'lucide-react';

export const SettingsTab = ({
  settings,
  onSaveSettings
}) => {
  const [formData, setFormData] = useState({ ...settings });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveSettings(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <h3 className="font-editorial text-2xl font-bold text-[#332822]">
          Storefront Global Configuration
        </h3>
        <p className="text-xs text-[#6F5145]">
          Manage shipping thresholds, customer support lines, taxation, and brand rules
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center gap-2 text-emerald-800 text-xs font-bold animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Store settings saved successfully! Changes applied to live store.</span>
        </div>
      )}

      {/* Settings Form */}
      <form onSubmit={handleSubmit} className="space-y-6 text-xs font-sans">
        
        {/* Brand Information */}
        <div className="bg-white rounded-3xl p-6 border border-[#D9A99A]/40 shadow-xs space-y-4">
          <h4 className="font-editorial text-base font-bold text-[#332822] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B96F58]" />
            <span>Store Identity & Branding</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Store Display Name</label>
              <input
                type="text"
                value={formData.storeName}
                onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl font-bold text-[#332822] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Brand Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-[#6F5145] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Shipping & Currency Rules */}
        <div className="bg-white rounded-3xl p-6 border border-[#D9A99A]/40 shadow-xs space-y-4">
          <h4 className="font-editorial text-base font-bold text-[#332822] flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#B96F58]" />
            <span>Shipping & Currency Economics</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Free Shipping Cart Threshold (₹)</label>
              <input
                type="number"
                min="0"
                value={formData.freeShippingAbove}
                onChange={(e) => setFormData({ ...formData, freeShippingAbove: Number(e.target.value) })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl font-bold text-[#B96F58] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Standard Shipping Charge (₹)</label>
              <input
                type="number"
                min="0"
                value={formData.standardShippingFee}
                onChange={(e) => setFormData({ ...formData, standardShippingFee: Number(e.target.value) })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl font-bold text-[#332822] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Operating Currency Code</label>
              <input
                type="text"
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl font-mono text-[#332822] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Support & Contact Desk */}
        <div className="bg-white rounded-3xl p-6 border border-[#D9A99A]/40 shadow-xs space-y-4">
          <h4 className="font-editorial text-base font-bold text-[#332822] flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#B96F58]" />
            <span>Support Desk & Warehouse Location</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Support Email</label>
              <input
                type="email"
                value={formData.supportEmail}
                onChange={(e) => setFormData({ ...formData, supportEmail: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-[#332822] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Support & WhatsApp Helpline</label>
              <input
                type="text"
                value={formData.supportPhone}
                onChange={(e) => setFormData({ ...formData, supportPhone: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-[#332822] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Dispatch Warehouse City</label>
              <input
                type="text"
                value={formData.warehouseCity}
                onChange={(e) => setFormData({ ...formData, warehouseCity: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-[#332822] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">GST / Business Registration ID</label>
              <input
                type="text"
                value={formData.gstNumber}
                onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl font-mono text-[#332822] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#B96F58] hover:bg-[#332822] text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-2 text-xs"
          >
            <Save className="w-4 h-4" />
            <span>Save Configuration Changes</span>
          </button>
        </div>

      </form>

    </div>
  );
};
