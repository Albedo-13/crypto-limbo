import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import defaultApiSettings from "../store/apiSettings";

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

export default marketTrendsFiltersSlice.reducer;
export const { activeFilterChanged, filteredCurrenciesChanged } = marketTrendsFiltersSlice.actions;
