import { UserPlus, MoreVertical, MapPin, Target } from 'lucide-react';

const mockEmployees = [
  { id: 'EMP-01', name: 'John Doe', role: 'Sales Representative', territory: 'North Region', target: 50000, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 'EMP-02', name: 'Jane Smith', role: 'Sales Representative', territory: 'South Region', target: 50000, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=3' },
];

export default function Employees() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Employees</h1>
          <p className="text-slate-500">Manage your sales force</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 flex items-center gap-2">
          <UserPlus className="w-4 h-4" /> Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEmployees.map((emp) => (
          <div key={emp.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <img src={emp.avatar} alt={emp.name} className="w-12 h-12 rounded-full border border-slate-200" />
                <div>
                  <h3 className="font-bold text-slate-900">{emp.name}</h3>
                  <p className="text-xs text-slate-500">{emp.role}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600"><MoreVertical className="w-5 h-5" /></button>
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center text-sm text-slate-600">
                <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                Territory: <span className="font-medium ml-1 text-slate-900">{emp.territory}</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Target className="w-4 h-4 mr-3 text-slate-400" />
                Target: <span className="font-medium ml-1 text-slate-900">$${emp.target.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-slate-50 text-slate-700 border border-slate-200 py-2 rounded-lg text-sm font-medium hover:bg-slate-100">View Profile</button>
              <button className="flex-1 bg-primary-50 text-primary-700 border border-primary-100 py-2 rounded-lg text-sm font-medium hover:bg-primary-100">Performance</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
