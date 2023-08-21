import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
  filters: ["All", "Top Gainers", "Top Losers", "New Listing", "Defi", "Metaverse"],
  activeFilter: "All",
  filteredCurrencies: [],
};

export const fetchFilters = createAsyncThunk("marketTrendsFilters/fetchDeFi", async () => {
  // const { request } = useHttp();
  // return await request(`${url}/coins/markets?vs_currency=${vsCurrency}&order=${order}&page=${page}&locale=${locale}`);

});

// for defi
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en

// for metaverse
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en


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
          console.log("all filtering...");
          state.filteredCurrencies = action.payload.slice(0, 6);
          break;
        case "Top Gainers":
          console.log("top gainers filtering...");
          state.filteredCurrencies = action.payload.slice(6, 12);
          break;
      }
    },
  }
});

export default marketTrendsFiltersSlice.reducer;
export const { activeFilterChanged, filteredCurrenciesChanged } = marketTrendsFiltersSlice.actions;