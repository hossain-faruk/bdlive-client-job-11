import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "@/features/channel/channel.slice";
import playerReducer from "@/features/player/playerSlice";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
    player: playerReducer,
  },
});
