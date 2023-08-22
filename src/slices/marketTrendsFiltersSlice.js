import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
  filters: ["All", "Top Gainers", "Top Losers", "New Listing", "Defi", "Metaverse"],
  activeFilter: "All",
  filteredCurrencies: [],
  filteredCurrenciesDeFi: [],
  filteredCurrenciesMetaverse: [],
};

export const fetchFilters = createAsyncThunk("marketTrendsFilters/fetchDeFi", async () => {
  console.log("createAsyncThunk");
  const { request } = useHttp();
  return await request(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en`);
});

// for defi
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en

// for metaverse
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en

// async filters
// https://stackoverflow.com/questions/74887437/how-to-call-asyncthunk-method-from-reducer-method-in-the-same-slice
// https://stackoverflow.com/questions/60316251/how-to-use-redux-thunk-with-redux-toolkits-createslice

//! Если нихуя не получится, то фетчить не по кнопке, а по загрузке
//! и в filteredCurrencies сувать по нажатию кнопки
// ПОНЯЛ! нужно сделать гибрид и отдельно создавать события онклика
// для кнопок фильтра, которые генирируются в цикле marketTrends

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
        case "Defi":
          console.log("defi filtering...", action.payload);
          state.filteredCurrencies = state.filteredCurrenciesDeFi;
          // state.filteredCurrencies = action.payload.slice(0, 5);
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
        // ПРОДОЛЖИТЬ ТУТ. СОХРАНИТЬ В НОВЫЙ ДЕФИ ОБЪЕКТ И ИСПОЛЬЗОВАТЬ

        state.filteredCurrenciesDeFi = action.payload;
        state.filteredCurrencies = action.payload;
        state.activeFilter = "Defi";

        console.log("fetchFilters fulfulled:", state, action);
      })
      .addDefaultCase(() => console.log("default case"));
  }
});

export default marketTrendsFiltersSlice.reducer;
export const { activeFilterChanged, filteredCurrenciesChanged } = marketTrendsFiltersSlice.actions;