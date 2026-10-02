import { Plus, Search, Filter, Edit, Eye, ShoppingCart } from 'lucide-react';

const mockProducts = [
  { id: 'PRD-001', sku: 'LUB-5L', name: 'Industrial Lubricant 5L', category: 'Chemicals', price: 45.00, stock: 120, status: 'In Stock' },
  { id: 'PRD-002', sku: 'GLV-BX', name: 'Safety Gloves (Box)', category: 'PPE', price: 15.50, stock: 45, status: 'Low Stock' },
  { id: 'PRD-003', sku: 'CLN-HD', name: 'Heavy Duty Cleaner', category: 'Chemicals', price: 28.00, stock: 0, status: 'Out of Stock' },
];

export default function Products() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Products</h1>
          <p className="text-slate-500">Manage catalog and inventory</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-white p-2 px-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2">
          <Search className="w-5 h-5 text-slate-400" />
          <input type="text" placeholder="Search by SKU or name..." className="flex-1 border-none focus:ring-0 py-2 outline-none" />
        </div>
        <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-2 text-slate-700 font-medium hover:bg-slate-50">
          <Filter className="w-4 h-4" /> Category
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
              <th className="p-4 font-medium">SKU</th>
              <th className="p-4 font-medium">Product Name</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Price</th>
              <th className="p-4 font-medium">Stock</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {mockProducts.map((product) => (
              <tr key={product.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="p-4 font-mono text-xs text-slate-500">{product.sku}</td>
                <td className="p-4 font-medium text-slate-900">{product.name}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4 font-medium">$${product.price.toFixed(2)}</td>
                <td className="p-4">{product.stock} units</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    product.status === 'In Stock' ? 'bg-emerald-100 text-emerald-700' :
                    product.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="p-4 flex gap-2">
                  <button className="p-1.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded"><Eye className="w-4 h-4" /></button>
                  <button className="p-1.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded"><Edit className="w-4 h-4" /></button>
                  <button className="p-1.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded"><ShoppingCart className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
