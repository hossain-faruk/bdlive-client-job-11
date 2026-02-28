import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    current: null, // বর্তমানে কোন চ্যানেল চলছে
    isPlaying: false, // প্লেয়ার কি ওপেন আছে?
    isLoading: false, // ভিডিও কি লোড হচ্ছে?
  },
  reducers: {
    // এই অ্যাকশনটি দিয়ে আমরা প্লেয়ার চালু করব এবং চ্যানেল ডেটা সেট করব
    playStream: (state, action) => {
      state.current = action.payload;
      state.isPlaying = !!action.payload; // যদি পেলোড থাকে তবে true, নাহলে false
      state.isLoading = true;
    },
    // ভিডিও লোড শেষ হলে এটি কল হবে
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    // প্লেয়ার পুরোপুরি বন্ধ করার জন্য
    closePlayer: (state) => {
      state.current = null;
      state.isPlaying = false;
      state.isLoading = false;
    },
  },
});

export const { playStream, setLoading, closePlayer } = playerSlice.actions;
export default playerSlice.reducer;
