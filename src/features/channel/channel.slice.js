import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [], // এপিআই থেকে আসা সব চ্যানেলের লিস্ট
  filteredList: [], // ক্যাটাগরি অনুযায়ী ফিল্টার করা লিস্ট
  category: "all", // বর্তমানে সিলেক্ট করা ক্যাটাগরি
  loading: false,
  error: null,
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    // এপিআই থেকে ডেটা সেট করার সময় সব এবং ফিল্টার করা লিস্ট দুটোই আপডেট হবে
    setChannels(state, action) {
      state.list = action.payload;
      state.filteredList = action.payload;
      state.loading = false;
    },
    // ক্যাটাগরি পরিবর্তনের লজিক (স্ক্রিনশটের মতো ফিল্টারিং করার জন্য)
    setCategory(state, action) {
      state.category = action.payload;
      if (action.payload === "all") {
        state.filteredList = state.list;
      } else {
        state.filteredList = state.list.filter(
          (channel) => channel.category === action.payload,
        );
      }
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setChannels, setCategory, setLoading, setError } =
  channelSlice.actions;
export default channelSlice.reducer;
