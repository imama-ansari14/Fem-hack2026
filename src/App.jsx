import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StudentPortal from "./pages/Student-Portal";
import AdminDashboard from "./pages/AdminDashboard";

// Admin pages
import Complaints from "./pages/admin/ComplaintsPage";
import LostFound from "./pages/admin/LostFoundPage";
import Volunteers from "./pages/admin/VolunteersPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-portal" element={<StudentPortal />} />

        {/* Admin Dashboard with Nested Routes */}
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
