"use client";

export default function ChannelCard({ channel, onPlay }) {
  return (
    <div
      onClick={() => onPlay(channel)}
      className="cursor-pointer bg-zinc-900 hover:bg-zinc-800 rounded-xl p-3 sm:p-4 transition-transform transform hover:scale-105"
    >
      <img
        src={channel.image || channel.thumbnail}
        alt={channel.name}
        className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-cover rounded-lg mb-3"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-white text-sm sm:text-base md:text-lg font-medium truncate">
          {channel.name}
        </h3>
        {channel.isLive && (
          <span className="bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded-md">
            LIVE
          </span>
        )}
      </div>
    </div>
  );
}
