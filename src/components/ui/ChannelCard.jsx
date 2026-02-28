"use client";

import React from "react";

export default function ChannelCard({ channel, onPlay }) {
  return (
    <div
      onClick={() => onPlay(channel)}
      className="group relative bg-[#11131a] rounded-xl overflow-hidden cursor-pointer
      transition-all duration-500
      hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]
      border border-white/5 hover:border-red-500/40"
    >
      {/* IMAGE SECTION */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center">
        <img
          src={channel.image || channel.thumbnail}
          alt={channel.name}
          className="max-h-[75%] max-w-[75%] object-contain
          transition-transform duration-700
          group-hover:scale-105
          select-none pointer-events-none"
          draggable="false"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* LIVE BADGE */}
        {channel.isLive && (
          <div
            className="absolute top-4 left-4 z-20
            bg-red-600
            text-white text-[12px] font-extrabold
            px-3 py-1 rounded-md shadow-lg
            flex items-center gap-1 tracking-wider"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            LIVE
          </div>
        )}
      </div>

      {/* INFO SECTION */}
      <div className="px-5 pt-4 pb-4 bg-[#0e1016]">
        {/* Bigger Channel Name + Lower Position */}
        <h3 className="text-white text-[18px] font-semibold truncate tracking-wide mb-3">
          {channel.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 text-[13px] font-medium uppercase tracking-wider">
              Live TV
            </span>

            <span className="w-1 h-1 bg-zinc-500 rounded-full"></span>

            <span className="text-blue-400 text-[13px] font-semibold uppercase tracking-wider">
              Free
            </span>
          </div>

          <div className="bg-red-600 px-3 py-1 rounded-md shadow-md">
            <span className="text-[12px] font-bold text-white tracking-wide">
              HD
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Hover Line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0
        bg-red-600 transition-all duration-500 group-hover:w-full"
      ></div>
    </div>
  );
}
