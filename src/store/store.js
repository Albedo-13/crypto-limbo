import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";

export const store = configureStore({
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    counter: counterReducer,
  }
});
