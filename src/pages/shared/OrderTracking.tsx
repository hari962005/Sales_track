import { Package, Truck, CheckCircle, FileText, Upload } from 'lucide-react';

export default function OrderTracking() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Order #ORD-002</h1>
          <p className="text-slate-500">Acme Corp • Placed on Oct 02, 2023</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 flex items-center gap-2">
            <Upload className="w-4 h-4" /> Proof of Delivery
          </button>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Invoice (PDF)
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100"></div>
          
          <div className="space-y-8 relative">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-4 border-white shadow-sm flex items-center justify-center z-10 shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="pt-3">
                <h3 className="font-bold text-slate-900">Order Confirmed</h3>
                <p className="text-sm text-slate-500">Oct 02, 2023 at 10:30 AM</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-sm flex items-center justify-center z-10 shrink-0">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div className="pt-3">
                <h3 className="font-bold text-slate-900">Processing & Packed</h3>
                <p className="text-sm text-slate-500">Oct 02, 2023 at 02:15 PM</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-primary-100 border-4 border-white shadow-sm flex items-center justify-center z-10 shrink-0 relative">
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full"></span>
                <Truck className="w-6 h-6 text-primary-600" />
              </div>
              <div className="pt-3">
                <h3 className="font-bold text-primary-600">Dispatched & In Transit</h3>
                <p className="text-sm text-slate-500">Oct 03, 2023 at 09:00 AM</p>
                <div className="mt-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-sm font-medium text-slate-700">Consignment #CON-8839</p>
                  <p className="text-xs text-slate-500">Vehicle: NY-1234 • Driver: Mike</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start opacity-50">
              <div className="w-16 h-16 rounded-full bg-slate-100 border-4 border-white shadow-sm flex items-center justify-center z-10 shrink-0">
                <CheckCircle className="w-6 h-6 text-slate-400" />
              </div>
              <div className="pt-3">
                <h3 className="font-bold text-slate-900">Delivered</h3>
                <p className="text-sm text-slate-500">Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
