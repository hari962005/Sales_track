import { Plus, Receipt } from 'lucide-react';

const mockExpenses = [
  { id: 'EXP-01', rep: 'John Doe', category: 'Fuel', amount: 45.50, date: '2023-10-01', status: 'Approved' },
  { id: 'EXP-02', rep: 'John Doe', category: 'Food', amount: 25.00, date: '2023-10-02', status: 'Pending' },
];

export default function Expenses() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Expenses</h1>
          <p className="text-slate-500">Manage field expense claims</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Expense
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
              <th className="p-4 font-medium">ID</th>
              <th className="p-4 font-medium">Representative</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {mockExpenses.map((e) => (
              <tr key={e.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="p-4 font-medium">{e.id}</td>
                <td className="p-4">{e.rep}</td>
                <td className="p-4">{e.category}</td>
                <td className="p-4 font-bold text-slate-900">$${e.amount.toFixed(2)}</td>
                <td className="p-4">{e.date}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    e.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>{e.status}</span>
                </td>
                <td className="p-4 flex gap-2">
                  <button className="text-slate-400 hover:text-primary-600"><Receipt className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
