"use client";

import { useState, useEffect } from "react";

export default function Sidebar({ channels = [], onFilter }) {
  const [active, setActive] = useState("all");
  const [lang, setLang] = useState("en");
  const [collapsed, setCollapsed] = useState(false);

  // ===== Persistent Language =====
  useEffect(() => {
    const savedLang = localStorage.getItem("sidebar_lang");
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar_lang", lang);
  }, [lang]);

  // ===== Menu Data =====
  const menus = [
    { key: "all", en: "All Channels", bn: "সকল চ্যানেল", icon: "📺" },
    { key: "bd", en: "Bangladesh Channels", bn: "বাংলাদেশ TV", icon: "🇧🇩" },
    { key: "sports", en: "Sports Live", bn: "স্পোর্টস লাইভ", icon: "⚽" },
    { key: "kids", en: "Kids & Cartoon", bn: "শিশু ও কার্টুন", icon: "🧸" },
    { key: "music", en: "Music & Entertainment", bn: "সঙ্গীত", icon: "🎵" },
    { key: "doc", en: "Documentary & Nature", bn: "তথ্যচিত্র", icon: "🌎" },
    {
      key: "news",
      en: "International News",
      bn: "আন্তর্জাতিক সংবাদ",
      icon: "🌐",
    },
    {
      key: "indian",
      en: "Indian Bangla TV",
      bn: "ইন্ডিয়ান বাংলা",
      icon: "🎬",
    },
  ];

  // ===== Filter System =====
  const handleFilter = (menu) => {
    setActive(menu.key);
    if (!onFilter) return;
    if (menu.key === "all") {
      onFilter(channels);
      return;
    }
    onFilter(channels.filter((ch) => ch.category === menu.key));
  };

  return (
    <aside
      className={`
        flex flex-col h-full bg-white
        transition-all duration-300 ease-in-out
        border-r border-gray-100
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* ===== Header ===== */}
      <div className="p-5 flex justify-between items-center">
        {!collapsed && (
          <h1 className="text-gray-800 font-bold tracking-wider text-lg">
            BD Live
          </h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-red-600 transition"
        >
          {collapsed ? "➡" : "⬅"}
        </button>
      </div>

      {/* ===== Language Switch ===== */}
      {!collapsed && (
        <div className="px-4 pb-3">
          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200 transition font-medium"
          >
            {lang === "en" ? "বাংলা" : "English"}
          </button>
        </div>
      )}

      {/* ===== Menu List ===== */}
      <div className="flex-1 px-2 overflow-y-auto space-y-1 custom-scrollbar">
        {menus.map((m) => (
          <div
            key={m.key}
            onClick={() => handleFilter(m)}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
              transition-all duration-200
              ${
                active === m.key
                  ? "bg-red-600 text-white shadow-md scale-[1.02]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }
            `}
          >
            <span className="text-lg">{m.icon}</span>

            {!collapsed && (
              <span className="text-[13px] font-semibold">
                {lang === "en" ? m.en : m.bn}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* ===== Footer Favorite ===== */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl hover:bg-red-50 transition cursor-pointer">
            <span className="text-red-500">❤️</span>

            <span className="text-xs text-gray-700 font-medium">
              {lang === "en" ? "Favorites" : "ফেভারিট"}
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}
