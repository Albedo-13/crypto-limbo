import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import defaultApiSettings from "../store/apiSettings";

const initialState = {
  filters: ["All", "Top Gainers", "Top Losers", "New Listing", "Defi", "Metaverse"],
  activeFilter: "All",
  filteredCurrencies: [],
  filteredCurrenciesDefi: [],
  filteredCurrenciesMetaverse: [],
};

export const fetchFilters = createAsyncThunk("marketTrendsFilters/fetchDeFi", async () => {
  const { request } = useHttp();
  const { url, vsCurrency, order, page, locale } = defaultApiSettings;
  return await request(
    `${url}/coins/markets?vs_currency=${vsCurrency}&category=decentralized-finance-defi&order=${order}&per_page=6&page=${page}&sparkline=false&locale=${locale}`
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
        case "Defi":
          state.filteredCurrencies = state.filteredCurrenciesDefi;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.rejected, () => console.log("fetchFilters error"))
      .addCase(fetchFilters.pending, () => console.log("fetchFilters pending"))
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filteredCurrenciesDefi = action.payload;
        state.filteredCurrencies = action.payload;
        state.activeFilter = "Defi";
      })
      .addDefaultCase(() => console.log("default case"));
  },
});

export default marketTrendsFiltersSlice.reducer;
export const { activeFilterChanged, filteredCurrenciesChanged } = marketTrendsFiltersSlice.actions;
