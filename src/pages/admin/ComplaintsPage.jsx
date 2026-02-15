import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'; 
import { WarningCircle, CheckCircle, Clock } from "@phosphor-icons/react";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      const { data, error } = await supabase.from('complaints').select('*').order('created_at', { ascending: false });
      if (!error) setComplaints(data);
      setLoading(false);
    };
    fetchComplaints();
  }, []);

  if (loading) return <div className="text-center p-10">Loading Complaints...</div>;

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <WarningCircle size={32} className="text-red-500" /> User Complaints
      </h1>
      <div className="grid gap-4">
        {complaints.map((item) => (
          <div key={item.id} className="bg-gray-800 border border-gray-700 p-5 rounded-xl hover:border-blue-500 transition-all shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-blue-400">{item.subject || "No Subject"}</h3>
                <p className="text-gray-400 mt-1">{item.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  <span>User ID: {item.user_id}</span>
                  <span>Date: {new Date(item.created_at).toLocaleDateString()}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                item.status === 'resolved' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
              }`}>
                {item.status || 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Complaints;