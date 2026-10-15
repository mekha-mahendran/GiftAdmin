import React, { useState } from 'react';
import {
  ShoppingCart,
  Search,
  Filter,
  Eye,
  CheckCircle2,
  Truck,
  Clock,
  Printer,
  ChevronDown
} from 'lucide-react';

export const OrdersTab = ({
  orders,
  onOpenOrderDetails,
  onUpdateOrderStatus
}) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [channelFilter, setChannelFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter((ord) => {
    const matchStatus = statusFilter === 'all' || ord.status === statusFilter;
    const matchChannel = channelFilter === 'all' || ord.type === channelFilter;
    const customerName = typeof ord.customer === 'object' ? ord.customer?.name : ord.customer;
    const matchSearch =
      !searchQuery ||
      ord.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (customerName && customerName.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchStatus && matchChannel && matchSearch;
  });

  const statusList = ['Pending', 'Confirmed', 'Processing', 'Packed', 'Shipped', 'Delivered', 'Cancelled'];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Orders Pipeline & Fulfillment ({orders.length})
          </h3>
          <p className="text-xs text-[#6F5145]">
            Manage status transitions, custom engraving notes, tracking numbers and packing slips
          </p>
        </div>
      </div>

      {/* Filter Row */}
      <div className="p-4 bg-white rounded-2xl border border-[#D9A99A]/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6F5145]/60" />
          <input
            type="text"
            placeholder="Search by Order ID or Customer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-[#F8E8D5]/30 border border-[#D9A99A]/40 rounded-xl text-xs text-[#332822] focus:outline-none focus:border-[#B96F58]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-[#F8E8D5]/30 border border-[#D9A99A]/40 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none"
          >
            <option value="all">All Fulfillment States</option>
            {statusList.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>

          {/* Channel filter */}
          <select
            value={channelFilter}
            onChange={(e) => setChannelFilter(e.target.value)}
            className="px-3 py-2 bg-[#F8E8D5]/30 border border-[#D9A99A]/40 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none"
          >
            <option value="all">All Channels</option>
            <option value="Retail">Retail Store</option>
            <option value="Wholesale">Wholesale B2B</option>
          </select>
        </div>
      </div>

      {/* Orders Table Container */}
      <div className="bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#FAF5EE] border-b border-[#D9A99A]/40 text-[#6F5145] uppercase text-[10px]">
              <tr>
                <th className="py-3 px-4">Order ID & Date</th>
                <th>Customer Name</th>
                <th>Channel</th>
                <th>Items Ordered</th>
                <th>Amount</th>
                <th>Fulfillment Status</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9A99A]/20">
              {filteredOrders.map((ord) => {
                const customerName = typeof ord.customer === 'object' ? ord.customer?.name : ord.customer;
                const itemsSummary = ord.items?.map((i) => `${i.quantity}x ${i.name}`).join(', ') || 'Custom gifts';

                return (
                  <tr key={ord.id} className="hover:bg-[#F8E8D5]/20 transition-colors">
                    
                    {/* Order ID */}
                    <td className="py-3.5 px-4">
                      <strong className="font-mono text-[#B96F58] block">{ord.id}</strong>
                      <span className="text-[10px] text-[#6F5145]">{ord.date}</span>
                    </td>

                    {/* Customer */}
                    <td>
                      <div className="font-semibold text-[#332822]">{customerName}</div>
                      <div className="text-[10px] text-[#6F5145] truncate max-w-[180px]">
                        {ord.customer?.email || 'customer@giftpocket.in'}
                      </div>
                    </td>

                    {/* Channel */}
                    <td>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8D49A] text-[#6F5145]">
                        {ord.type || 'Retail'}
                      </span>
                    </td>

                    {/* Items */}
                    <td className="max-w-xs">
                      <span className="text-[#332822] line-clamp-1 font-medium">{itemsSummary}</span>
                      {ord.items?.some((i) => i.customName) && (
                        <span className="text-[9px] font-bold text-[#B96F58] block">
                          ✨ Customization Included
                        </span>
                      )}
                    </td>

                    {/* Amount */}
                    <td>
                      <strong className="text-sm font-bold text-[#332822]">₹{ord.total}</strong>
                      <span className="text-[10px] text-emerald-700 block font-medium">
                        {ord.paymentStatus || 'Paid'}
                      </span>
                    </td>

                    {/* Status Dropdown */}
                    <td>
                      <select
                        value={ord.status}
                        onChange={(e) => onUpdateOrderStatus(ord.id, e.target.value)}
                        className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border focus:outline-none ${
                          ord.status === 'Delivered'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : ord.status === 'Shipped'
                            ? 'bg-blue-50 text-blue-800 border-blue-300'
                            : ord.status === 'Packed'
                            ? 'bg-purple-50 text-purple-800 border-purple-300'
                            : 'bg-amber-50 text-amber-800 border-amber-300'
                        }`}
                      >
                        {statusList.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="text-right py-3.5 px-4">
                      <button
                        onClick={() => onOpenOrderDetails(ord)}
                        className="px-3 py-1.5 bg-[#B96F58] hover:bg-[#332822] text-white rounded-xl text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="p-10 text-center text-[#6F5145] space-y-2">
            <ShoppingCart className="w-8 h-8 text-[#D9A99A] mx-auto" />
            <p className="font-semibold text-xs">No matching orders found.</p>
          </div>
        )}
      </div>

    </div>
  );
};
