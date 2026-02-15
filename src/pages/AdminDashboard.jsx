import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Users, ClipboardText, Archive, HandsClapping, SignOut } from "@phosphor-icons/react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white font-['Poppins']">
      <aside className="w-64 bg-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <nav className="flex flex-col gap-4">
            <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700" to="/admin-dashboard/users">
              <Users size={20} /> Users
            </Link>
            <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700" to="/admin-dashboard/complaints">
              <ClipboardText size={20} /> Complaints
            </Link>
            <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700" to="/admin-dashboard/lost-found">
              <Archive size={20} /> Lost & Found
            </Link>
            <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700" to="/admin-dashboard/volunteers">
              <HandsClapping size={20} /> Volunteering Requests
            </Link>
          </nav>
        </div>
        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 mt-6">
          <SignOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet /> {/* Ye nested route ka content show karega */}
      </main>
    </div>
  );
};

export default AdminDashboard;


