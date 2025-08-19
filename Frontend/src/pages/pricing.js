import React, { useState } from 'react';

const plans = [
  { name: 'Basic', price: '₹999/mo', features:['Member list','Check-in/out','Email support']},
  { name: 'Pro', price: '₹1,999/mo', features:['Everything in Basic','Payments','Attendance reports']},
  { name: 'Elite', price: '₹3,499/mo', features:['Everything in Pro','Priority support','Unlimited staff']},
];

export default function Pricing(){
  const [gateway, setGateway] = useState('razorpay');

  async function checkout(plan){
    if (gateway === 'stripe') {
      alert('Stripe checkout placeholder. Backend will create session.');
    } else {
      alert('Razorpay checkout placeholder. Backend will create order.');
    }
  }

  return (
    <main className="container py-14">
      <h2 className="text-3xl font-bold text-center">Simple pricing</h2>
      <div className="flex justify-center mt-3">
        <div className="inline-flex items-center gap-3 text-sm bg-white border rounded-full p-1">
          <button onClick={()=>setGateway('razorpay')} className={`px-3 py-1 rounded-full ${gateway==='razorpay'?'bg-primary text-white':'hover:bg-neutral-100'}`}>Razorpay</button>
          <button onClick={()=>setGateway('stripe')} className={`px-3 py-1 rounded-full ${gateway==='stripe'?'bg-primary text-white':'hover:bg-neutral-100'}`}>Stripe</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {plans.map(p => (
          <div key={p.name} className="card p-6 flex flex-col">
            <div className="text-xl font-semibold">{p.name}</div>
            <div className="mt-2 text-3xl font-extrabold text-primary">{p.price}</div>
            <ul className="mt-4 space-y-1 text-sm text-neutral-600">
              {p.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <button onClick={()=>checkout(p)} className="mt-auto px-4 py-2 rounded-md bg-primary text-white">Join Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}
