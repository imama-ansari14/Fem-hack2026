const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-slate-400">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black">
              S
            </div>
            <span className="text-white font-bold text-lg">
              Saylani Mass IT Hub
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            A unified student platform for Lost & Found, Complaints, and
            Volunteer registrations — built for efficiency and transparency.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 cursor-pointer">Lost & Found</li>
            <li className="hover:text-indigo-400 cursor-pointer">Complaints</li>
            <li className="hover:text-indigo-400 cursor-pointer">Volunteering</li>
            <li className="hover:text-indigo-400 cursor-pointer">Dashboard</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Hackathon Project</h4>
          <p className="text-sm">
            Built with Vite, React, Tailwind & Supabase for Saylani Hackathon
            2026.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-slate-500 text-sm">
        © 2026 Saylani Mass IT Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
