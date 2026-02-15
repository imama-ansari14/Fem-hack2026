import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const LostFound = ({ user }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Lost",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(user || null);

  // Agar user prop nahi pass hua, Supabase auth se fetch karo
  useEffect(() => {
    if (!currentUser) {
      const fetchUser = async () => {
        const { data } = await supabase.auth.getUser();
        if (data?.user) setCurrentUser(data.user);
      };
      fetchUser();
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // User check
    if (!currentUser) {
      alert("User not logged in yet!");
      return;
    }

    setLoading(true);

    // Supabase insert
    const { error } = await supabase.from("lost_found").insert([
      {
        ...form,
        user_id: currentUser.id,
        contact_email: currentUser.email,
      },
    ]);

    if (!error) {
      alert("Item submitted successfully!");
      // Reset form
      setForm({
        title: "",
        description: "",
        category: "Lost",
        location: "",
      });
    } else {
      console.error(error.message);
      alert("Error submitting item: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-indigo-400">
          Lost & Found Portal
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Item Title"
            required
            className="w-full p-3 bg-slate-800 rounded-lg border border-white/10 focus:border-indigo-500 outline-none"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            placeholder="Description"
            required
            rows="4"
            className="w-full p-3 bg-slate-800 rounded-lg border border-white/10 focus:border-indigo-500 outline-none"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <select
            className="w-full p-3 bg-slate-800 rounded-lg border border-white/10 focus:border-indigo-500"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="Lost">Lost Item</option>
            <option value="Found">Found Item</option>
          </select>

          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 bg-slate-800 rounded-lg border border-white/10 focus:border-indigo-500 outline-none"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading || !currentUser}
            className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-semibold transition shadow-lg shadow-indigo-600/30"
          >
            {loading
              ? "Submitting..."
              : !currentUser
              ? "Loading..."
              : "Submit Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LostFound;
