import React from 'react';
export default function Contact(){
  return (
    <main className="container py-14">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-neutral-600">We’d love to hear from you. Email us at <a className="text-primary" href="mailto:hello@fitforxe.com">hello@fitforxe.com</a>.</p>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent (placeholder).');}} className="card p-6 max-w-lg mt-8">
        <input required placeholder="Your email" className="w-full border rounded px-3 py-2 mb-3"/>
        <textarea required placeholder="Your message" className="w-full border rounded px-3 py-2 h-28 mb-3"></textarea>
        <button className="px-4 py-2 rounded bg-primary text-white">Send</button>
      </form>
    </main>
  );
}
