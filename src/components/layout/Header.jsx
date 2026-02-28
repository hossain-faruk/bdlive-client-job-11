// components/layout/Header.jsx
"use client";
import { useState, useEffect } from "react";

export default function Header({ toggleSidebar, isOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // স্ক্রোল ডিটেক্ট করার জন্য ইফেক্ট
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-[56px] flex items-center justify-between px-4 bg-white w-full sticky top-0 z-[120] transition-shadow duration-200 ${
        isScrolled ? "shadow-md border-transparent" : "border-b border-gray-100"
      }`}
    >
      {/* বাম অংশ: মেনু ও লোগো */}
      <div className="flex items-center shrink-0">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-full active:bg-gray-200 transition-colors"
        >
          <svg
            className="w-6 h-6 text-[#0f0f0f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex items-center gap-1 ml-1 sm:ml-4 cursor-pointer shrink-0">
          <div className="bg-[#FF0000] p-1.5 rounded-lg flex items-center justify-center shrink-0">
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5"></div>
          </div>
          <span className="font-bold text-[18px] sm:text-[20px] tracking-tighter text-[#da345d] font-sans whitespace-nowrap uppercase">
            LIVE TV BD
          </span>
        </div>
      </div>

      {/* মাঝের অংশ: রেসপন্সিভ সার্চ বার */}
      <div className="flex flex-1 justify-center items-center px-2 sm:px-10 max-w-[720px]">
        <div className="hidden sm:flex flex-1 items-center h-10 rounded-full border border-gray-300 bg-white overflow-hidden focus-within:border-blue-500 transition-all ml-4">
          <input
            type="text"
            placeholder="Search channel name"
            className="flex-1 px-5 py-2 outline-none text-[16px] text-gray-800 placeholder:text-gray-400 font-normal w-full"
          />
          <button className="bg-[#f8f8f8] border-l border-gray-300 h-full px-5 hover:bg-[#f0f0f0] transition-colors shrink-0">
            <svg
              className="w-5 h-5 text-[#606060]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* মোবাইল সার্চ আইকন */}
        <button className="sm:hidden p-2 hover:bg-gray-100 rounded-full ml-auto">
          <svg
            className="w-6 h-6 text-[#0f0f0f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* ডান অংশ: লাইভ এবং সাইন ইন বাটন */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0 pr-2 sm:pr-6 md:pr-10">
        {/* লাইভ বাটন */}
        <button className="bg-gray-100 hover:bg-red-50 text-red-600 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-bold uppercase flex items-center gap-2 border border-gray-200 hover:border-red-200 transition-all duration-200 active:scale-95">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-red-600"></span>
          </span>
          <span className="tracking-wide whitespace-nowrap">Live</span>
        </button>

        {/* সাইন ইন বাটন */}
        <button className="bg-gray-100 hover:bg-blue-50 text-blue-600 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-bold uppercase border border-gray-200 hover:border-blue-200 transition-all duration-200 active:scale-95 whitespace-nowrap">
          Sign in
        </button>
      </div>
    </header>
  );
}
