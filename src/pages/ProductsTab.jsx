import React, { useState } from 'react';
import {
  Package,
  Plus,
  Edit2,
  Trash2,
  Search,
  Filter,
  Sparkles,
  Layers,
  ArrowUpDown,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const ProductsTab = ({
  products,
  categories,
  onOpenProductModal,
  onDeleteProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [stockFilter, setStockFilter] = useState('all');

  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchStock =
      stockFilter === 'all' ||
      (stockFilter === 'low' && p.stock < 50) ||
      (stockFilter === 'inStock' && p.stock >= 50);

    return matchCategory && matchSearch && matchStock;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Product Catalog ({products.length})
          </h3>
          <p className="text-xs text-[#6F5145]">
            Manage items, 2D customizer enablement, retail & wholesale tier pricing
          </p>
        </div>

        <button
          onClick={() => onOpenProductModal(null)}
          className="px-4 py-2.5 bg-[#B96F58] hover:bg-[#332822] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Filters & Search Row */}
      <div className="p-4 bg-white rounded-2xl border border-[#D9A99A]/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6F5145]/60" />
          <input
            type="text"
            placeholder="Search by product name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-[#F8E8D5]/30 border border-[#D9A99A]/40 rounded-xl text-xs text-[#332822] focus:outline-none focus:border-[#B96F58]"
          />
        </div>

        {/* Category & Stock Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-[#F8E8D5]/30 border border-[#D9A99A]/40 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none"
          >
            <option value="all">All Categories ({products.length})</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
            className="px-3 py-2 bg-[#F8E8D5]/30 border border-[#D9A99A]/40 rounded-xl text-xs font-semibold text-[#332822] focus:outline-none"
          >
            <option value="all">All Stock Levels</option>
            <option value="low">Low Stock Alert (&lt; 50)</option>
            <option value="inStock">Healthy Stock (&gt;= 50)</option>
          </select>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((prod) => {
          const catObj = categories.find((c) => c.id === prod.category);
          const isLowStock = prod.stock < 50;

          return (
            <div
              key={prod.id}
              className="bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Product Image & Top Overlays */}
              <div className="relative h-48 bg-[#FAF5EE] overflow-hidden">
                <img
                  src={prod.images?.[0] || prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                
                {/* Category & Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs"
                    style={{
                      backgroundColor: catObj?.color || '#F4D2BE',
                      color: catObj?.textColor || '#332822'
                    }}
                  >
                    {catObj?.name || prod.category}
                  </span>

                  {prod.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#332822] text-white">
                      {prod.badge}
                    </span>
                  )}
                </div>

                {/* Customizer Indicator */}
                {prod.isCustomizable && (
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] font-bold text-[#B96F58] border border-[#B96F58]/30 flex items-center gap-1 shadow-xs">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>2D Customizer Active</span>
                  </div>
                )}
              </div>

              {/* Body Details */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-editorial text-base font-bold text-[#332822] line-clamp-1">
                    {prod.name}
                  </h4>
                  <p className="text-xs text-[#6F5145] line-clamp-2 mt-1">
                    {prod.description}
                  </p>
                </div>

                {/* Economics Grid */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/30 text-xs">
                  <div>
                    <span className="text-[10px] text-[#6F5145] block">Retail Price</span>
                    <strong className="text-sm font-bold text-[#B96F58]">
                      ₹{prod.price}
                    </strong>
                    {prod.originalPrice && (
                      <span className="text-[10px] text-gray-400 line-through ml-1.5">
                        ₹{prod.originalPrice}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] text-[#6F5145] block">Wholesale B2B</span>
                    <strong className="text-xs font-bold text-emerald-800">
                      ₹{prod.wholesalePrice || Math.round(prod.price * 0.55)}
                    </strong>
                    <span className="text-[10px] text-[#6F5145] block">
                      MOQ: {prod.moq || 10} pcs
                    </span>
                  </div>
                </div>

                {/* Stock Level Row */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[#6F5145] font-medium">
                    Stock: <strong className="text-[#332822]">{prod.stock} units</strong>
                  </span>
                  
                  {isLowStock ? (
                    <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full text-[10px] font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Low Stock
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                      In Stock
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-[#D9A99A]/30">
                  <button
                    onClick={() => onOpenProductModal(prod)}
                    className="px-3.5 py-1.5 bg-[#B96F58] hover:bg-[#332822] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit Item</span>
                  </button>

                  <button
                    onClick={() => onDeleteProduct(prod.id)}
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                    title="Delete Product"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-[#D9A99A]/40 space-y-3">
          <Package className="w-10 h-10 text-[#D9A99A] mx-auto" />
          <h4 className="font-editorial text-lg font-bold text-[#332822]">
            No matching products found
          </h4>
          <p className="text-xs text-[#6F5145]">
            Try adjusting your search criteria or category filter.
          </p>
        </div>
      )}

    </div>
  );
};
