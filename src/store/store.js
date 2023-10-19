import { configureStore } from "@reduxjs/toolkit";
import currenciesSlice from "../slices/currenciesSlice";
import filtersSlice from "../slices/filtersSlice";
import bookmarksSlice from "../slices/bookmarksSlice";
import portfolioSlice from "../slices/portfolioSlice";
import entrySlice from "../slices/entrySlice";

export const store = configureStore({
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    currencies: currenciesSlice,
    filters: filtersSlice,
    bookmarks: bookmarksSlice,
    portfolio: portfolioSlice,
    entry: entrySlice,
  }
});
