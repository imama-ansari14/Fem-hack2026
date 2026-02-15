import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { User, Envelope, Lock, ArrowRight } from "@phosphor-icons/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Custom Styled SweetAlert for Premium Feel
  const Toast = Swal.mixin({
    customClass: {
      popup: "rounded-2xl border border-slate-800 bg-slate-900 text-white",
      title: "text-white font-bold",
      confirmButton: "bg-indigo-600 px-6 py-2 rounded-lg",
    },
    buttonsStyling: false,
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, role: "student" } },
    });

    if (error) {
      Toast.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message,
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Welcome!",
        text: "Account created successfully.",
      });
      navigate("/Student-Portal");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-[1100px] grid lg:grid-cols-2 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Left Side: Branding */}
        <div className="p-12 hidden lg:flex flex-col justify-between bg-indigo-600/10 border-r border-white/5">
          <div>
            {/* LOGO */}
            <div className="h-12 w-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20">
              <span className="text-white font-black text-2xl">S</span>
            </div>
            <h1 className="text-5xl font-bold text-white leading-tight">
              Elevate Your <br /> Learning{" "}
              <span className="text-indigo-400">Experience.</span>
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-sm font-light leading-relaxed">
            The next generation student portal designed for performance and
            clarity.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-16">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h2>
            <p className="text-slate-400 mb-10 font-light">
              Join the elite community of students today.
            </p>

            <form onSubmit={handleSignup} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 p-4 pl-12 rounded-xl text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <Envelope
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors"
                    size={20}
                  />
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 p-4 pl-12 rounded-xl text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="student@university.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors"
                    size={20}
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 p-4 pl-12 rounded-xl text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 mt-4 group"
              >
                {loading ? (
                  "Initializing..."
                ) : (
                  <>
                    Get Started{" "}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-slate-500 text-sm">
              Already a member?{" "}
              <Link
                to="/login"
                className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
