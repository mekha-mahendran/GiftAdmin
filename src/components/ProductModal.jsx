import React, { useState, useEffect } from 'react';
import { X, Sparkles, Image, Tag, DollarSign, Package, Check, Layers } from 'lucide-react';
import { ImageUploadPicker } from './ImageUploadPicker';

export const ProductModal = ({ isOpen, onClose, onSave, product, categories }) => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: 'phone-charms',
    price: 149,
    originalPrice: 249,
    wholesalePrice: 75,
    moq: 10,
    costPrice: 40,
    stock: 100,
    badge: '',
    isCustomizable: true,
    isBestseller: false,
    isNewArrival: true,
    description: '',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80'
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        slug: product.slug || '',
        category: product.category || 'phone-charms',
        price: product.price || 0,
        originalPrice: product.originalPrice || 0,
        wholesalePrice: product.wholesalePrice || 0,
        moq: product.moq || 1,
        costPrice: product.costPrice || 0,
        stock: product.stock || 0,
        badge: product.badge || '',
        isCustomizable: !!product.isCustomizable,
        isBestseller: !!product.isBestseller,
        isNewArrival: !!product.isNewArrival,
        description: product.description || '',
        image: product.images?.[0] || product.image || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80'
      });
    } else {
      setFormData({
        name: '',
        slug: '',
        category: categories?.[0]?.id || 'phone-charms',
        price: 149,
        originalPrice: 249,
        wholesalePrice: 75,
        moq: 10,
        costPrice: 40,
        stock: 100,
        badge: 'New Arrival',
        isCustomizable: true,
        isBestseller: false,
        isNewArrival: true,
        description: '',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80'
      });
    }
  }, [product, isOpen, categories]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter a product name');
      return;
    }
    const slug = formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    onSave({
      ...formData,
      slug,
      images: [formData.image],
      price: Number(formData.price),
      originalPrice: Number(formData.originalPrice) || null,
      wholesalePrice: Number(formData.wholesalePrice) || null,
      moq: Number(formData.moq) || 1,
      costPrice: Number(formData.costPrice) || null,
      stock: Number(formData.stock) || 0
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#332822]/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-[#D9A99A]/40 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-150">
        
        {/* Modal Header */}
        <div className="bg-[#332822] text-[#F8E8D5] px-6 py-4 flex items-center justify-between border-b border-[#B96F58]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#B96F58] flex items-center justify-center font-bold text-white">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold">
                {product ? 'Edit Product Item' : 'Create New Product'}
              </h3>
              <p className="text-[11px] text-[#D9A99A]">
                Configure pricing, inventory, customization tags & images
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

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-xs">
          
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Product Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Pastel Floral Charm Wristlet"
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-medium text-[#332822] focus:outline-none focus:border-[#B96F58]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Category / Chapter</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none focus:border-[#B96F58]"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="p-4 bg-[#F8E8D5]/30 rounded-2xl border border-[#D9A99A]/40 space-y-3">
            <span className="font-bold text-[11px] text-[#6F5145] uppercase tracking-wider block">
              Pricing & Economics (₹ INR)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#332822]">Retail Price (₹)</label>
                <input
                  type="number"
                  min="0"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-3 py-1.5 bg-white border border-[#D9A99A]/60 rounded-lg text-xs font-bold text-[#B96F58] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#332822]">MRP / Strikethrough</label>
                <input
                  type="number"
                  min="0"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                  className="w-full px-3 py-1.5 bg-white border border-[#D9A99A]/60 rounded-lg text-xs text-[#6F5145] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#332822]">Wholesale Price</label>
                <input
                  type="number"
                  min="0"
                  value={formData.wholesalePrice}
                  onChange={(e) => setFormData({ ...formData, wholesalePrice: e.target.value })}
                  className="w-full px-3 py-1.5 bg-white border border-[#D9A99A]/60 rounded-lg text-xs text-emerald-800 font-semibold focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#332822]">Wholesale MOQ</label>
                <input
                  type="number"
                  min="1"
                  value={formData.moq}
                  onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                  className="w-full px-3 py-1.5 bg-white border border-[#D9A99A]/60 rounded-lg text-xs text-[#332822] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Stock & Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Current Inventory Stock</label>
              <input
                type="number"
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-bold text-[#332822] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Promotional Badge</label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder="e.g. Bestseller, Trending, 20% OFF"
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none"
              />
            </div>
          </div>

          {/* Image Upload & Picker */}
          <div className="p-4 bg-[#F8E8D5]/30 rounded-2xl border border-[#D9A99A]/40">
            <ImageUploadPicker
              value={formData.image}
              onChange={(newUrl) => setFormData({ ...formData, image: newUrl })}
              label="Primary Product Photograph"
              aspectHint="Recommended: 1:1 Square (e.g. 800x800px)"
            />
          </div>

          {/* Product Description */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Description & Craft Story</label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Provide delightful details about materials, care instructions, and dimensions..."
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none resize-none"
            />
          </div>

          {/* Feature Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <label className="flex items-center gap-2 p-3 rounded-xl border border-[#D9A99A]/40 bg-[#F8E8D5]/20 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isCustomizable}
                onChange={(e) => setFormData({ ...formData, isCustomizable: e.target.checked })}
                className="accent-[#B96F58] w-4 h-4 rounded"
              />
              <span className="font-bold text-[#332822] text-[11px]">2D Customizer Active</span>
            </label>

            <label className="flex items-center gap-2 p-3 rounded-xl border border-[#D9A99A]/40 bg-[#F8E8D5]/20 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isBestseller}
                onChange={(e) => setFormData({ ...formData, isBestseller: e.target.checked })}
                className="accent-[#B96F58] w-4 h-4 rounded"
              />
              <span className="font-bold text-[#332822] text-[11px]">Feature as Bestseller</span>
            </label>

            <label className="flex items-center gap-2 p-3 rounded-xl border border-[#D9A99A]/40 bg-[#F8E8D5]/20 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isNewArrival}
                onChange={(e) => setFormData({ ...formData, isNewArrival: e.target.checked })}
                className="accent-[#B96F58] w-4 h-4 rounded"
              />
              <span className="font-bold text-[#332822] text-[11px]">New Arrival Tag</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D9A99A]/30">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#6F5145] font-bold rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#B96F58] hover:bg-[#332822] text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>{product ? 'Save Changes' : 'Publish Product'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
