import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Check, 
  RotateCcw, 
  Sun, 
  Moon, 
  Eye, 
  Sliders, 
  Droplet,
  Save,
  CheckCircle2,
  Brush
} from 'lucide-react';
import { THEME_PRESETS, DEFAULT_THEME } from '../data/themePresets';
import { generateThemeTokens } from '../utils/contrastUtils';

export const ThemeTab = ({
  currentTheme,
  onApplyTheme,
  onResetTheme
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState(currentTheme?.id || 'classic-peach');
  const [customColors, setCustomColors] = useState(currentTheme?.colors || DEFAULT_THEME.colors);
  const [saveToast, setSaveToast] = useState(false);

  const handleSelectPreset = (preset) => {
    setSelectedPresetId(preset.id);
    setCustomColors(preset.colors);
    onApplyTheme(preset);
    showFeedback();
  };

  const handleCustomColorChange = (key, value) => {
    const updated = {
      ...customColors,
      [key]: value
    };
    setCustomColors(updated);
    setSelectedPresetId('custom');

    const customThemeObj = {
      id: 'custom',
      name: 'Custom Tailored Theme',
      description: 'Hand-picked brand colors configured in Admin Control Centre.',
      previewHex: updated.primary,
      colors: updated
    };
    onApplyTheme(customThemeObj);
  };

  const showFeedback = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#332822] text-[#F8E8D5] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-[#E8D49A] animate-in slide-in-from-bottom duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold">Theme colors updated and applied live to website!</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#F4D2BE]/60 via-[#F8E8D5] to-[#C9BDD8]/40 p-6 sm:p-8 rounded-3xl border border-[#D9A99A]/50 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B96F58]/10 text-[#B96F58] text-[10px] font-bold uppercase tracking-widest mb-2 border border-[#B96F58]/20">
            <Palette className="w-3.5 h-3.5" />
            <span>Storefront Visual Identity</span>
          </div>
          <h2 className="font-editorial text-3xl font-bold text-[#332822]">
            Website Color Theme & Aesthetic Studio
          </h2>
          <p className="text-xs sm:text-sm text-[#6F5145] mt-1 max-w-xl">
            Change the global aesthetic theme of the customer website. Pick from curated boutique colorways or customize your own brand palette.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            onClick={() => {
              if (window.confirm('Reset website theme back to Classic Peach & Terracotta?')) {
                onResetTheme();
                setSelectedPresetId(DEFAULT_THEME.id);
                setCustomColors(DEFAULT_THEME.colors);
                showFeedback();
              }
            }}
            className="px-4 py-2.5 rounded-2xl bg-white/80 hover:bg-[#F4D2BE] border border-[#D9A99A]/60 text-[#6F5145] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: CURATED THEME PRESETS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Curated Boutique Color Schemes ({THEME_PRESETS.length})
          </h3>
          <span className="text-xs text-[#6F5145] font-medium">
            1-Click instant application to all store pages
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {THEME_PRESETS.map((preset) => {
            const isSelected = selectedPresetId === preset.id;
            const c = preset.colors;

            return (
              <div
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`rounded-3xl border p-5 transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-xs hover:shadow-xl ${
                  isSelected
                    ? 'border-[#B96F58] bg-white ring-2 ring-[#B96F58]/40 scale-[1.02] shadow-md'
                    : 'border-[#D9A99A]/50 bg-white/80 hover:bg-white'
                }`}
              >
                <div>
                  {/* Top Color Palette Preview Bar */}
                  <div
                    className="h-24 rounded-2xl p-3 flex flex-col justify-between shadow-inner border border-white/60 mb-4 transition-transform group-hover:scale-[1.01]"
                    style={{ backgroundColor: c.background }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs flex items-center gap-1"
                        style={{ backgroundColor: c.primary, color: '#FFFFFF' }}
                      >
                        <Brush className="w-3 h-3" />
                        <span>Preview</span>
                      </span>

                      {isSelected && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white flex items-center gap-1 shadow-xs">
                          <Check className="w-3 h-3" />
                          <span>Active Theme</span>
                        </span>
                      )}
                    </div>

                    {/* Color Swatch Strip */}
                    <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/80 backdrop-blur-xs border border-white/60 shadow-xs">
                      <span className="w-5 h-5 rounded-lg shadow-2xs border border-white/40" style={{ backgroundColor: c.primary }} title="Primary" />
                      <span className="w-5 h-5 rounded-lg shadow-2xs border border-white/40" style={{ backgroundColor: c.secondary }} title="Secondary" />
                      <span className="w-5 h-5 rounded-lg shadow-2xs border border-white/40" style={{ backgroundColor: c.background }} title="Background" />
                      <span className="w-5 h-5 rounded-lg shadow-2xs border border-white/40" style={{ backgroundColor: c.textPrimary }} title="Text" />
                      <span className="w-5 h-5 rounded-lg shadow-2xs border border-white/40" style={{ backgroundColor: c.accent }} title="Accent" />
                    </div>
                  </div>

                  <h4 className="font-editorial text-lg font-bold text-[#332822] group-hover:text-[#B96F58] transition-colors">
                    {preset.name}
                  </h4>
                  <p className="text-xs text-[#6F5145] mt-1 line-clamp-2 leading-relaxed">
                    {preset.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D9A99A]/30 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#6F5145]">
                    Primary: <strong>{c.primary}</strong>
                  </span>

                  <button
                    type="button"
                    className={`px-3.5 py-1.5 rounded-xl font-display font-bold text-xs transition-all ${
                      isSelected
                        ? 'bg-[#B96F58] text-white shadow-xs'
                        : 'bg-[#FAF5EE] text-[#332822] group-hover:bg-[#B96F58] group-hover:text-white'
                    }`}
                  >
                    {isSelected ? 'Applied ✓' : 'Apply Theme'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: CUSTOM COLOR PICKER CONTROLS */}
      <div className="bg-white/90 rounded-3xl border border-[#D9A99A]/50 p-6 sm:p-8 space-y-6 shadow-xs max-w-4xl">
        <div className="border-b border-[#D9A99A]/40 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-editorial text-2xl font-bold text-[#332822]">
              Fine-Tune Brand Colors
            </h3>
            <p className="text-xs text-[#6F5145] mt-1">
              Select specific hex codes for every component on the customer storefront.
            </p>
          </div>
          {selectedPresetId === 'custom' && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#B96F58] text-white self-start sm:self-auto shadow-xs">
              Custom Theme Active
            </span>
          )}
        </div>

        {/* Live Color Pickers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          
          {/* Primary Color */}
          <div className="p-4 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/50 space-y-2">
            <label className="text-[11px] font-bold text-[#332822] uppercase tracking-wider block">
              Primary Brand Color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customColors.primary || '#B96F58'}
                onChange={(e) => handleCustomColorChange('primary', e.target.value)}
                className="w-10 h-10 rounded-xl border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
              />
              <input
                type="text"
                value={customColors.primary || '#B96F58'}
                onChange={(e) => handleCustomColorChange('primary', e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-mono text-[#332822]"
              />
            </div>
            <p className="text-[10px] text-[#6F5145]">Buttons, badges, active links, checkout CTAs</p>
          </div>

          {/* Secondary Color */}
          <div className="p-4 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/50 space-y-2">
            <label className="text-[11px] font-bold text-[#332822] uppercase tracking-wider block">
              Secondary Soft Accent
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customColors.secondary || '#F4D2BE'}
                onChange={(e) => handleCustomColorChange('secondary', e.target.value)}
                className="w-10 h-10 rounded-xl border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
              />
              <input
                type="text"
                value={customColors.secondary || '#F4D2BE'}
                onChange={(e) => handleCustomColorChange('secondary', e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-mono text-[#332822]"
              />
            </div>
            <p className="text-[10px] text-[#6F5145]">Soft card backgrounds, hero gradients</p>
          </div>

          {/* Background Color */}
          <div className="p-4 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/50 space-y-2">
            <label className="text-[11px] font-bold text-[#332822] uppercase tracking-wider block">
              Page Background Canvas
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customColors.background || '#F8E8D5'}
                onChange={(e) => handleCustomColorChange('background', e.target.value)}
                className="w-10 h-10 rounded-xl border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
              />
              <input
                type="text"
                value={customColors.background || '#F8E8D5'}
                onChange={(e) => handleCustomColorChange('background', e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-mono text-[#332822]"
              />
            </div>
            <p className="text-[10px] text-[#6F5145]">Global website page background</p>
          </div>

          {/* Text Primary */}
          <div className="p-4 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/50 space-y-2">
            <label className="text-[11px] font-bold text-[#332822] uppercase tracking-wider block">
              Headlines & Main Text
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customColors.textPrimary || '#332822'}
                onChange={(e) => handleCustomColorChange('textPrimary', e.target.value)}
                className="w-10 h-10 rounded-xl border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
              />
              <input
                type="text"
                value={customColors.textPrimary || '#332822'}
                onChange={(e) => handleCustomColorChange('textPrimary', e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-mono text-[#332822]"
              />
            </div>
            <p className="text-[10px] text-[#6F5145]">Headings, product titles, bold text</p>
          </div>

          {/* Text Secondary */}
          <div className="p-4 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/50 space-y-2">
            <label className="text-[11px] font-bold text-[#332822] uppercase tracking-wider block">
              Muted Body Text
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customColors.textSecondary || '#6F5145'}
                onChange={(e) => handleCustomColorChange('textSecondary', e.target.value)}
                className="w-10 h-10 rounded-xl border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
              />
              <input
                type="text"
                value={customColors.textSecondary || '#6F5145'}
                onChange={(e) => handleCustomColorChange('textSecondary', e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-mono text-[#332822]"
              />
            </div>
            <p className="text-[10px] text-[#6F5145]">Paragraph descriptions, sub-labels</p>
          </div>

          {/* Accent Glow */}
          <div className="p-4 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/50 space-y-2">
            <label className="text-[11px] font-bold text-[#332822] uppercase tracking-wider block">
              Accent Sparkle / Highlight
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customColors.accent || '#E8D49A'}
                onChange={(e) => handleCustomColorChange('accent', e.target.value)}
                className="w-10 h-10 rounded-xl border border-[#D9A99A]/60 cursor-pointer p-0.5 bg-white"
              />
              <input
                type="text"
                value={customColors.accent || '#E8D49A'}
                onChange={(e) => handleCustomColorChange('accent', e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-mono text-[#332822]"
              />
            </div>
            <p className="text-[10px] text-[#6F5145]">Promo pills, sparkle stars, ratings</p>
          </div>

        </div>

        {/* Live Preview Card */}
        {(() => {
          const liveTokens = generateThemeTokens(customColors);
          return (
            <div className="pt-4 border-t border-[#D9A99A]/40 space-y-3">
              <span className="text-xs font-bold text-[#6F5145] uppercase tracking-wider block">
                Live Storefront Component Simulation
              </span>
              <div
                className="p-6 rounded-3xl border shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 transition-all"
                style={{ 
                  backgroundColor: liveTokens.surface,
                  borderColor: liveTokens.border
                }}
              >
                <div className="space-y-1 text-center sm:text-left">
                  <div 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-2xs" 
                    style={{ backgroundColor: liveTokens.accent, color: liveTokens.accentForeground }}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Sample Promotion Pill</span>
                  </div>
                  <h4 className="font-editorial text-2xl font-bold" style={{ color: liveTokens.heading }}>
                    Handcrafted With Love in GIFTPocket
                  </h4>
                  <p className="text-xs max-w-md" style={{ color: liveTokens.foregroundMuted }}>
                    This is how products, headings, and description paragraphs appear across the storefront with your active palette.
                  </p>
                </div>

                <button
                  type="button"
                  className="px-6 py-3 rounded-2xl font-display font-bold text-xs shadow-md transition-all shrink-0 hover:scale-105 active:scale-95"
                  style={{ 
                    backgroundColor: liveTokens.primary,
                    color: liveTokens.primaryForeground
                  }}
                >
                  Sample Primary Button →
                </button>
              </div>
            </div>
          );
        })()}

      </div>

    </div>
  );
};
