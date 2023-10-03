import { createSlice } from "@reduxjs/toolkit";

const initialState = { transactions: [], purchases: [], sales: [] };

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    test(state, action) {
      state.transactions = [...state.transactions, action.payload];
    },
  },
});

export const { test } = portfolioSlice.actions;
export default portfolioSlice.reducer;
