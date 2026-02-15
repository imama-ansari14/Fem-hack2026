import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Archive, MapPin, Tag } from "@phosphor-icons/react";

const LostFound = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from('lost_found').select('*');
      if (!error) setItems(data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <Archive size={32} className="text-orange-500" /> Lost & Found Registry
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="p-5">
              <div className="flex justify-between mb-2">
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                  item.type === 'lost' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                }`}>
                  {item.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.item_name}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2"><MapPin size={16}/> {item.location}</p>
                <p className="flex items-center gap-2"><Tag size={16}/> {item.category}</p>
              </div>
              <p className="mt-4 text-sm text-gray-500 line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostFound;