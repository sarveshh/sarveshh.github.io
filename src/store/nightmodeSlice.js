import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const nightmodeSlice = createSlice({
  name: "nightmode",
  initialState,
  reducers: {
    toggleMode(state) {
      state.darkmode = state.darkmode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = nightmodeSlice.actions;
export const nightmodeReducer = nightmodeSlice.reducer;
