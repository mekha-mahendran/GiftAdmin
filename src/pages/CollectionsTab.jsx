import React from 'react';
import { Layers, Plus, Edit2, Trash2, RotateCcw, Image, Sparkles } from 'lucide-react';

export const CollectionsTab = ({
  categories,
  onOpenCollectionModal,
  onDeleteCollection,
  onResetCollections
}) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Collections & Chapters CMS ({categories.length})
          </h3>
          <p className="text-xs text-[#6F5145]">
            Curate visual chapters, cover images, chapter number badges, and homepage carousels
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onResetCollections}
            className="px-3 py-2 bg-white text-[#6F5145] rounded-xl text-xs font-bold border border-[#D9A99A]/50 hover:bg-[#F8E8D5] transition-all flex items-center gap-1.5"
            title="Restore Default Categories"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={() => onOpenCollectionModal(null)}
            className="px-4 py-2 bg-[#B96F58] hover:bg-[#332822] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Chapter</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={cat.id}
            className="bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Image Header with Chapter Ribbon */}
            <div className="relative h-44 bg-[#FAF5EE] overflow-hidden">
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-[#6F5145] font-semibold bg-[#F8E8D5]/40">
                  <span>No photo uploaded</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#332822]/85 via-transparent to-transparent" />
              
              {/* Chapter Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs"
                  style={{
                    backgroundColor: cat.color || '#F4D2BE',
                    color: cat.textColor || '#332822'
                  }}
                >
                  Chapter {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Items Counter */}
              <div className="absolute top-3 right-3 bg-[#332822]/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                {cat.itemCount || 15} Curated Items
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-3 left-4 right-4">
                <h4 className="font-editorial text-lg font-bold text-white leading-snug">
                  {cat.name}
                </h4>
              </div>
            </div>

            {/* Description & Action */}
            <div className="p-5 space-y-4">
              <p className="text-xs text-[#6F5145] line-clamp-2 leading-relaxed">
                {cat.description || 'Delightful artisanal accessories and customized gift treasures.'}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#D9A99A]/30 text-xs">
                <button
                  onClick={() => onOpenCollectionModal(cat)}
                  className="px-3.5 py-1.5 bg-[#B96F58] hover:bg-[#332822] text-white font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit Chapter</span>
                </button>

                <button
                  onClick={() => onDeleteCollection(cat.id)}
                  className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Delete Chapter"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
