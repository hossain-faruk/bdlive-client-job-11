import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Providers from "@/redux/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f111a] text-white min-h-screen flex overflow-hidden no-scrollbar">
        <Providers>
          {/* ১. স্থায়ী ডার্ক সাইডবার (সবার বামে) - এটি স্ক্রিনের একদম উপর থেকে নিচ পর্যন্ত থাকবে */}
          <aside className="w-64 hidden lg:block border-r border-white/5 bg-[#161826] h-screen shrink-0 z-[110]">
            <Sidebar />
          </aside>

          {/* ২. ডান পাশের প্রধান অংশ - যেখানে হেডার এবং কন্টেন্ট থাকবে */}
          <div className="flex flex-col flex-1 h-screen overflow-hidden relative">
            {/* হেডার এখন শুধু এই ডান পাশের অংশের ওপরে ফিক্সড থাকবে */}
            <div className="sticky top-0 z-[100] w-full bg-[#0f111a]">
              <Header />
            </div>

            {/* পেজের মূল কন্টেন্ট এরিয়া (ব্যানার ও চ্যানেল কার্ড) */}
            <main className="flex-1 overflow-y-auto bg-[#0f111a] no-scrollbar">
              <div className="p-0">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
