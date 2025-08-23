import React, { useEffect, useState } from 'react';

const API_BASE = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api';

async function apiGet(path){ const r = await fetch(API_BASE+path); if(!r.ok) throw new Error('API error'); return r.json(); }
async function apiPost(path, data){ const r = await fetch(API_BASE+path, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)}); if(!r.ok) throw new Error('API error'); return r.json(); }

export default function Dashboard(){
  const [status, setStatus] = useState('Checking...');
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');

  useEffect(()=>{
    apiGet('/health').then(d=> setStatus(d.msg)).catch(()=> setStatus('Cannot reach backend'));
    load();
  }, []);

  async function load(){ setMembers(await apiGet('/members')); }
  async function addMember(){ if(!name.trim()) return; await apiPost('/members', { name }); setName(''); load(); }
  async function toggle(m){ const newStatus = (m.lastStatus==='Checked In')?'Checked Out':'Checked In'; await apiPost(`/members/${m._id||m.id}/status`,{ status:newStatus }); load(); }

  return (
    <main className="container py-10">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4">Backend: <span className="font-semibold">{status}</span></div>
        <div className="card p-4">Total Members: <span className="font-semibold">{members.length}</span></div>
        <div className="card p-4">Checked In: <span className="font-semibold">{members.filter(m=>m.lastStatus==='Checked In').length}</span></div>
      </div>

      <div className="card p-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">Members</div>
          <div className="flex gap-2">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Member name" className="border rounded px-3 py-2 text-sm"/>
            <button onClick={addMember} className="px-3 py-2 bg-primary text-white rounded text-sm">Add</button>
          </div>
        </div>
        <div className="space-y-2">
          {members.map(m => (
            <div key={(m._id||m.id)} className="flex items-center justify-between border rounded px-3 py-2">
              <div>
                <div className="font-medium">{m.name}</div>
                <div className="text-xs text-neutral-500">{m.plan || 'Basic'} â¢ {m.lastStatus || 'Checked Out'}</div>
              </div>
              <div>
                { (m.lastStatus === 'Checked In')
                  ? <button onClick={()=>toggle(m)} className="px-3 py-1 bg-red-600 text-white rounded text-sm">Check Out</button>
                  : <button onClick={()=>toggle(m)} className="px-3 py-1 bg-green-600 text-white rounded text-sm">Check In</button>
                }
              </div>
            </div>
          ))}
          {members.length===0 && <div className="text-sm text-neutral-500">No members yet. Add one above.</div>}
        </div>
      </div>
    </main>
  );
}
