import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StudentPortal from "./pages/Student-Portal";
// import LostFound from "./pages/LostFound";
// import Complaints from "./pages/Complaints";
// import Volunteering from "./pages/Volunteering";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Student Routes */}
        <Route path="/Student-Portal" element={<StudentPortal />} />
        {/* <Route path="/lost-found" element={<LostFound />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/volunteering" element={<Volunteering />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
