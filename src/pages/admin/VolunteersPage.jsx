import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { HandsClapping, Envelope, Calendar } from "@phosphor-icons/react";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const { data, error } = await supabase.from('volunteering').select('*');
      if (!error) setVolunteers(data);
    };
    fetchVolunteers();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <HandsClapping size={32} className="text-purple-500" /> Volunteer Applications
      </h1>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-700/50 text-gray-300 text-sm">
              <th className="p-4 font-semibold">Full Name</th>
              <th className="p-4 font-semibold">Area of Interest</th>
              <th className="p-4 font-semibold">Availability</th>
              <th className="p-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {volunteers.map((v) => (
              <tr key={v.id} className="hover:bg-gray-750 transition-colors">
                <td className="p-4 font-medium text-white">{v.full_name}</td>
                <td className="p-4">
                  <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-lg text-xs">
                    {v.interest}
                  </span>
                </td>
                <td className="p-4 text-gray-400 text-sm">{v.availability}</td>
                <td className="p-4 text-right">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                    Review Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Volunteers;