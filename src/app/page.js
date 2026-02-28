"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChannels } from "@/features/channel/channel.slice";
import { db } from "@/firebase/config";
import { collection, onSnapshot, query } from "firebase/firestore";
import CategoryTabs from "@/components/ui/CategoryTabs";

export default function Home() {
  const dispatch = useDispatch();
  const { filteredList } = useSelector((state) => state.channel);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "News",
    "Entertainment",
    "Sports",
    "Movie",
    "Music",
    "Kids",
    "Educational",
    "Religious",
    "Documentary",
    "Lifestyle",
    "Cooking/Food",
    "Travel",
    "Business",
    "Cartoon",
    "Regional",
  ];

  useEffect(() => {
    setIsClient(true);
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
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* ১. স্টিকি ক্যাটাগরি বার - গ্লাস ইফেক্ট */}
      <div className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md w-full border-b-0 border-transparent transition-all duration-300">
        <div className="px-4 md:px-6 py-0">
          <CategoryTabs
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>
      </div>

      <div className="px-4 md:px-10">
        {/* ২. ভিডিও প্লেয়ার */}
        {isClient && selectedUrl && (
          <div className="w-full bg-black aspect-video max-h-[500px] flex items-center justify-center border-b-4 border-red-600 shadow-2xl mt-4 mb-10 rounded-2xl overflow-hidden">
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

        {/* ৩. ব্যানার লেআউট (আপনার দেওয়া ডিজাইন অনুযায়ী) */}
        {/* এখানে mt-1 থেকে বাড়িয়ে mt-6 করা হয়েছে যাতে ক্যাটাগরি বারের সাথে সুন্দর একটি গ্যাপ তৈরি হয় */}
        <div className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-10 md:p-20 mb-14 mt-6 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
              <span className="text-red-600 text-[20px] font-black uppercase tracking-widest">
                Live Broadcast
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 leading-tight">
              The best of Bangladesh <br />{" "}
              <span className="text-red-600">Live TV</span>
            </h1>
            <p className="text-gray-500 max-w-lg text-lg font-medium leading-relaxed">
              Watch live TV the fastest and for free
            </p>
          </div>
        </div>

        {/* ৪. সব চ্যানেল টাইটেল */}
        <div className="flex items-center bg-red-600 mb-5 -mt-6 overflow-hidden rounded-lg shadow-sm border-l-[4px] border-red-800 h-8 md:h-9 w-full">
          {/* ১. LIVE বাটন - স্লিম এবং টাইট প্যাডিং */}
          <div className="flex items-center px-3 shrink-0 h-full bg-red-700/40 border-r border-red-400/20">
            <div className="flex items-center gap-1.5 bg-white text-red-600 text-[8px] font-black px-2 py-0.5 rounded shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
              </span>
              LIVE
            </div>
          </div>

          {/* ২. নিউজ মারকিউ - এখন ফুল উইথ জুড়ে কাজ করবে */}
          <div className="flex-1 flex items-center overflow-hidden h-full">
            <span className="text-white/90 font-black text-[9px] md:text-[10px] pl-3 pr-2 shrink-0 uppercase tracking-tight">
              BREAKING NEWS:
            </span>
            <marquee
              className="text-xs font-bold text-white flex items-center"
              scrollamount="5"
            >
              <span className="mx-4 ">
                🔴 All popular Bangladeshi TV channels are now in one place
                Explosions were heard in Tehran on Saturday, Iranian media
                reported. Hour of your freedom is at hand, Trump tells
                Iranians.....
              </span>
              <span className="mx-4">
                🔴 Update: Watch live TV without buffering on high-speed servers
                Explosions were heard in Tehran on Saturday, Iranian media
                reported. Hour of your freedom is at hand, Trump tells
                Iranians........
              </span>
              <span className="mx-4 ">
                🔴 Stay tuned with us for more updates Explosions were heard in
                Tehran on Saturday, Iranian media reported.Hour of your freedom
                is at hand, Trump tells Iranians........
              </span>
            </marquee>
          </div>
        </div>

        {/* ৫. টিভি কার্ড ডিজাইন - হুবহু আপনার দেওয়া ডিজাইন */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pb-20">
          {displayList.map((ch, i) => (
            <div
              key={i}
              onClick={() => setSelectedUrl(ch.url)}
              className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* কার্ডের উপরের অংশ */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <div className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-sm text-[8px] font-bold px-2 py-0.5 rounded text-white z-20 flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_5px_white]"></span>
                  LIVE
                </div>

                <img
                  src={ch.logo}
                  alt={ch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co/L8yN6p7/jamuna.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
