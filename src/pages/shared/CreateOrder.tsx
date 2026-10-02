import { useState } from 'react';
import { Plus, Trash2, Save, Send } from 'lucide-react';

const mockProducts = [
  { id: 'P1', name: 'Industrial Lubricant 5L', price: 45.00, stock: 120 },
  { id: 'P2', name: 'Safety Gloves (Box)', price: 15.50, stock: 450 },
  { id: 'P3', name: 'Heavy Duty Cleaner', price: 28.00, stock: 80 },
];

export default function CreateOrder() {
  const [items, setItems] = useState([{ productId: '', qty: 1 }]);
  
  const addItem = () => setItems([...items, { productId: '', qty: 1 }]);
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));
  const updateItem = (index: number, field: string, value: any) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const subtotal = items.reduce((sum, item) => {
    const product = mockProducts.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Create New Order</h1>
          <p className="text-slate-500">Draft or submit a new sales order</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center gap-2 font-medium">
            <Send className="w-4 h-4" /> Submit Order
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Customer</label>
            <select className="w-full border-slate-200 rounded-lg p-2.5 border focus:ring-2 focus:ring-primary-500 outline-none">
              <option value="">Select Customer...</option>
              <option value="C1">Acme Corp</option>
              <option value="C2">Globex</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Expected Delivery</label>
            <input type="date" className="w-full border-slate-200 rounded-lg p-2.5 border focus:ring-2 focus:ring-primary-500 outline-none" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Order Items</h3>
            <button onClick={addItem} className="text-sm font-medium text-primary-600 flex items-center gap-1 hover:text-primary-700">
              <Plus className="w-4 h-4" /> Add Item
            </button>
          </div>
          
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="flex-1">
                  <select 
                    value={item.productId}
                    onChange={(e) => updateItem(index, 'productId', e.target.value)}
                    className="w-full border-slate-200 rounded-lg p-2.5 border outline-none"
                  >
                    <option value="">Select Product...</option>
                    {mockProducts.map(p => (
                      <option key={p.id} value={p.id}>{p.name} - $${p.price.toFixed(2)} (Stock: {p.stock})</option>
                    ))}
                  </select>
                </div>
                <div className="w-32">
                  <input 
                    type="number" 
                    min="1" 
                    value={item.qty}
                    onChange={(e) => updateItem(index, 'qty', parseInt(e.target.value) || 1)}
                    className="w-full border-slate-200 rounded-lg p-2.5 border outline-none" 
                    placeholder="Qty"
                  />
                </div>
                <button onClick={() => removeItem(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex justify-end">
          <div className="w-64 space-y-3">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Tax (18%)</span>
              <span>$${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-slate-900 border-t border-slate-200 pt-3">
              <span>Grand Total</span>
              <span>$${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
