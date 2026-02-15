import React from "react";
import { Megaphone, MagnifyingGlass, Heart } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20">
        <div className="aspect-[1000/600] w-[60rem] bg-gradient-to-tr from-[#0057a8] to-[#00a8ff]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Official Saylani Student Support
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6">
            Your Hub for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Solutions
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
            Empowering Saylani students to report concerns, recover lost items,
            and join our mission through volunteering—all in one secure
            platform.
          </p>
        </div>

        {/* Stats/Quick Links Section */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <Megaphone size={40} className="text-blue-400 mb-4" />
            <h3 className="text-white font-bold">Complaints</h3>
            <p className="text-gray-400 text-sm text-center mt-2">
              Voice your concerns directly to the management.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <MagnifyingGlass size={40} className="text-cyan-400 mb-4" />
            <h3 className="text-white font-bold">Lost & Found</h3>
            <p className="text-gray-400 text-sm text-center mt-2">
              Report missing items or claim what you found.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <Heart size={40} className="text-pink-400 mb-4" />
            <h3 className="text-white font-bold">Volunteering</h3>
            <p className="text-gray-400 text-sm text-center mt-2">
              Be the change and help our community grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
