import { configureStore } from "@reduxjs/toolkit";
import currenciesSlice from "../slices/currenciesSlice";
import marketTrendsFiltersSlice from "../slices/marketTrendsFiltersSlice";
import bookmarksSlice from "../slices/bookmarksSlice";

export const store = configureStore({
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    currencies: currenciesSlice,
    marketTrendsFilters: marketTrendsFiltersSlice,
    bookmarks: bookmarksSlice,
  }
});
