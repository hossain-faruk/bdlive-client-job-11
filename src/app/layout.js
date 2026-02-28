"use client";

import { useState } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Providers from "@/redux/Providers";

export default function RootLayout({ children }) {
  // সাইডবার ডিফল্টভাবে ওপেন থাকবে (isOpen: true)
  const [isOpen, setIsOpen] = useState(true);

  // মেনু বাটনে ক্লিক করলে সাইডবার টগল হবে
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex overflow-hidden selection:bg-red-100">
        <Providers>
          {/* ১. বাম পাশের ইউটিউব স্টাইল সাইডবার */}
          <aside
            className={`
              ${isOpen ? "w-64" : "w-0 lg:w-20"} 
              hidden lg:block border-r border-gray-100 h-screen shrink-0 z-[110] 
              transition-all duration-300 ease-in-out bg-white
            `}
          >
            <Sidebar isOpen={isOpen} />
          </aside>

          {/* ২. ডান পাশের প্রধান অংশ */}
          <div className="flex flex-col flex-1 h-screen overflow-hidden relative bg-white">
            {/* হেডার - যেখানে টগল ফাংশন পাঠানো হয়েছে */}
            <div className="sticky top-0 z-[100] w-full shrink-0">
              <Header toggleSidebar={toggleSidebar} />
            </div>

            {/* পেজের মূল কন্টেন্ট এরিয়া */}
            <main className="flex-1 overflow-y-auto no-scrollbar bg-white">
              <div className="w-full h-full">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
