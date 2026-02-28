"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChannels } from "@/features/channel/channel.slice";
import { db } from "@/firebase/config";
import { collection, onSnapshot, query } from "firebase/firestore";

export default function Home() {
  const dispatch = useDispatch();
  const { filteredList } = useSelector((state) => state.channel);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // ফায়ারস্টোর থেকে ডাটা আনা হচ্ছে
    const q = query(collection(db, "channels"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const channelsArray = [];
      querySnapshot.forEach((doc) => {
        channelsArray.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setChannels(channelsArray));
    });
    return () => unsubscribe();
  }, [dispatch]);

  const displayList = filteredList?.length > 0 ? filteredList : [];

  return (
    <div className="w-full min-h-screen bg-[#0f111a] text-white">
      {/* ১. ভিডিও প্লেয়ার সেকশন */}
      {isClient && selectedUrl && (
        <div className="w-full bg-black aspect-video max-h-[500px] flex items-center justify-center border-b-4 border-red-600 shadow-2xl">
          <video
            key={selectedUrl}
            src={selectedUrl}
            controls
            autoPlay
            className="h-full w-auto"
            onError={() => alert("ভিডিও লিঙ্কটি কাজ করছে না।")}
          />
        </div>
      )}

      <div className="p-4 md:p-10">
        {/* ২. ডার্ক ব্যানার লেআউট */}
        <div className="w-full bg-[#161826] border border-white/5 rounded-[2.5rem] p-10 md:p-20 mb-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
              <span className="text-red-600 text-[10px] font-black uppercase tracking-widest">
                সরাসরি সম্প্রচার
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              বাংলাদেশের সেরা <br />{" "}
              <span className="text-red-600">লাইভ টিভি</span>
            </h1>
            <p className="text-zinc-500 max-w-lg text-lg font-medium leading-relaxed">
              সবচেয়ে দ্রুত এবং ফ্রিতে সরাসরি টিভি দেখুন। ফায়ারস্টোর থেকে
              রিয়েল-টাইম আপডেট হচ্ছে।
            </p>
          </div>
        </div>

        {/* ৩. সব চ্যানেল টাইটেল */}
        <div className="flex items-center gap-3 mb-10 px-2 border-l-4 border-red-600 ml-1">
          <h2 className="text-2xl font-black tracking-tight ml-2">
            সব চ্যানেল
          </h2>
        </div>

        {/* ৪. টিভি কার্ড ডিজাইন: প্রতি সারিতে ৬টি করে চ্যানেল (lg:grid-cols-6) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {displayList.map((ch, i) => (
            <div
              key={i}
              onClick={() => setSelectedUrl(ch.url)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-600/10"
            >
              {/* কার্ডের উপরের অংশ: লোগো পুরোটা ফিলাপ করবে */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                {/* রেড লাইভ ইন্ডিকেটর ও এনিমেটেড বিন্দু */}
                <div className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-sm text-[8px] font-bold px-2 py-0.5 rounded text-white z-20 flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_5px_white]"></span>
                  LIVE
                </div>

                {/* চ্যানেল ইমেজ: object-cover ব্যবহার করে পুরো বক্স ফিলাপ করা হয়েছে */}
                <img
                  src={ch.logo}
                  alt={ch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co/L8yN6p7/jamuna.png";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* কার্ডের নিচের টেক্সট অংশ */}
              <div className="p-3 bg-white">
                <h3 className="text-[12px] font-bold text-gray-800 truncate mb-1">
                  {ch.name}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                    Free Live HD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
