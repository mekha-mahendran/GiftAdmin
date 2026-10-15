import React from 'react';
import { Search, Bell, Sparkles, RefreshCw, UserCheck } from 'lucide-react';

export const AdminHeader = ({ title, subtitle, onRefresh, searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-[#D9A99A]/30 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Page Title */}
      <div>
        <h2 className="font-editorial text-2xl font-bold text-[#332822] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-[#6F5145] font-normal mt-0.5">
            {subtitle}
          </p>
        )}
      </div>

      {/* Header Actions & Quick Search */}
      <div className="flex items-center gap-3">
        {setSearchQuery !== undefined && (
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6F5145]/60" />
            <input
              type="text"
              placeholder="Search catalog, orders..."
              value={searchQuery || ''}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#F8E8D5]/30 border border-[#D9A99A]/40 rounded-xl text-xs font-sans text-[#332822] placeholder:text-[#6F5145]/50 focus:outline-none focus:border-[#B96F58] focus:ring-2 focus:ring-[#B96F58]/20 transition-all"
            />
          </div>
        )}

        <button
          type="button"
          onClick={onRefresh}
          className="p-2 text-[#6F5145] hover:text-[#B96F58] hover:bg-[#F4D2BE]/30 rounded-xl transition-all border border-[#D9A99A]/30"
          title="Refresh Data"
        >
          <RefreshCw className="w-4 h-4" />
        </button>

        <div className="h-6 w-px bg-[#D9A99A]/40"></div>

        {/* Admin Profile Chip */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 bg-[#F8E8D5]/60 border border-[#D9A99A]/40 rounded-2xl">
          <div className="w-7 h-7 rounded-xl bg-[#B96F58] text-[#F8E8D5] flex items-center justify-center font-bold text-xs">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
          </div>
          <div className="hidden sm:block text-left">
            <span className="text-xs font-bold text-[#332822] block leading-none">
              Store Master
            </span>
            <span className="text-[10px] text-[#6F5145] font-medium">
              Administrator
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
