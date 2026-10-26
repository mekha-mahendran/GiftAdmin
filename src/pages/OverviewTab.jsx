import React from 'react';
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  AlertTriangle,
  ArrowUpRight,
  Package,
  Layers,
  Sparkles,
  Store,
  ChevronRight,
  Clock
} from 'lucide-react';

export const OverviewTab = ({
  products,
  orders,
  categories,
  wholesaleApps,
  bulkEnquiries,
  setTab,
  onOpenOrderDetails,
  onOpenProductModal
}) => {
  // Compute Key Metrics
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const retailOrders = orders.filter((o) => o.type !== 'Wholesale');
  const wholesaleOrders = orders.filter((o) => o.type === 'Wholesale');
  const lowStockCount = products.filter((p) => p.stock < 50).length;
  const pendingWholesaleCount = wholesaleApps.filter((a) => a.status === 'PENDING').length;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner Alert / Greeting */}
      <div className="p-6 bg-gradient-to-r from-[#332822] via-[#48372F] to-[#6F5145] text-[#F8E8D5] rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#B96F58]/40">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B96F58]/40 border border-[#B96F58]/60 rounded-full text-xs font-bold text-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store Operations Live • INR Currency</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
            Welcome to GIFTPocket Command
          </h2>
          <p className="text-xs sm:text-sm text-[#D9A99A] max-w-xl">
            Track daily sales velocity, fulfill custom engraved gift charms, and oversee boutique wholesale partnerships in real time.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => onOpenProductModal(null)}
            className="px-4 py-2.5 bg-[#B96F58] hover:bg-white hover:text-[#332822] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            <span>+ Add Product</span>
          </button>
          <button
            onClick={() => setTab('orders')}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-[#F8E8D5] rounded-xl text-xs font-bold transition-all border border-white/20 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>View Orders Pipeline</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Total Revenue */}
        <div className="p-5 bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider">
              Total Revenue
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              ₹
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#B96F58]">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </h3>
            <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
              {totalRevenue > 0 ? (
                <>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Real-time store revenue</span>
                </>
              ) : (
                <span>No revenue recorded yet</span>
              )}
            </p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="p-5 bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider">
              Processed Orders
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#F4D2BE] text-[#B96F58] flex items-center justify-center font-bold">
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#332822]">
              {orders.length}
            </h3>
            <p className="text-[11px] text-[#6F5145] font-medium mt-1">
              {retailOrders.length} Retail • {wholesaleOrders.length} Wholesale B2B
            </p>
          </div>
        </div>

        {/* Catalog Items */}
        <div className="p-5 bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider">
              Active Catalog
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#E8D49A] text-[#6F5145] flex items-center justify-center font-bold">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#332822]">
              {products.length} Products
            </h3>
            <p className="text-[11px] text-[#6F5145] font-medium mt-1">
              Across {categories.length} curated visual chapters
            </p>
          </div>
        </div>

        {/* Action Alerts */}
        <div className="p-5 bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#6F5145] uppercase tracking-wider">
              Attention Required
            </span>
            <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-rose-600">
              {lowStockCount + pendingWholesaleCount}
            </h3>
            <p className="text-[11px] text-[#6F5145] font-medium mt-1">
              {lowStockCount} low stock & {pendingWholesaleCount} pending B2B apps
            </p>
          </div>
        </div>

      </div>

      {/* Main Grid: Recent Orders & Quick Channel Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Orders Pipeline (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-[#D9A99A]/40 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#332822]">
                Recent Orders Stream
              </h3>
              <p className="text-xs text-[#6F5145]">
                Real-time transactions and fulfillment states
              </p>
            </div>
            <button
              onClick={() => setTab('orders')}
              className="text-xs font-bold text-[#B96F58] hover:text-[#332822] flex items-center gap-1"
            >
              <span>View All ({orders.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#D9A99A]/30 text-[#6F5145] uppercase text-[10px]">
                <tr>
                  <th className="py-2.5">Order No</th>
                  <th>Customer</th>
                  <th>Channel</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9A99A]/20 font-sans">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-[#6F5145] text-xs">
                      No customer orders yet. Incoming orders will show up here in real time.
                    </td>
                  </tr>
                ) : (
                  orders.slice(0, 5).map((ord) => (
                    <tr key={ord.id} className="hover:bg-[#F8E8D5]/20 transition-colors">
                      <td className="py-3 font-mono font-bold text-[#B96F58]">
                        {ord.id}
                      </td>
                      <td className="font-semibold text-[#332822]">
                        {ord.customer?.name || ord.customer}
                      </td>
                      <td>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8D49A] text-[#6F5145]">
                          {ord.type || 'Retail'}
                        </span>
                      </td>
                      <td className="font-bold text-[#332822]">
                        ₹{ord.total}
                      </td>
                      <td>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          ord.status === 'Delivered'
                            ? 'bg-emerald-100 text-emerald-800'
                            : ord.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : ord.status === 'Packed'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {ord.status}
                        </span>
                      </td>
                      <td className="text-right">
                        <button
                          onClick={() => onOpenOrderDetails(ord)}
                          className="px-2.5 py-1 bg-[#F8E8D5] hover:bg-[#B96F58] hover:text-white text-[#6F5145] rounded-lg text-[11px] font-bold transition-all"
                        >
                          Inspect
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Wholesale Applications & Quick Enquiries */}
        <div className="space-y-6">
          
          {/* Wholesale Partner Approvals */}
          <div className="bg-white rounded-3xl p-6 border border-[#D9A99A]/40 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-editorial text-lg font-bold text-[#332822]">
                Wholesale Partners
              </h4>
              <button
                onClick={() => setTab('wholesale')}
                className="text-xs font-bold text-[#B96F58] hover:underline"
              >
                Manage
              </button>
            </div>

            <div className="space-y-3">
              {wholesaleApps.length === 0 ? (
                <div className="py-6 text-center text-xs text-[#6F5145]">
                  No partner applications received yet.
                </div>
              ) : (
                wholesaleApps.slice(0, 3).map((app) => (
                  <div key={app.id} className="p-3 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/30 flex items-center justify-between text-xs">
                    <div>
                      <h5 className="font-bold text-[#332822]">{app.businessName}</h5>
                      <p className="text-[11px] text-[#6F5145]">{app.city} • {app.contactPerson}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      app.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Bulk Event Enquiries */}
          <div className="bg-white rounded-3xl p-6 border border-[#D9A99A]/40 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-editorial text-lg font-bold text-[#332822]">
                Custom Bulk Enquiries
              </h4>
              <span className="px-2 py-0.5 bg-[#B96F58] text-white text-[10px] font-bold rounded-full">
                {bulkEnquiries.length} Active
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {bulkEnquiries.length === 0 ? (
                <div className="py-6 text-center text-xs text-[#6F5145]">
                  No bulk enquiries received yet.
                </div>
              ) : (
                bulkEnquiries.map((enq) => (
                  <div key={enq.id} className="p-3 bg-[#F8E8D5]/30 rounded-2xl border border-[#D9A99A]/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-[#332822]">{enq.name}</strong>
                      <span className="font-bold text-[#B96F58]">{enq.quantity} pcs</span>
                    </div>
                    <p className="text-[11px] text-[#6F5145] truncate">{enq.productName}</p>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
