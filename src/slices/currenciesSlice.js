import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useCoingeckoService from "../services/coingecko.api";

const initialState = {
  data: [],
  loadingStatus: "idle",
};

export const fetchCurrencies = createAsyncThunk("currencies/fetchCurrencies", () => {
  const { getCurrencies } = useCoingeckoService();
  return getCurrencies();
});

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingStatus = "idle";
        console.log(state.data);
      })
      .addCase(fetchCurrencies.rejected, (state) => {
        state.loadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

export default currenciesSlice.reducer;
