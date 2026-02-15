// UsersPage.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase.from("users").select("*");
      setUsers(data || []);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
      <table className="min-w-full text-left border-collapse bg-gray-800 text-white rounded-xl shadow-lg overflow-auto">
        <thead>
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-700 transition-colors">
              <td className="px-6 py-3">{user.id}</td>
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">{user.role || "student"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
