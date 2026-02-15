import { Link } from "react-router-dom";
import { SignOut } from "@phosphor-icons/react";
import { supabase } from "../lib/supabase";

export default function StudentNavbar({ user }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-[#0057a8]">
          Saylani Mass IT Hub
        </h1>

        <div className="flex items-center gap-6">
          <Link to="/student-portal" className="hover:text-[#66b032]">Home</Link>
          <Link to="/lost-found" className="hover:text-[#66b032]">Lost & Found</Link>
          <Link to="/complaints" className="hover:text-[#66b032]">Complaints</Link>
          <Link to="/volunteering" className="hover:text-[#66b032]">Volunteering</Link>

          {/* Student Info */}
          <div className="flex items-center gap-3 ml-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">{user?.email}</span>
          </div>

          <button
            onClick={handleLogout}
            className="bg-[#66b032] text-white px-3 py-2 rounded-lg flex items-center gap-2"
          >
            <SignOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
