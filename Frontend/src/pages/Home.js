import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <main>
      <section className="bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Run your gym with <span className="text-primary">power</span> and <span className="text-primary">clarity</span>.
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">Fitforxe helps you manage members, check-ins, and payments with a clean, fast dashboard.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/pricing" className="px-5 py-3 bg-primary text-white rounded-md">See Pricing</Link>
              <Link to="/dashboard" className="px-5 py-3 border border-neutral-300 rounded-md hover:bg-neutral-100">Open Dashboard</Link>
            </div>
            <div className="mt-6 text-xs text-neutral-500">Stripe & Razorpay supported â¢ Mobile friendly</div>
          </div>
          <div className="card p-0 overflow-hidden">
            <img alt="dashboard" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop" className="w-full h-72 object-cover"/>
          </div>
        </div>
      </section>

      <section className="container py-12 grid md:grid-cols-3 gap-6">
        {[
          ['Members', 'Add, search, and check-in members in seconds.'],
          ['Payments', 'Collect with Stripe or Razorpay.'],
          ['Attendance', 'See todayâs check-ins at a glance.']
        ].map(([t, d]) => (
          <div key={t} className="card p-6">
            <div className="text-lg font-semibold">{t}</div>
            <div className="text-sm text-neutral-600 mt-1">{d}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
