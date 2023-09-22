import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useCoingeckoService from "../services/coingecko.api";

const initialState = {
  filters: [
    { name: "All", isRequireFetch: false },
    { name: "Top Gainers", isRequireFetch: false },
    { name: "Top Losers", isRequireFetch: false },
    { name: "Highest Price", isRequireFetch: false },
    { name: "Defi", isRequireFetch: true },
    { name: "Metaverse", isRequireFetch: true },
  ],
  activeFilter: "All",
  filteredCurrencies: [],
  filteredCurrenciesDefi: [],
  filteredCurrenciesMetaverse: [],
  isFetchingError: false,
  loadingStatus: "idle",
};

export const fetchDefi = createAsyncThunk("filters/fetchDeFi", () => {
  const { getCurrenciesByCategory } = useCoingeckoService();
  return getCurrenciesByCategory("decentralized-finance-defi");
});

export const fetchMetaverse = createAsyncThunk("filters/fetchMetaverse", () => {
  const { getCurrenciesByCategory } = useCoingeckoService();
  return getCurrenciesByCategory("metaverse");
});

export const filtersSlice = createSlice({
  name: "filters",
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
      .addCase(fetchDefi.pending, (state) => { state.loadingStatus = "loading" })
      .addCase(fetchDefi.fulfilled, (state, action) => {
        state.filteredCurrenciesDefi = action.payload;
        state.filteredCurrencies = action.payload;
        state.activeFilter = "Defi";
        state.loadingStatus = "idle";
      })
      .addCase(fetchDefi.rejected, (state) => {
        state.isFetchingError = true;
        state.loadingStatus = "error";
      })
      .addCase(fetchMetaverse.pending, (state) => { state.loadingStatus = "loading" })
      .addCase(fetchMetaverse.fulfilled, (state, action) => {
        state.filteredCurrenciesMetaverse = action.payload;
        state.filteredCurrencies = action.payload;
        state.activeFilter = "Metaverse";
        state.loadingStatus = "idle";
      })
      .addCase(fetchMetaverse.rejected, (state) => {
        state.isFetchingError = true;
        state.loadingStatus = "error";
      })
      .addDefaultCase(() => { });
  },
});

export default filtersSlice.reducer;
export const { activeFilterChanged, filteredCurrenciesChanged } = filtersSlice.actions;
