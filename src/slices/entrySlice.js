import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    usernameChanged: (state, action) => {
      state.username = action.payload;
    },
  },
});

export default entrySlice.reducer;
export const { usernameChanged } = entrySlice.actions;

