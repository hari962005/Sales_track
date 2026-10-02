export default function Attendance() {
  const records = [
    { date: '2023-10-01', in: '09:00 AM', out: '05:30 PM', hours: '8.5h', status: 'Present' },
    { date: '2023-10-02', in: '09:15 AM', out: '06:00 PM', hours: '8.75h', status: 'Present' },
    { date: '2023-10-03', in: '-', out: '-', hours: '0h', status: 'Leave' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Attendance Log</h1>
        <p className="text-slate-500">Track working hours and availability</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Check In</th>
              <th className="p-4 font-medium">Check Out</th>
              <th className="p-4 font-medium">Working Hours</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {records.map((r, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="p-4 font-medium">{r.date}</td>
                <td className="p-4">{r.in}</td>
                <td className="p-4">{r.out}</td>
                <td className="p-4">{r.hours}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    r.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
