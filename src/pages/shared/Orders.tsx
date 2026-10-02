import { mockOrders } from '../../lib/mockData';
import { Search, Filter } from 'lucide-react';

export default function Orders() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Orders</h1>
        <p className="text-slate-500">Track and manage sales orders</p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-white p-2 px-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2">
          <Search className="w-5 h-5 text-slate-400" />
          <input type="text" placeholder="Search orders..." className="flex-1 border-none focus:ring-0 py-2 outline-none" />
        </div>
        <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-2 text-slate-700 font-medium hover:bg-slate-50">
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Items</th>
                <th className="p-4 font-medium">Total</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="p-4 font-medium text-slate-900">{order.id}</td>
                  <td className="p-4">{order.customerId}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.items}</td>
                  <td className="p-4 font-medium">${order.total.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
