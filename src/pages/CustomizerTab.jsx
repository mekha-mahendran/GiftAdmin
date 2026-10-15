import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Plus, 
  Edit3, 
  Trash2, 
  RotateCcw, 
  Save, 
  Check, 
  Sliders, 
  Heart, 
  Circle, 
  Square, 
  Star, 
  UploadCloud, 
  Type, 
  Layers 
} from 'lucide-react';
import { CustomizerThemeModal } from '../components/CustomizerThemeModal';

export const CustomizerTab = ({
  customizerConfig,
  onUpdateConfig,
  customizerThemes,
  onAddTheme,
  onUpdateTheme,
  onDeleteTheme,
  onResetThemes,
  customizerShapes,
  onToggleShape,
  onAddPrompt,
  onDeletePrompt,
  onResetAll
}) => {
  // Local form state for general config
  const [formData, setFormData] = useState({
    studioTitle: customizerConfig?.studioTitle || "The Customization Studio",
    studioSubtitle: customizerConfig?.studioSubtitle || "Handmade Just For You",
    studioDescription: customizerConfig?.studioDescription || "Choose a canvas below, pick your pastel bead palettes, spell out your letters, and preview your creation live in real-time.",
    maxLetterLength: customizerConfig?.maxLetterLength || 10,
    defaultLetterText: customizerConfig?.defaultLetterText || "SMILE",
    photoUploadEnabled: customizerConfig?.photoUploadEnabled !== false
  });

  const [activeTabSection, setActiveTabSection] = useState('themes'); // 'themes', 'general', 'prompts', 'shapes'
  const [editingTheme, setEditingTheme] = useState(null);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [newPromptTag, setNewPromptTag] = useState('');
  const [newPromptExample, setNewPromptExample] = useState('');
  const [saveToast, setSaveToast] = useState(false);

  const handleConfigSubmit = (e) => {
    e.preventDefault();
    onUpdateConfig(formData);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleCreatePrompt = (e) => {
    e.preventDefault();
    if (!newPromptTag.trim()) return;
    onAddPrompt({
      tag: newPromptTag.trim(),
      example: newPromptExample.trim() || 'e.g. "CUSTOM TEXT"'
    });
    setNewPromptTag('');
    setNewPromptExample('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#332822] text-[#F8E8D5] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-[#E8D49A] animate-in slide-in-from-bottom duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold">Customizer Studio settings saved successfully!</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#F4D2BE]/60 via-[#F8E8D5] to-[#C9BDD8]/40 p-6 sm:p-8 rounded-3xl border border-[#D9A99A]/50 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B96F58]/10 text-[#B96F58] text-[10px] font-bold uppercase tracking-widest mb-2 border border-[#B96F58]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Studio Manager</span>
          </div>
          <h2 className="font-editorial text-3xl font-bold text-[#332822]">
            Customized Site & Studio Controls
          </h2>
          <p className="text-xs sm:text-sm text-[#6F5145] mt-1 max-w-xl">
            Edit live bead palettes, cords, letter limits, inspiration prompts, and photo charm configurations for <strong>/customized</strong>.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
          <button
            onClick={() => {
              if (window.confirm('Reset all customizer options and palettes back to factory defaults?')) {
                onResetAll();
              }
            }}
            className="px-4 py-2.5 rounded-2xl bg-white/80 hover:bg-[#F4D2BE] border border-[#D9A99A]/60 text-[#6F5145] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={() => {
              setEditingTheme(null);
              setIsThemeModalOpen(true);
            }}
            className="px-5 py-2.5 rounded-2xl bg-[#B96F58] hover:bg-[#332822] text-[#F8E8D5] text-xs font-display font-bold transition-all shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Color Theme</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-[#D9A99A]/40">
        {[
          { id: 'themes', name: '🎨 Bead & Color Palettes', count: customizerThemes?.length },
          { id: 'general', name: '⚙️ Studio Copy & Limits' },
          { id: 'prompts', name: '💡 Letter Inspirations', count: customizerConfig?.inspirationPrompts?.length },
          { id: 'shapes', name: '✨ Frame & Pendant Shapes', count: customizerShapes?.length }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabSection(tab.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-display font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTabSection === tab.id
                ? 'bg-[#B96F58] text-[#F8E8D5] shadow-md -translate-y-0.5'
                : 'bg-white/60 text-[#332822] hover:bg-[#F4D2BE] border border-[#D9A99A]/40'
            }`}
          >
            <span>{tab.name}</span>
            {tab.count !== undefined && (
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                activeTabSection === tab.id ? 'bg-white/30 text-white' : 'bg-[#E8D49A] text-[#6F5145]'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* SECTION 1: THEMES & COLOR PALETTES */}
      {activeTabSection === 'themes' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6F5145]">
              Active Color Schemes ({customizerThemes?.length || 0})
            </span>
            <button
              onClick={onResetThemes}
              className="text-xs font-semibold text-[#B96F58] hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Themes</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customizerThemes?.map((theme, idx) => (
              <div
                key={theme.id}
                className="bg-white/80 rounded-3xl border border-[#D9A99A]/50 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Theme Top Card Banner */}
                  <div
                    className="h-20 rounded-2xl p-4 flex items-center justify-between shadow-inner border border-white/60 mb-4"
                    style={{ backgroundColor: theme.hex }}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75" style={{ color: theme.textColor }}>
                        Theme #{idx + 1}
                      </span>
                      <h4 className="font-editorial text-lg font-bold" style={{ color: theme.textColor }}>
                        {theme.name}
                      </h4>
                    </div>

                    {/* Bead Swatches */}
                    <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-white/80 shadow-xs">
                      {theme.beadPalette?.map((color, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-4 h-4 rounded-full shadow-inner border border-white/50"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-[#6F5145] line-clamp-2 leading-relaxed mb-3">
                    {theme.description || "Custom pastel cord and hand-assembled bead colorway."}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6F5145] bg-[#FAF5EE] p-2 rounded-xl border border-[#D9A99A]/40 mb-4">
                    <span>Base: <strong className="text-[#332822]">{theme.hex}</strong></span>
                    <span>•</span>
                    <span>Beads: <strong>{theme.beadPalette?.length || 3} colors</strong></span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-[#D9A99A]/30 flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    theme.isActive !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {theme.isActive !== false ? '● Active in Studio' : '○ Hidden'}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        setEditingTheme(theme);
                        setIsThemeModalOpen(true);
                      }}
                      className="p-2 rounded-xl bg-white hover:bg-[#B96F58] hover:text-white text-[#6F5145] border border-[#D9A99A]/50 transition-colors"
                      title="Edit Palette"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete theme "${theme.name}"?`)) {
                          onDeleteTheme(theme.id);
                        }
                      }}
                      className="p-2 rounded-xl bg-white hover:bg-rose-600 hover:text-white text-rose-600 border border-rose-200 transition-colors"
                      title="Delete Theme"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: GENERAL STUDIO CONFIGURATION & LIMITS */}
      {activeTabSection === 'general' && (
        <form onSubmit={handleConfigSubmit} className="bg-white/80 rounded-3xl border border-[#D9A99A]/50 p-6 sm:p-8 space-y-6 shadow-xs max-w-3xl">
          <div className="border-b border-[#D9A99A]/40 pb-4">
            <h3 className="font-editorial text-2xl font-bold text-[#332822]">
              Studio Headlines & Letter Constraints
            </h3>
            <p className="text-xs text-[#6F5145] mt-1">
              Changes update immediately on the live customer studio at <strong>/customized</strong>.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                Studio Page Main Title
              </label>
              <input
                type="text"
                value={formData.studioTitle}
                onChange={(e) => setFormData({ ...formData, studioTitle: e.target.value })}
                className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-sans text-[#332822] focus:outline-none focus:border-[#B96F58]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                Studio Subtitle Tag
              </label>
              <input
                type="text"
                value={formData.studioSubtitle}
                onChange={(e) => setFormData({ ...formData, studioSubtitle: e.target.value })}
                className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-sans text-[#332822] focus:outline-none focus:border-[#B96F58]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                Studio Description Paragraph
              </label>
              <textarea
                rows={3}
                value={formData.studioDescription}
                onChange={(e) => setFormData({ ...formData, studioDescription: e.target.value })}
                className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-sans text-[#332822] focus:outline-none focus:border-[#B96F58]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                  Maximum Letter Character Limit
                </label>
                <input
                  type="number"
                  min={4}
                  max={20}
                  value={formData.maxLetterLength}
                  onChange={(e) => setFormData({ ...formData, maxLetterLength: parseInt(e.target.value) || 8 })}
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-sans text-[#332822] focus:outline-none focus:border-[#B96F58]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                  Default Placeholder Spelling
                </label>
                <input
                  type="text"
                  value={formData.defaultLetterText}
                  onChange={(e) => setFormData({ ...formData, defaultLetterText: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs font-display font-bold uppercase text-[#332822] focus:outline-none focus:border-[#B96F58]"
                />
              </div>
            </div>

            {/* Photo upload toggle */}
            <div className="flex items-center justify-between pt-4 border-t border-[#D9A99A]/30">
              <div>
                <p className="text-xs font-bold text-[#332822]">Enable Custom Photo Attachment</p>
                <p className="text-[11px] text-[#6F5145]">Allows customers to upload photo memories to the charm preview</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.photoUploadEnabled}
                  onChange={(e) => setFormData({ ...formData, photoUploadEnabled: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B96F58]"></div>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D9A99A]/40 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#B96F58] hover:bg-[#332822] text-[#F8E8D5] text-xs font-display font-bold rounded-2xl transition-all shadow-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Studio Settings</span>
            </button>
          </div>
        </form>
      )}

      {/* SECTION 3: LETTER INSPIRATION PROMPTS */}
      {activeTabSection === 'prompts' && (
        <div className="space-y-6 max-w-3xl">
          <div className="bg-white/80 rounded-3xl border border-[#D9A99A]/50 p-6 space-y-4 shadow-xs">
            <h3 className="font-editorial text-2xl font-bold text-[#332822]">
              Add New Inspiration Prompt
            </h3>
            <form onSubmit={handleCreatePrompt} className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
              <div>
                <label className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                  Tag / Icon Title
                </label>
                <input
                  type="text"
                  required
                  placeholder='e.g. 💖 Bestie Initials or 🧸 Nicknames'
                  value={newPromptTag}
                  onChange={(e) => setNewPromptTag(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs text-[#332822] focus:outline-none focus:border-[#B96F58]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider block mb-1">
                  Example Text
                </label>
                <input
                  type="text"
                  placeholder='e.g. "RIA & AMY"'
                  value={newPromptExample}
                  onChange={(e) => setNewPromptExample(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9A99A]/60 text-xs text-[#332822] focus:outline-none focus:border-[#B96F58]"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#B96F58] hover:bg-[#332822] text-[#F8E8D5] text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Prompt</span>
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6F5145]">
              Active Inspiration Pills on Studio Page
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {customizerConfig?.inspirationPrompts?.map((p) => (
                <div
                  key={p.id}
                  className="p-4 bg-white/80 rounded-2xl border border-[#D9A99A]/50 shadow-2xs flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="font-bold text-xs text-[#332822] block">{p.tag}</span>
                    <span className="text-xs text-[#6F5145]">{p.example}</span>
                  </div>
                  <button
                    onClick={() => onDeletePrompt(p.id)}
                    className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Delete prompt"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: SHAPES */}
      {activeTabSection === 'shapes' && (
        <div className="space-y-6 max-w-3xl">
          <div className="border-b border-[#D9A99A]/40 pb-4">
            <h3 className="font-editorial text-2xl font-bold text-[#332822]">
              Pendant & Charm Frame Shapes
            </h3>
            <p className="text-xs text-[#6F5145] mt-1">
              Toggle which charm frame shapes are available for shoppers to select.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {customizerShapes?.map((shape) => (
              <div
                key={shape.id}
                className="bg-white/80 rounded-2xl border border-[#D9A99A]/50 p-4 shadow-2xs flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4D2BE] flex items-center justify-center text-[#B96F58]">
                    {shape.id === 'heart' ? <Heart className="w-5 h-5 fill-current" /> :
                     shape.id === 'square' ? <Square className="w-5 h-5" /> :
                     shape.id === 'star' ? <Star className="w-5 h-5 fill-current" /> :
                     <Circle className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#332822]">{shape.name}</p>
                    <p className="text-[11px] text-[#6F5145]">ID: {shape.id}</p>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={shape.isActive !== false}
                    onChange={() => onToggleShape(shape.id)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#B96F58]"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Color Theme Edit/Create Modal */}
      <CustomizerThemeModal
        isOpen={isThemeModalOpen}
        onClose={() => {
          setIsThemeModalOpen(false);
          setEditingTheme(null);
        }}
        theme={editingTheme}
        onSave={(data) => {
          if (editingTheme) {
            onUpdateTheme(editingTheme.id, data);
          } else {
            onAddTheme(data);
          }
        }}
      />

    </div>
  );
};
