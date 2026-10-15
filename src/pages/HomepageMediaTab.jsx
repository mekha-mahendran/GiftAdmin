import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Plus,
  Edit2,
  Trash2,
  RotateCcw,
  ExternalLink,
  Layers,
  Sparkles,
  Filter,
  Eye
} from 'lucide-react';
import { HOMEPAGE_SECTIONS } from '../data/initialData';

export const HomepageMediaTab = ({
  mediaList,
  onOpenMediaModal,
  onDeleteMedia,
  onResetMedia
}) => {
  const [selectedSection, setSelectedSection] = useState('all');

  const filteredMedia = mediaList.filter(
    (item) => selectedSection === 'all' || item.section === selectedSection
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Home Page Pictures & Visual Media CMS ({mediaList.length})
          </h3>
          <p className="text-xs text-[#6F5145]">
            Add, update image URLs, customize photo captions, or delete pictures across all home page sections
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onResetMedia}
            className="px-3 py-2 bg-white text-[#6F5145] rounded-xl text-xs font-bold border border-[#D9A99A]/50 hover:bg-[#F8E8D5] transition-all flex items-center gap-1.5"
            title="Restore default photographs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Photography</span>
          </button>

          <button
            onClick={() => onOpenMediaModal(null)}
            className="px-4 py-2 bg-[#B96F58] hover:bg-[#332822] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Picture</span>
          </button>
        </div>
      </div>

      {/* Section Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#D9A99A]/30">
        {HOMEPAGE_SECTIONS.map((sec) => {
          const count =
            sec.id === 'all'
              ? mediaList.length
              : mediaList.filter((m) => m.section === sec.id).length;
          const isActive = selectedSection === sec.id;

          return (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#332822] text-white shadow-xs'
                  : 'bg-white/80 text-[#6F5145] hover:bg-[#F4D2BE]'
              }`}
            >
              <span>{sec.name}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isActive ? 'bg-[#B96F58] text-white' : 'bg-[#FAF5EE] text-[#6F5145]'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Media Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
          >
            {/* Image Preview Container */}
            <div className="relative h-48 bg-[#FAF5EE] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332822]/80 via-transparent to-transparent" />
              
              {/* Section Tag Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#332822]/80 text-white backdrop-blur-xs">
                  {item.sectionName || item.section}
                </span>
              </div>

              {/* Tag / Ribbon */}
              {item.tag && (
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E8D49A] text-[#332822] shadow-xs">
                    {item.tag}
                  </span>
                </div>
              )}

              {/* Title overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-editorial text-base font-bold leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>

            {/* Content & Actions */}
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-xs">
              <div className="space-y-1">
                <p className="text-[#6F5145] line-clamp-2 leading-relaxed">
                  {item.subtitle || 'Customized aesthetic photography for the home page.'}
                </p>

                {item.link && (
                  <div className="pt-1 flex items-center gap-1 text-[11px] font-mono text-[#B96F58]">
                    <ExternalLink className="w-3 h-3" />
                    <span>Route: {item.link}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-[#D9A99A]/30">
                <button
                  onClick={() => onOpenMediaModal(item)}
                  className="px-3.5 py-1.5 bg-[#B96F58] hover:bg-[#332822] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit Picture</span>
                </button>

                <button
                  onClick={() => onDeleteMedia(item.id)}
                  className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Remove picture from homepage"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMedia.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#D9A99A]/40 space-y-3">
          <ImageIcon className="w-10 h-10 text-[#D9A99A] mx-auto" />
          <h4 className="font-editorial text-lg font-bold text-[#332822]">No pictures found</h4>
          <p className="text-xs text-[#6F5145]">No images assigned to this section yet.</p>
          <p className="text-xs text-[#6F5145]">
            Click "+ Add Picture" to add new images to this section.
          </p>
        </div>
      )}

    </div>
  );
};
