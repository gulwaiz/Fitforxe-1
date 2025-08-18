import React from 'react';
export default function About(){
  return (
    <main className="container py-14">
      <h2 className="text-3xl font-bold">About Fitforxe</h2>
      <p className="mt-4 text-neutral-700 max-w-2xl">Fitforxe is a streamlined gym management platform built to keep your operations smooth and your members happy. We focus on speed, clarity, and reliability — so you can run the floor, not spreadsheets.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="card p-6"><div className="font-semibold mb-1">Fast setup</div><div className="text-sm text-neutral-600">Get running in minutes.</div></div>
        <div className="card p-6"><div className="font-semibold mb-1">Secure</div><div className="text-sm text-neutral-600">Built with proven tools.</div></div>
        <div className="card p-6"><div className="font-semibold mb-1">Scalable</div><div className="text-sm text-neutral-600">Grows with your gym.</div></div>
      </div>
    </main>
  );
}
