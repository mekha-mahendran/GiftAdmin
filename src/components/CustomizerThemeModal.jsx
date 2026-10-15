import React, { useState, useEffect } from 'react';
import { X, Sparkles, Palette, Plus, Trash2, Check } from 'lucide-react';

export const CustomizerThemeModal = ({ isOpen, onClose, onSave, theme }) => {
  const [name, setName] = useState('');
  const [hex, setHex] = useState('#C9BDD8');
  const [textColor, setTextColor] = useState('#332822');
  const [description, setDescription] = useState('');
  const [beadPalette, setBeadPalette] = useState(['#C9BDD8', '#F4D2BE', '#F8E8D5']);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (theme) {
      setName(theme.name || '');
      setHex(theme.hex || '#C9BDD8');
      setTextColor(theme.textColor || '#332822');
      setDescription(theme.description || '');
      setBeadPalette(theme.beadPalette || ['#C9BDD8', '#F4D2BE', '#F8E8D5']);
      setIsActive(theme.isActive !== false);
    } else {
      setName('');
      setHex('#C9BDD8');
      setTextColor('#332822');
      setDescription('');
      setBeadPalette(['#C9BDD8', '#F4D2BE', '#F8E8D5']);
      setIsActive(true);
    }
  }, [theme, isOpen]);

  if (!isOpen) return null;

  const handleBeadColorChange = (index, newColor) => {
    const updated = [...beadPalette];
    updated[index] = newColor;
    setBeadPalette(updated);
  };

  const handleAddBead = () => {
    if (beadPalette.length < 5) {
      setBeadPalette([...beadPalette, '#E8D49A']);
    }
  };

  const handleRemoveBead = (index) => {
    if (beadPalette.length > 2) {
      setBeadPalette(beadPalette.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter a theme name');
      return;
    }

    onSave({
      id: theme ? theme.id : `theme-${Date.now()}`,
      name: name.trim(),
      hex,
      textColor,
      description: description.trim(),
      beadPalette,
      isActive
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#332822]/60 backdrop-blur-xs">
      <div className="bg-[#FAF5EE] rounded-3xl border border-[#D9A99A]/60 shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-[#F4D2BE]/60 border-b border-[#D9A99A]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#B96F58] flex items-center justify-center text-white shadow-md">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#332822]">
                {theme ? 'Edit Customizer Palette' : 'Add Customizer Color Theme'}
              </h3>
              <p className="text-xs text-[#6F5145]">
                Configure bead palettes and cords for the 2D Studio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/60 hover:bg-[#332822] text-[#332822] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Live Preview Card */}
          <div>
            <label className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider block mb-2">
              Live Theme Preview
            </label>
            <div 
              className="p-4 rounded-2xl border border-[#D9A99A]/60 shadow-xs flex items-center justify-between"
              style={{ backgroundColor: hex || '#F4D2BE' }}
            >
              <div className="space-y-1">
                <p className="font-editorial text-lg font-bold" style={{ color: textColor }}>
                  {name || 'Sample Palette Name'}
                </p>
                <p className="text-xs opacity-80" style={{ color: textColor }}>
                  {description || 'Preview of bead and cord styling in Live Customizer'}
                </p>
              </div>

              {/* Bead Trio Preview */}
              <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/70 backdrop-blur-xs border border-white/80 shadow-xs">
                {beadPalette.map((color, i) => (
                  <span
                    key={i}
                    className="w-5 h-5 rounded-full shadow-inner border border-white/60"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Theme Name */}
          <div>
            <label className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
              Theme / Palette Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Pastel Lavender, Matcha Green, Midnight Stars"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-sans text-[#332822] focus:outline-none focus:border-[#B96F58]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
              Description / Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Soft pastel purple cord with milk glass bead accents"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-sans text-[#332822] focus:outline-none focus:border-[#B96F58]"
            />
          </div>

          {/* Primary Hex & Text Color */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                Cord / Card Hex Color
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={hex}
                  onChange={(e) => setHex(e.target.value)}
                  className="w-10 h-10 rounded-xl border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={hex}
                  onChange={(e) => setHex(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-mono text-[#332822]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                Text Contrast Color
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-10 h-10 rounded-xl border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-mono text-[#332822]"
                />
              </div>
            </div>
          </div>

          {/* Bead Palette Color Swatches */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider">
                Bead Colors in Palette ({beadPalette.length})
              </label>
              {beadPalette.length < 5 && (
                <button
                  type="button"
                  onClick={handleAddBead}
                  className="text-xs text-[#B96F58] font-bold hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Bead Color</span>
                </button>
              )}
            </div>

            <div className="space-y-2">
              {beadPalette.map((color, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-2 rounded-xl border border-[#D9A99A]/40">
                  <span className="text-[10px] font-bold text-[#6F5145] w-14">
                    Bead #{index + 1}
                  </span>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => handleBeadColorChange(index, e.target.value)}
                    className="w-8 h-8 rounded-lg border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
                  />
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => handleBeadColorChange(index, e.target.value)}
                    className="flex-1 px-3 py-1.5 bg-[#FAF5EE] rounded-lg border border-[#D9A99A]/40 text-xs font-mono"
                  />
                  {beadPalette.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveBead(index)}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Remove bead color"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Status Switch */}
          <div className="flex items-center justify-between pt-2 border-t border-[#D9A99A]/30">
            <div>
              <p className="text-xs font-bold text-[#332822]">Enable on Customized Page</p>
              <p className="text-[11px] text-[#6F5145]">Shoppers can pick this color palette</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B96F58]"></div>
            </label>
          </div>

          {/* Submit Actions */}
          <div className="pt-4 border-t border-[#D9A99A]/40 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white border border-[#D9A99A]/60 text-xs font-bold text-[#6F5145] hover:bg-[#F4D2BE] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#B96F58] hover:bg-[#332822] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>{theme ? 'Save Changes' : 'Create Palette'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
