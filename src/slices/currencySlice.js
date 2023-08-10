import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
  data: [],
  currenciesLoadingStatus: "idle",
}

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
const defaultApiSettings = {
  url: "https://api.coingecko.com/api/v3",
  vsCurrency: "usd",
  order: "market_cap_desc",
  page: 1,
  locale: "en",
};

export const fetchCurrencies = createAsyncThunk("currencies/fetchCurrencies", async () => {
  const { request } = useHttp();
  const { url, vsCurrency, order, page, locale } = defaultApiSettings;
  return await request(`${url}/coins/markets?vs_currency=${vsCurrency}&order=${order}&page=${page}&locale=${locale}`);
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
        state.data = action.payload;
        state.currenciesLoadingStatus = "idle";
        console.log(state.data);
      })
      .addCase(fetchCurrencies.rejected, (state) => {
        state.currenciesLoadingStatus = "error";
      })
      .addDefaultCase(() => { });
  }
});

export default currencySlice.reducer;
export const { increment } = currencySlice.actions;