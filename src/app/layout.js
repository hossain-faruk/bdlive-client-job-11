"use client";

import { useState } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Providers from "@/redux/Providers";

export default function RootLayout({ children }) {
  // সাইডবার ডিফল্টভাবে ওপেন থাকবে
  const [isOpen, setIsOpen] = useState(true);

  // মেনু বাটনে ক্লিক করলে সাইডবার টগল হবে
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen selection:bg-red-100 overflow-hidden font-sans">
        <Providers>
          {/* ১. হেডার এখন স্ক্রিনের একদম ওপরে (Full Width) */}
          <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />

          <div className="flex h-[calc(100vh-56px)] overflow-hidden">
            {/* ২. বাম পাশের সাইডবার যা হেডারের নিচে থাকবে */}
            <aside
              className={`
                ${isOpen ? "w-60" : "w-0 lg:w-[72px]"} 
                hidden lg:block h-full shrink-0 z-[110] 
                transition-all duration-300 ease-in-out bg-white overflow-y-auto no-scrollbar
              `}
            >
              <Sidebar isOpen={isOpen} />
            </aside>

            {/* ৩. প্রধান কন্টেন্ট এরিয়া */}
            <main className="flex-1 overflow-y-auto no-scrollbar bg-white">
              <div className="w-full h-full">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
