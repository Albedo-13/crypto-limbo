import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "../slices/currencySlice";

export const store = configureStore({
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    currency: currencySlice,
  }
});
