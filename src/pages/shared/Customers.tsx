import { mockCustomers } from '../../lib/mockData';
import { Search, Plus, MapPin, Phone, Mail } from 'lucide-react';

export default function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Customers</h1>
          <p className="text-slate-500">Manage your customer database</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Customer
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2">
        <Search className="w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search customers..." 
          className="flex-1 border-none focus:ring-0 text-slate-900 outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCustomers.map(customer => (
          <div key={customer.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{customer.businessName}</h3>
                <p className="text-sm text-slate-500">{customer.ownerName} • {customer.type}</p>
              </div>
              <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded-full">
                {customer.territory}
              </span>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-slate-600">
                <Phone className="w-4 h-4 mr-2 text-slate-400" /> {customer.phone}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Mail className="w-4 h-4 mr-2 text-slate-400" /> {customer.email}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <MapPin className="w-4 h-4 mr-2 text-slate-400" /> {customer.address}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <p className="text-xs text-slate-500">Outstanding</p>
                <p className={`font-bold ${customer.outstanding > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                  ${customer.outstanding.toLocaleString()}
                </p>
              </div>
              <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
