import React from 'react';
import { Sparkles, Plus, Edit2, Trash2, Eye, ArrowUp, ArrowDown } from 'lucide-react';

export const StoryCmsTab = ({
  storyFrames,
  onOpenStoryModal,
  onDeleteStoryFrame
}) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Story Section & Frame CMS ({storyFrames.length})
          </h3>
          <p className="text-xs text-[#6F5145]">
            Configure dynamic homepage narrative frames, animations, color palettes & campaign banners
          </p>
        </div>

        <button
          onClick={() => onOpenStoryModal(null)}
          className="px-4 py-2 bg-[#B96F58] hover:bg-[#332822] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Story Frame</span>
        </button>
      </div>

      {/* Frame Visual Sequence */}
      <div className="space-y-4">
        {storyFrames.map((frame, index) => {
          const isDark = frame.bg === '#332822' || frame.bg === '#B96F58';
          
          return (
            <div
              key={frame.id}
              className="p-6 rounded-3xl border border-[#D9A99A]/40 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:shadow-md"
              style={{
                backgroundColor: frame.bg || '#F8E8D5',
                color: isDark ? '#F8E8D5' : '#332822'
              }}
            >
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/40 text-current backdrop-blur-xs">
                    {frame.tag || `Frame 0${index + 1}`}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/10 text-current">
                    Animation: {frame.animation}
                  </span>
                </div>

                <h4 className="font-editorial text-xl font-bold leading-tight">
                  {frame.title}
                </h4>
                <p className="text-xs opacity-85 leading-relaxed">
                  {frame.subtitle}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 self-end md:self-auto">
                <button
                  onClick={() => onOpenStoryModal(frame)}
                  className="px-3.5 py-1.5 bg-white/80 hover:bg-white text-[#332822] rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit Frame</span>
                </button>

                <button
                  onClick={() => onDeleteStoryFrame(frame.id)}
                  className="p-2 text-rose-600 hover:bg-white/80 rounded-xl transition-all"
                  title="Delete Frame"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
