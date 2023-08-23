import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import defaultApiSettings from "../store/apiSettings";

const initialState = {
  data: [],
  loadingStatus: "idle",
};

export const fetchCurrencies = createAsyncThunk("currencies/fetchCurrencies", async () => {
  const { request } = useHttp();
  const { url, vsCurrency, order, page, locale } = defaultApiSettings;
  return await request(`${url}/coins/markets?vs_currency=${vsCurrency}&order=${order}&page=${page}&locale=${locale}`);
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
