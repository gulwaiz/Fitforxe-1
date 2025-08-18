import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';

function Nav(){
  const loc = useLocation();
  const active = (p)=> loc.pathname===p ? 'text-primary font-semibold' : 'text-neutral-600 hover:text-neutral-900';
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="container py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">Fitforxe</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link className={active('/')} to="/">Home</Link>
          <Link className={active('/pricing')} to="/pricing">Pricing</Link>
          <Link className={active('/about')} to="/about">About</Link>
          <Link className={active('/contact')} to="/contact">Contact</Link>
          <Link to="/dashboard" className="px-3 py-2 rounded-md bg-primary text-white">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer(){
  return (
    <footer className="mt-16 border-t border-neutral-100">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-neutral-500">
        <div>Â© {new Date().getFullYear()} Fitforxe</div>
        <a href="mailto:hello@fitforxe.com" className="hover:text-neutral-900">hello@fitforxe.com</a>
      </div>
    </footer>
  );
}

export default function App(){
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer />
    </div>
  );
}
