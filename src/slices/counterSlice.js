import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    }
  }
});

export default counterSlice.reducer;
export const { increment } = counterSlice.actions;