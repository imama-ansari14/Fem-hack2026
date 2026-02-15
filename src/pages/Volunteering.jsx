import { useState } from "react";
import { HandHeart, CalendarCheck, Users } from "@phosphor-icons/react";
import { supabase } from "../lib/supabase";

const Volunteering = ({ user }) => {
  const [form, setForm] = useState({
    full_name: "",
    interest: "",
    availability: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await supabase.from("volunteering").insert([
      {
        user_id: user.id,
        ...form,
      },
    ]);

    setLoading(false);
    alert("Application submitted successfully 🚀");
    setForm({
      full_name: "",
      interest: "",
      availability: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Become a Volunteer
        </h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Join hands with Saylani and make a meaningful impact in the community.
          Empower others while building leadership and real-world experience.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {[
          {
            icon: <HandHeart size={36} />,
            title: "Community Service",
            desc: "Support events and help manage social initiatives.",
          },
          {
            icon: <Users size={36} />,
            title: "Team Collaboration",
            desc: "Work alongside talented peers and mentors.",
          },
          {
            icon: <CalendarCheck size={36} />,
            title: "Flexible Hours",
            desc: "Choose availability that fits your schedule.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/20"
          >
            <div className="text-indigo-400 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Application Form */}
      <div className="max-w-3xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl shadow-indigo-600/10">
        <h2 className="text-2xl font-bold mb-8 text-indigo-400">
          Volunteer Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-4 bg-slate-800 rounded-xl border border-white/10 focus:border-indigo-500 outline-none transition"
            value={form.full_name}
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Area of Interest (Event, Teaching, Tech Support...)"
            required
            className="w-full p-4 bg-slate-800 rounded-xl border border-white/10 focus:border-indigo-500 outline-none transition"
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
          />

          <select
            required
            className="w-full p-4 bg-slate-800 rounded-xl border border-white/10 focus:border-indigo-500"
            value={form.availability}
            onChange={(e) => setForm({ ...form, availability: e.target.value })}
          >
            <option value="">Select Availability</option>
            <option value="Weekends">Weekends</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Flexible">Flexible</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 py-4 rounded-xl font-semibold text-white transition-all shadow-lg shadow-indigo-600/30"
          >
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteering;
