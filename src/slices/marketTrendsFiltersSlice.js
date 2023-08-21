import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: ["All", "Top Gainers", "Top Losers", "New Listing", "Defi", "Metaverse"],
  activeFilter: "All",
  filteredCurrencies: [],
};

// for defi
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en

// for metaverse
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en


export const marketTrendsFiltersSlice = createSlice({
  name: "marketTrendsFilters",
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setFilteredCurrencies: (state, action) => {
      state.filteredCurrencies = action.payload;
    },
  }
});

export default marketTrendsFiltersSlice.reducer;
export const { setActiveFilter, setFilteredCurrencies } = marketTrendsFiltersSlice.actions;