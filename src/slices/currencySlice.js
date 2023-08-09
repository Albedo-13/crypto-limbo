import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  value: 0,
}

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    fetchCurrencies: (state, action) => {
      console.log(action);
      state.currencies = action.payload;
    }
  }
});

export default currencySlice.reducer;
export const { increment, fetchCurrencies } = currencySlice.actions;