import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

// Auth Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Layouts
import AdminDashboard from "./pages/AdminDashboard";
import StudentPortalLayout from "./components/StudentPortalLayout";

// Student Pages
import Home from "./pages/Student-Portal"; // This is your Hero section page
import StudentComplaints from "./components/Hero";
import StudentLostFound from "./pages/LostFound";
import StudentVolunteering from "./pages/Volunteering";

// Admin pages
import Complaints from "./pages/admin/ComplaintsPage";
import LostFound from "./pages/admin/LostFoundPage";
import Volunteers from "./pages/admin/VolunteersPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Student Portal Routes (All have Navbar) */}
        <Route path="/student-portal" element={<StudentPortalLayout user={user} />}>
          <Route index element={<Home />} /> {/* This loads at /student-portal */}
          <Route path="lost-found" element={<StudentLostFound />} />
          <Route path="complaints" element={<StudentComplaints />} />
          <Route path="volunteering" element={<StudentVolunteering />} />
        </Route>

        {/* Admin Dashboard Routes (All have Sidebar) */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="complaints" element={<Complaints />} />
          <Route path="lost-found" element={<LostFound />} />
          <Route path="volunteers" element={<Volunteers />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;