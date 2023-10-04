import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
    { id: "ethereum", symbol: "ETH", name: "Ethereum" },
    { id: "solana", symbol: "SOL", name: "Solana" },
  ],
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    removeBookmark: (state, action) => {
      state.data = state.data.filter((bookmark) => bookmark.id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
