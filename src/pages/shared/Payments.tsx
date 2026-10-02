import { Download, Plus } from 'lucide-react';

const mockPayments = [
  { id: 'PAY-101', orderId: 'ORD-001', customer: 'Acme Corp', amount: 500, date: '2023-10-01', method: 'Bank Transfer', status: 'Paid' },
  { id: 'PAY-102', orderId: 'ORD-002', customer: 'Globex', amount: 1250, date: '2023-10-02', method: 'Cheque', status: 'Pending' },
];

export default function Payments() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
          <p className="text-slate-500">Track collections and transactions</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Record Payment
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
              <th className="p-4 font-medium">Payment ID</th>
              <th className="p-4 font-medium">Order ID</th>
              <th className="p-4 font-medium">Customer</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Method</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {mockPayments.map((p) => (
              <tr key={p.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="p-4 font-medium">{p.id}</td>
                <td className="p-4 text-primary-600 hover:underline cursor-pointer">{p.orderId}</td>
                <td className="p-4">{p.customer}</td>
                <td className="p-4">{p.date}</td>
                <td className="p-4 font-bold text-slate-900">$${p.amount.toFixed(2)}</td>
                <td className="p-4">{p.method}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    p.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>{p.status}</span>
                </td>
                <td className="p-4">
                  <button className="text-slate-400 hover:text-primary-600"><Download className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
