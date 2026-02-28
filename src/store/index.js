import { configureStore } from "@reduxjs/toolkit";
// @/ ব্যবহার করা হয়েছে যা সরাসরি src ফোল্ডার থেকে ফাইলটি খুঁজে নেবে
import playerReducer from "@/features/player/playerSlice";
import channelReducer from "@/features/channel/channel.slice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    channel: channelReducer,
  },
});
