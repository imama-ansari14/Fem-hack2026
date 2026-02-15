import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

export default function StudentPortal() {
  const { user } = useAuth();

  return (
    <>
      <Navbar user={user} />
      <Hero />
      <Footer />
    </>
  );
}
