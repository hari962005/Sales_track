import { CheckCircle, MapPin, Plus, Clock, DollarSign, Users, BrainCircuit, Sparkles, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function RepDashboard() {
  const [location, setLocation] = useState<string>('Detecting location...');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`),
        () => setLocation('Location access denied')
      );
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hello, John!</h1>
          <p className="text-slate-500">Here's your summary for today.</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-slate-500 uppercase">Target Achieved</p>
          <p className="text-xl font-bold text-primary-600">65%</p>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-1 shadow-md">
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-slate-900">AI Recommended Visits</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg border border-purple-100">
              <div>
                <p className="font-semibold text-purple-900">Globex Corp</p>
                <p className="text-xs text-purple-700">High probability of re-order (Low stock on Lubricant)</p>
              </div>
              <button className="bg-purple-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-purple-700">Navigate</button>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div>
                <p className="font-semibold text-slate-700">Acme Industries</p>
                <p className="text-xs text-slate-500">Follow-up reminder due today</p>
              </div>
              <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded text-xs font-medium hover:bg-slate-50">Navigate</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <MapPin className="w-6 h-6 text-indigo-500 mb-2" />
          <h3 className="text-2xl font-bold text-slate-900">5/12</h3>
          <p className="text-xs text-slate-500 mt-1">Customers Visited</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <CheckCircle className="w-6 h-6 text-emerald-500 mb-2" />
          <h3 className="text-2xl font-bold text-slate-900">3</h3>
          <p className="text-xs text-slate-500 mt-1">Orders Created</p>
        </div>
      </div>

      <div className="bg-primary-600 rounded-xl p-6 text-white flex flex-col items-center justify-center text-center shadow-lg">
        <Clock className="w-8 h-8 mb-3 opacity-80" />
        <p className="text-primary-100 text-sm font-medium mb-1">Current Status</p>
        <h2 className="text-2xl font-bold mb-4">On Duty</h2>
        <div className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
          {location}
        </div>
        <div className="flex gap-3 mt-6 w-full">
          <button className="flex-1 bg-white text-primary-600 font-bold py-3 rounded-lg hover:bg-slate-50 transition-colors">
            Check In
          </button>
          <button className="flex-1 bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-colors">
            End Day
          </button>
        </div>
      </div>

      {/* AI Daily Report Draft */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <BrainCircuit className="w-16 h-16 text-slate-50 opacity-50 transform rotate-12" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-primary-500" />
          <h3 className="font-bold text-slate-900">Auto Daily Report</h3>
        </div>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          AI has drafted your daily report based on your GPS logs and 3 created orders.
        </p>
        <button className="w-full border border-primary-200 bg-primary-50 text-primary-700 font-medium py-2 rounded-lg text-sm hover:bg-primary-100 transition-colors">
          Review & Submit Report
        </button>
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'New Order', icon: Plus, color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Payment', icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { label: 'Add Lead', icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-primary-200 transition-all">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${action.bg}`}>
                <action.icon className={`w-5 h-5 ${action.color}`} />
              </div>
              <span className="text-xs font-medium text-slate-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
