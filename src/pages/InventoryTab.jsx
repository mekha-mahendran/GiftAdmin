import React, { useState } from 'react';
import { AlertTriangle, Package, Plus, RefreshCw, CheckCircle2, TrendingDown } from 'lucide-react';

export const InventoryTab = ({
  products,
  categories,
  onRestockProduct
}) => {
  const [filterType, setFilterType] = useState('all');

  const lowStockThreshold = 50;
  const lowStockItems = products.filter((p) => p.stock < lowStockThreshold);
  const displayedItems = filterType === 'low' ? lowStockItems : products;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Inventory Stock & Replenishment
          </h3>
          <p className="text-xs text-[#6F5145]">
            Live stock audits, safety threshold tracking, and rapid 1-click batch restock
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-[#332822] text-white shadow-xs'
                : 'bg-white text-[#6F5145] border border-[#D9A99A]/40'
            }`}
          >
            All Items ({products.length})
          </button>
          <button
            onClick={() => setFilterType('low')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              filterType === 'low'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-white text-rose-700 border border-rose-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Low Stock Critical ({lowStockItems.length})</span>
          </button>
        </div>
      </div>

      {/* Critical Stock Warning Banner if any */}
      {lowStockItems.length > 0 && (
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-center gap-3 text-amber-900 text-xs">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <div className="flex-1">
            <strong className="font-bold">{lowStockItems.length} products are below the safety threshold (50 units).</strong>
            <p className="text-[11px] text-amber-800">Use the quick restock buttons below to replenish stock immediately.</p>
          </div>
        </div>
      )}

      {/* Inventory Table Container */}
      <div className="bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#FAF5EE] border-b border-[#D9A99A]/40 text-[#6F5145] uppercase text-[10px]">
              <tr>
                <th className="py-3 px-4">Product Name</th>
                <th>Category</th>
                <th>Retail Price</th>
                <th>Stock Units</th>
                <th>Health Status</th>
                <th className="text-right py-3 px-4">Batch Restock Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9A99A]/20">
              {displayedItems.map((prod) => {
                const catObj = categories.find((c) => c.id === prod.category);
                const isCritical = prod.stock < lowStockThreshold;

                return (
                  <tr key={prod.id} className="hover:bg-[#F8E8D5]/20 transition-colors">
                    
                    <td className="py-3 px-4 flex items-center gap-3">
                      {(prod.images?.[0] || prod.image) ? (
                        <img
                          src={prod.images?.[0] || prod.image}
                          alt={prod.name}
                          className="w-10 h-10 rounded-xl object-cover border border-[#D9A99A]/40 shrink-0 bg-slate-100"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-xl border border-[#D9A99A]/40 shrink-0 bg-[#F4D2BE]/30 flex items-center justify-center text-[9px] font-bold text-[#6F5145]/60">
                          No Pic
                        </div>
                      )}
                      <div>
                        <strong className="font-bold text-[#332822] block">{prod.name}</strong>
                        <span className="text-[10px] text-[#6F5145] font-mono">SKU: {prod.slug}</span>
                      </div>
                    </td>

                    {/* Category */}
                    <td>
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                        style={{
                          backgroundColor: catObj?.color || '#F4D2BE',
                          color: catObj?.textColor || '#332822'
                        }}
                      >
                        {catObj?.name || prod.category}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="font-bold text-[#332822]">
                      ₹{prod.price}
                    </td>

                    {/* Stock units */}
                    <td>
                      <strong className={`text-sm ${isCritical ? 'text-rose-600' : 'text-[#332822]'}`}>
                        {prod.stock}
                      </strong>{' '}
                      <span className="text-[10px] text-[#6F5145]">units</span>
                    </td>

                    {/* Health Status */}
                    <td>
                      {isCritical ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 inline-flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Low Stock</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Healthy
                        </span>
                      )}
                    </td>

                    {/* Quick Restock Buttons */}
                    <td className="text-right py-3 px-4">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => onRestockProduct(prod.id, 25)}
                          className="px-2.5 py-1 bg-[#FAF5EE] hover:bg-[#B96F58] hover:text-white border border-[#D9A99A]/60 text-[#332822] rounded-lg text-[10px] font-bold transition-all"
                        >
                          +25
                        </button>
                        <button
                          onClick={() => onRestockProduct(prod.id, 50)}
                          className="px-2.5 py-1 bg-[#FAF5EE] hover:bg-[#B96F58] hover:text-white border border-[#D9A99A]/60 text-[#332822] rounded-lg text-[10px] font-bold transition-all"
                        >
                          +50
                        </button>
                        <button
                          onClick={() => onRestockProduct(prod.id, 100)}
                          className="px-2.5 py-1 bg-[#B96F58] hover:bg-[#332822] text-white rounded-lg text-[10px] font-bold transition-all shadow-xs"
                        >
                          +100
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
