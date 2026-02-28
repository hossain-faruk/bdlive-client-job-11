"use client";

import React from "react";

export default function Header() {
  return (
    /* পরিবর্তন ১: ব্যাকগ্রাউন্ড সাদা এবং শ্যাডো যোগ করা হয়েছে */
    <div className="w-full sticky top-0 z-[100] bg-white border-b border-gray-100 shadow-sm">
      {/* ১. প্রধান হেডার অংশ */}
      <header className="h-20 flex items-center justify-between px-10 w-full">
        {/* সার্চ বার অংশ */}
        <div className="w-[450px]">
          <div
            className="
            flex items-center
            bg-gray-100
            border border-gray-200
            rounded-full
            px-6 py-3
            transition-all
            shadow-sm
            focus-within:bg-white
            focus-within:ring-2
            focus-within:ring-red-600/20
          "
          >
            {/* Input */}
            <input
              type="text"
              placeholder="চ্যানেল খুঁজুন..."
              className="
                flex-1
                bg-transparent
                outline-none
                text-[16px]
                text-gray-800
                placeholder:text-gray-400
                font-semibold
              "
            />

            {/* Search Icon Right Side */}
            <div className="ml-3 cursor-pointer flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-red-600 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-5.2-5.2m1.2-4.8a7 7 0 11-14 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* লাইভ টিভি বাটন */}
        <div className="flex items-center">
          <button
            className="
            bg-gradient-to-r from-[#cc0000] to-[#ff1a1a]
            text-white px-4 py-3
            rounded-full
            text-[16px]
            font-black
            uppercase
            flex items-center gap-3
            shadow-lg
            transition-all
            active:scale-95
          "
          >
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white shadow-[0_0_8px_white]"></span>
            </span>

            <span className="tracking-tight whitespace-nowrap">Live TV</span>
          </button>
        </div>
      </header>

      {/* NEWS MARQUEE */}
      <div
        className="
        bg-[#cc0000]
        h-12
        flex items-center
        relative overflow-hidden
        border-y border-white/5
      "
      >
        <div className="max-w-full w-full px-10 flex items-center relative h-full">
          <div
            className="
            z-20 flex items-center h-full mr-4 pr-6
            border-r border-white/20
          "
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400 shadow-[0_0_10px_#facc15]"></span>
              </span>

              <span
                className="
                text-white text-[16px]
                font-black uppercase
                tracking-widest italic
                drop-shadow-md
              "
              >
                LIVE NEWS
              </span>
            </div>
          </div>

          {/* Marquee Text */}
          <div className="flex-1 overflow-hidden h-full flex items-center">
            <div className="flex whitespace-nowrap items-center animate-marquee h-full">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="
                    text-white text-[15px]
                    font-bold px-14
                    flex items-center h-full
                    tracking-wide opacity-95
                  "
                >
                  বাংলাদেশের সকল লাইভ টিভি চ্যানেল এখন ফ্রিতে দেখুন... যমুনা
                  টিভি, সময় টিভি, আরটিভি সহ সকল এইচডি চ্যানেল সচল...
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
