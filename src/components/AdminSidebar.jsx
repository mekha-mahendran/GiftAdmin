import React from 'react';
import {
  LayoutDashboard,
  Layers,
  Package,
  ShoppingCart,
  Store,
  Sparkles,
  Tag,
  AlertTriangle,
  Settings,
  ExternalLink,
  Gift,
  Palette,
  Brush,
  Image as ImageIcon
} from 'lucide-react';

export const AdminSidebar = ({ currentTab, setTab, stats }) => {
  const navItems = [
    { id: 'overview', label: 'Overview & KPIs', icon: LayoutDashboard, badge: null },
    { id: 'media', label: 'Homepage Pictures CMS', icon: ImageIcon, badge: stats?.mediaCount, badgeColor: 'bg-[#B96F58]' },
    { id: 'customizer', label: 'Customizer Studio CMS', icon: Palette, badge: stats?.customizerThemesCount, badgeColor: 'bg-purple-600' },
    { id: 'products', label: 'Products & Inventory', icon: Package, badge: stats?.productsCount },
    { id: 'orders', label: 'Orders Pipeline', icon: ShoppingCart, badge: stats?.pendingOrders, badgeColor: 'bg-amber-600' },
    { id: 'collections', label: 'Collections & Chapters', icon: Layers, badge: stats?.categoriesCount },
    { id: 'wholesale', label: 'Wholesale B2B Desk', icon: Store, badge: stats?.pendingWholesale, badgeColor: 'bg-[#B96F58]' },
    { id: 'cms', label: 'Story & CMS Frames', icon: Sparkles, badge: null },
    { id: 'coupons', label: 'Coupons & Promos', icon: Tag, badge: null },
    { id: 'inventory', label: 'Stock Health Alerts', icon: AlertTriangle, badge: stats?.lowStockCount, badgeColor: 'bg-rose-600' },
    { id: 'settings', label: 'Store Settings', icon: Settings, badge: null },
  ];

  return (
    <aside className="w-64 bg-[#18110D] text-[#FFFDF7] flex flex-col shrink-0 min-h-screen border-r border-[#6F5145]/60 select-none">
      {/* Brand Logo Box */}
      <div className="p-6 border-b border-[#6F5145]/60 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#AC5B44] flex items-center justify-center text-white shadow-md shadow-[#AC5B44]/30">
          <Gift className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-editorial text-lg font-bold tracking-wide text-white leading-tight">
            GIFTPocket
          </h1>
          <span className="text-[11px] font-sans font-bold text-[#F4D2BE] uppercase tracking-wider block">
            Control Centre
          </span>
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-black uppercase tracking-wider text-[#E8D49A]">
          Main Management
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all group cursor-pointer ${
                isActive
                  ? 'bg-[#AC5B44] text-white font-bold shadow-sm shadow-[#AC5B44]/40 translate-x-1'
                  : 'text-[#F5E8DC] hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-[#F4D2BE]'}`} />
                <span>{item.label}</span>
              </div>

              {item.badge !== null && item.badge !== undefined && item.badge > 0 && (
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-xs ${
                    item.badgeColor || 'bg-[#AC5B44]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Store Status & Storefront Link */}
      <div className="p-4 border-t border-[#6F5145]/40 bg-[#251D19]/60 space-y-3">
        <div className="flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Storefront Live
          </span>
          <span className="text-[#D9A99A] text-[10px] font-mono">v1.2.0</span>
        </div>

        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#F8E8D5] text-xs font-medium transition-all"
        >
          <span>Open Public Store</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
