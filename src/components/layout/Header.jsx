"use client";

export default function Header() {
  return (
    <div className="w-full sticky top-0 z-[100]">
      {/* ১. প্রধান হেডার অংশ */}
      <header className="h-16 bg-[#161826] border-b border-white/5 flex items-center justify-between px-6 w-full">
        <div className="flex items-center gap-10 w-full max-w-6xl">
          {/* লোগো */}
          <div className="flex items-center gap-2 shrink-0 cursor-pointer">
            <div className="bg-[#f04e23] p-1.5 rounded-lg">
              <span className="font-black text-white italic text-lg uppercase">
                BD
              </span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              Live
            </span>
          </div>

          {/* স্ক্রিনশট অনুযায়ী সার্চ বার */}
          <div className="hidden md:flex flex-1 items-center bg-[#1c1f2e] border border-white/10 rounded-full px-5 py-2 max-w-xl group">
            <span className="text-zinc-500 mr-3 text-sm">🔍</span>
            <input
              type="text"
              placeholder="চ্যানেল খুঁজুন..."
              className="bg-transparent outline-none text-sm w-full text-zinc-300 placeholder:text-zinc-600 font-medium"
            />
          </div>
        </div>

        {/* ডান পাশের লাইভ বাটন */}
        <div className="flex items-center gap-4">
          <div className="bg-red-600 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase flex items-center gap-1.5 shadow-lg shadow-red-600/20">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_5px_white]"></span>
            Live
          </div>
        </div>
      </header>

      {/* ২. লাল রঙের নিউজ বার (ইনলাইন এনিমেশন সহ) */}
      <div className="bg-[#cc0000] h-7 flex items-center overflow-hidden border-b border-black/10">
        <div
          className="flex whitespace-nowrap items-center"
          style={{
            animation: "marquee-scroll 30s linear infinite",
            display: "flex",
            width: "max-content",
          }}
        >
          {/* নিউজ কন্টেন্ট */}
          <span className="text-white text-[11px] font-bold px-10 flex items-center gap-2">
            <span className="bg-white text-red-600 px-1 rounded text-[9px] font-black italic">
              LIVE
            </span>
            বাংলাদেশের সকল লাইভ টিভি চ্যানেল এখন একই সাথে দেখতে পারবেন একদম
            ফ্রিতে...
          </span>
          <span className="text-white text-[11px] font-bold px-10 flex items-center gap-2">
            <span className="bg-white text-red-600 px-1 rounded text-[9px] font-black italic">
              LIVE
            </span>
            যমুনা টিভি, সময় টিভি, আরটিভি সহ সকল এইচডি চ্যানেল এখন আমাদের এখানে
            সচল...
          </span>

          {/* লুপ ঠিক রাখার জন্য রিপিট করা হয়েছে */}
          <span className="text-white text-[11px] font-bold px-10 flex items-center gap-2">
            <span className="bg-white text-red-600 px-1 rounded text-[9px] font-black italic">
              LIVE
            </span>
            বাংলাদেশের সকল লাইভ টিভি চ্যানেল এখন একই সাথে দেখতে পারবেন একদম
            ফ্রিতে...
          </span>
          <span className="text-white text-[11px] font-bold px-10 flex items-center gap-2">
            <span className="bg-white text-red-600 px-1 rounded text-[9px] font-black italic">
              LIVE
            </span>
            যমুনা টিভি, সময় টিভি, আরটিভি সহ সকল এইচডি চ্যানেল এখন আমাদের এখানে
            সচল...
          </span>
        </div>
      </div>

      {/* এনিমেশন কি-ফ্রেম (এটি কোনো এরর তৈরি করবে না) */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
