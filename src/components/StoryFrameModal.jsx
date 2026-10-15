import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check } from 'lucide-react';

export const StoryFrameModal = ({ isOpen, onClose, onSave, frame }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    bg: '#F8E8D5',
    animation: 'fade',
    tag: 'Chapter 01: The Intro',
    order: 1
  });

  const presetTones = [
    { bg: '#F8E8D5', label: 'Warm Cream' },
    { bg: '#F4D2BE', label: 'Soft Peach' },
    { bg: '#E8D49A', label: 'Butter Yellow' },
    { bg: '#C9BDD8', label: 'Lavender' },
    { bg: '#B96F58', label: 'Terracotta' },
    { bg: '#332822', label: 'Dark Chocolate' }
  ];

  useEffect(() => {
    if (frame) {
      setFormData({
        title: frame.title || '',
        subtitle: frame.subtitle || '',
        bg: frame.bg || '#F8E8D5',
        animation: frame.animation || 'fade',
        tag: frame.tag || 'Chapter',
        order: frame.order || 1
      });
    } else {
      setFormData({
        title: '',
        subtitle: '',
        bg: '#F8E8D5',
        animation: 'fade',
        tag: 'Chapter 01: Custom',
        order: 1
      });
    }
  }, [frame, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onSave({
      ...formData,
      order: Number(formData.order) || 1
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
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold">
                {frame ? 'Edit Story Frame' : 'Add Story Frame'}
              </h3>
              <p className="text-[11px] text-[#D9A99A]">
                Configure cinematic headlines, background tones & transition effects
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
            <label className="font-bold text-[#332822]">Chapter Tag</label>
            <input
              type="text"
              value={formData.tag}
              onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
              placeholder="e.g. Chapter 01: The Intro"
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Headline / Story Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Little things. Big smiles."
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-bold text-[#332822] focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-[#332822]">Subheading / Story Paragraph</label>
            <textarea
              rows={2}
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              placeholder="e.g. A cute organic gift boutique handcrafted with love..."
              className="w-full px-3.5 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Animation Style</label>
              <select
                value={formData.animation}
                onChange={(e) => setFormData({ ...formData, animation: e.target.value })}
                className="w-full px-3 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none"
              >
                <option value="fade">Smooth Fade In</option>
                <option value="pinned">Pinned Scroll</option>
                <option value="scale">Cinematic Zoom</option>
                <option value="slide">Horizontal Slide</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-[#332822]">Sequence Order</label>
              <input
                type="number"
                min="1"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                className="w-full px-3 py-2 bg-[#F8E8D5]/20 border border-[#D9A99A]/60 rounded-xl text-xs text-[#332822] focus:outline-none"
              />
            </div>
          </div>

          {/* Background Tone Presets */}
          <div className="space-y-2 pt-1">
            <label className="font-bold text-[#332822]">Background Palette Tone</label>
            <div className="grid grid-cols-3 gap-2">
              {presetTones.map((tone, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, bg: tone.bg })}
                  className={`p-2 rounded-xl text-[10px] font-bold border transition-all ${
                    formData.bg === tone.bg ? 'border-[#332822] ring-2 ring-[#B96F58]/40 scale-105' : 'border-[#D9A99A]/40'
                  }`}
                  style={{ backgroundColor: tone.bg, color: tone.bg === '#332822' || tone.bg === '#B96F58' ? '#F8E8D5' : '#332822' }}
                >
                  {tone.label}
                </button>
              ))}
            </div>
          </div>

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
              <span>{frame ? 'Save Frame' : 'Publish Frame'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
