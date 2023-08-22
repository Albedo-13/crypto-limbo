import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import defaultApiSettings from "../store/apiSettings";

const initialState = {
  filters: ["All", "Top Gainers", "Top Losers", "Highest Price", "Defi", "Metaverse"],
  activeFilter: "All",
  filteredCurrencies: [],
  filteredCurrenciesDefi: [],
  filteredCurrenciesMetaverse: [],
};

export const fetchDefi = createAsyncThunk("marketTrendsFilters/fetchDeFi", async () => {
  const { request } = useHttp();
  const { url, vsCurrency, order, page, locale } = defaultApiSettings;
  return await request(
    `${url}/coins/markets?vs_currency=${vsCurrency}&category=decentralized-finance-defi&order=${order}&per_page=6&page=${page}&locale=${locale}`
  );
});

export const fetchMetaverse = createAsyncThunk("marketTrendsFilters/fetchMetaverse", async () => {
  const { request } = useHttp();
  const { url, vsCurrency, order, page, locale } = defaultApiSettings;
  return await request(
    `${url}/coins/markets?vs_currency=${vsCurrency}&category=metaverse&order=${order}&per_page=6&page=${page}&locale=${locale}`
  );
});

// for metaverse
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en

// async filters
// https://stackoverflow.com/questions/74887437/how-to-call-asyncthunk-method-from-reducer-method-in-the-same-slice
// https://stackoverflow.com/questions/60316251/how-to-use-redux-thunk-with-redux-toolkits-createslice

export const marketTrendsFiltersSlice = createSlice({
  name: "marketTrendsFilters",
  initialState,
  reducers: {
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
    filteredCurrenciesChanged: (state, action) => {
      switch (state.activeFilter) {
        case "All":
          state.filteredCurrencies = action.payload.slice(0, 6);
          break;
        case "Top Gainers":
          state.filteredCurrencies = [...action.payload]
            .sort((a, b) => (a.price_change_percentage_24h > b.price_change_percentage_24h ? -1 : 1))
            .slice(0, 6);
          break;
        case "Top Losers":
          state.filteredCurrencies = [...action.payload]
            .sort((a, b) => (a.price_change_percentage_24h > b.price_change_percentage_24h ? 1 : -1))
            .slice(0, 6);
          break;
        case "Highest Price":
          state.filteredCurrencies = [...action.payload]
            .sort((a, b) => (a.current_price > b.current_price ? -1 : 1))
            .slice(0, 6);
          break;
        case "Defi":
          state.filteredCurrencies = state.filteredCurrenciesDefi;
          break;
        case "Metaverse":
          state.filteredCurrencies = state.filteredCurrenciesMetaverse;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDefi.rejected, () => console.log("fetchDefi error"))
      .addCase(fetchDefi.pending, () => console.log("fetchDefi pending"))
      .addCase(fetchDefi.fulfilled, (state, action) => {
        state.filteredCurrenciesDefi = action.payload;
        state.filteredCurrencies = action.payload;
        state.activeFilter = "Defi";
      })
      .addCase(fetchMetaverse.rejected, () => console.log("fetchMetaverse error"))
      .addCase(fetchMetaverse.pending, () => console.log("fetchMetaverse pending"))
      .addCase(fetchMetaverse.fulfilled, (state, action) => {
        state.filteredCurrenciesMetaverse = action.payload;
        state.filteredCurrencies = action.payload;
        state.activeFilter = "Metaverse";
      })
      .addDefaultCase(() => { });
  },
});

export default marketTrendsFiltersSlice.reducer;
export const { activeFilterChanged, filteredCurrenciesChanged } = marketTrendsFiltersSlice.actions;
