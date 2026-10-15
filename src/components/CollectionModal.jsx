import React, { useState, useEffect } from 'react';
import { X, Layers, Image, Check, Palette } from 'lucide-react';
import { ImageUploadPicker } from './ImageUploadPicker';

export const CollectionModal = ({ isOpen, onClose, onSave, collection }) => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    color: '#F4D2BE',
    textColor: '#332822',
    itemCount: 15
  });

  const presetColors = [
    { bg: '#F4D2BE', text: '#6F5145', label: 'Soft Peach' },
    { bg: '#C9BDD8', text: '#332822', label: 'Lavender' },
    { bg: '#B9C5A0', text: '#332822', label: 'Sage Green' },
    { bg: '#D9A99A', text: '#332822', label: 'Dusty Pink' },
    { bg: '#E8D49A', text: '#6F5145', label: 'Butter Yellow' },
    { bg: '#B96F58', text: '#F8E8D5', label: 'Terracotta' },
    { bg: '#67949A', text: '#F8E8D5', label: 'Muted Teal' },
    { bg: '#F8E8D5', text: '#332822', label: 'Warm Cream' }
  ];

  useEffect(() => {
    if (collection) {
      setFormData({
        name: collection.name || '',
        slug: collection.slug || '',
        description: collection.description || '',
        image: collection.image || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
        color: collection.color || '#F4D2BE',
        textColor: collection.textColor || '#332822',
        itemCount: collection.itemCount || 15
      });
    } else {
      setFormData({
        name: '',
        slug: '',
        description: '',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
        color: '#F4D2BE',
        textColor: '#332822',
        itemCount: 12
      });
    }
  }, [collection, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    const slug = formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    onSave({
      ...formData,
      slug,
      itemCount: Number(formData.itemCount) || 0
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#332822]/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-[#D9A99A]/40 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-150">
        
        {/* Header */}
        <div className="bg-[#332822] text-[#F8E8D5] px-6 py-4 flex items-center justify-between border-b border-[#B96F58]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#B96F58] flex items-center justify-center font-bold text-white">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold">
                {collection ? 'Edit Chapter & Collection' : 'Add New Chapter'}
              </h3>
              <p className="text-[11px] text-[#D9A99A]">
                Configure title, cover photo, and visual pastel badges
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Collection Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Bag & Phone Charms"
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none focus:border-[#B96F58]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Description</label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description for category card and SEO..."
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none resize-none"
            />
          </div>

          {/* Cover Photo Upload & Picker */}
          <div className="p-3.5 bg-[#F8E8D5]/30 rounded-2xl border border-[#D9A99A]/40">
            <ImageUploadPicker
              value={formData.image}
              onChange={(newUrl) => setFormData({ ...formData, image: newUrl })}
              label="Chapter Cover Photography"
              aspectHint="Recommended: 4:3 or 1:1 format"
            />
          </div>

          {/* Palette Color Presets */}
          <div className="space-y-2 pt-1">
            <label className="font-bold text-[#332822]">Theme Color Pill</label>
            <div className="grid grid-cols-4 gap-2">
              {presetColors.map((clr, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, color: clr.bg, textColor: clr.text })}
                  className={`p-2 rounded-xl text-[10px] font-bold border transition-all flex items-center justify-center ${
                    formData.color === clr.bg ? 'border-[#332822] ring-2 ring-[#B96F58]/40 scale-105' : 'border-[#D9A99A]/40'
                  }`}
                  style={{ backgroundColor: clr.bg, color: clr.text }}
                >
                  {clr.label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D9A99A]/30">
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
              <span>{collection ? 'Update Chapter' : 'Add Chapter'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
