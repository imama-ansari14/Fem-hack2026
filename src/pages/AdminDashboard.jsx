import React from 'react';
import { Users, ChartPieSlice, ShieldCheck, GraduationCap, SignOut } from '@phosphor-icons/react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-['Poppins']">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-white/5 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10 text-indigo-400">
          <ShieldCheck size={32} weight="fill" />
          <span className="text-xl font-bold text-white tracking-tight">Admin Console</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          <div className="bg-indigo-600/10 text-indigo-400 p-3 rounded-xl flex items-center gap-3 border border-indigo-600/20">
            <ChartPieSlice size={20} weight="fill" /> Dashboard
          </div>
          <div className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 transition-all cursor-pointer">
            <Users size={20} /> Manage Students
          </div>
        </nav>

        <button onClick={handleLogout} className="mt-auto p-4 flex items-center gap-3 text-slate-500 hover:text-red-400 transition-colors">
          <SignOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">System Overview</h1>
          <div className="bg-slate-800 px-4 py-2 rounded-lg border border-white/5 text-sm">
            Server Status: <span className="text-emerald-400">Online</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <AdminStatCard label="Total Students" value="1,240" color="indigo" />
          <AdminStatCard label="Active Sessions" value="482" color="blue" />
          <AdminStatCard label="Course Completion" value="88%" color="emerald" />
          <AdminStatCard label="System Alerts" value="0" color="rose" />
        </div>

        {/* Table Area */}
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Student Signups</h2>
            <button className="text-sm text-indigo-400 font-bold hover:underline">View All</button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-xs uppercase tracking-widest">
              <tr>
                <th className="p-4">Student Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-slate-700"></div> Sarah Connor
                </td>
                <td className="p-4 text-slate-400">sarah.c@edu.com</td>
                <td className="p-4"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded">VERIFIED</span></td>
                <td className="p-4 text-right"><button className="text-indigo-400 hover:text-white">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const AdminStatCard = ({ label, value, color }) => (
  <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl">
    <p className="text-slate-500 text-xs font-bold uppercase mb-2">{label}</p>
    <h3 className={`text-3xl font-bold text-${color}-400`}>{value}</h3>
  </div>
);

export default AdminDashboard;