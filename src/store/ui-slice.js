import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: true,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    turnOn(state) {
      state.cartIsVisible = true;
    },
    turnOff(state) {
      state.cartIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
