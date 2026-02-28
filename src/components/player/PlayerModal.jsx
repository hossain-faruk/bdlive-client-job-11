"use client";

import { useSelector, useDispatch } from "react-redux";
import { stopStream } from "@/features/playerSlice";

export default function PlayerModal() {
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.player.streamUrl);

  if (!stream) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex justify-center items-center p-6">
      <div className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden">
        <iframe src={stream} className="w-full h-full" allowFullScreen />

        <button
          onClick={() => dispatch(stopStream())}
          className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}
