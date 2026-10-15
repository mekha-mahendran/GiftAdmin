import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, Check, Sparkles, Link as LinkIcon, Layers } from 'lucide-react';
import { HOMEPAGE_SECTIONS } from '../data/initialData';
import { ImageUploadPicker } from './ImageUploadPicker';

export const HomepageMediaModal = ({ isOpen, onClose, onSave, mediaItem }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    section: 'hero',
    tag: '',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
    link: '/shop',
    color: '#F4D2BE'
  });

  const availableSections = HOMEPAGE_SECTIONS.filter((s) => s.id !== 'all');

  useEffect(() => {
    if (mediaItem) {
      setFormData({
        title: mediaItem.title || '',
        subtitle: mediaItem.subtitle || '',
        section: mediaItem.section || 'hero',
        tag: mediaItem.tag || '',
        image: mediaItem.image || 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
        link: mediaItem.link || '/shop',
        color: mediaItem.color || mediaItem.bgColor || '#F4D2BE'
      });
    } else {
      setFormData({
        title: '',
        subtitle: '',
        section: 'gallery',
        tag: 'Featured Photo',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
        link: '/shop',
        color: '#F4D2BE'
      });
    }
  }, [mediaItem, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a title for the picture');
      return;
    }
    if (!formData.image.trim()) {
      alert('Please provide an image URL');
      return;
    }

    const secObj = availableSections.find((s) => s.id === formData.section);

    onSave({
      ...formData,
      sectionName: secObj ? secObj.name : 'Homepage Section'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#332822]/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-[#D9A99A]/40 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-150">
        
        {/* Header */}
        <div className="bg-[#332822] text-[#F8E8D5] px-6 py-4 flex items-center justify-between border-b border-[#B96F58]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#B96F58] text-[#F8E8D5] flex items-center justify-center font-bold">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold">
                {mediaItem ? 'Edit Homepage Picture' : 'Add New Homepage Picture'}
              </h3>
              <p className="text-[11px] text-[#D9A99A]">
                Configure image URL, section placement, captions & store links
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
          
          {/* Section Selector */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Homepage Section Placement *</label>
            <select
              value={formData.section}
              onChange={(e) => setFormData({ ...formData, section: e.target.value })}
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none focus:border-[#B96F58]"
            >
              {availableSections.map((sec) => (
                <option key={sec.id} value={sec.id}>
                  {sec.name}
                </option>
              ))}
            </select>
          </div>

          {/* Picture Title & Tag */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Title / Headline *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Birthday Treats Gift Hamper"
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Badge / Ribbon Tag</label>
              <input
                type="text"
                value={formData.tag}
                onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                placeholder="e.g. Bestseller, Chapter 01"
                className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none"
              />
            </div>
          </div>

          {/* Subtitle / Caption */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Subtitle / Descriptive Caption</label>
            <textarea
              rows={2}
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              placeholder="e.g. Handcrafted phone charm with golden chime bells..."
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none resize-none"
            />
          </div>

          {/* Image Upload & Picker */}
          <div className="p-3.5 bg-[#F8E8D5]/30 rounded-2xl border border-[#D9A99A]/40">
            <ImageUploadPicker
              value={formData.image}
              onChange={(newUrl) => setFormData({ ...formData, image: newUrl })}
              label="Homepage Photo / Asset"
              aspectHint="Select from device, paste URL, or pick from presets"
            />
          </div>

          {/* Click Navigation Link */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">On-Click Store Route</label>
            <input
              type="text"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              placeholder="/shop, /shop?mood=birthday, /customized"
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-mono text-[#332822] focus:outline-none"
            />
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
              <span>{mediaItem ? 'Save Changes' : 'Add Picture to Home'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
