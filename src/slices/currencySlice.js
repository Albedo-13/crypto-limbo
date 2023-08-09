import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
  data: [],
  currenciesLoadingStatus: "idle",
}

export const fetchCurrencies = createAsyncThunk("currencies/fetchCurrencies", async () => {
  const { request } = useHttp();
  return await request("https://api.coincap.io/v2/assets/");
});

export const currencySlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.currenciesLoadingStatus = "loading";
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.currenciesLoadingStatus = "idle";
      })
      .addCase(fetchCurrencies.rejected, (state) => {
        state.currenciesLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  }
});

export default currencySlice.reducer;
export const { increment } = currencySlice.actions;