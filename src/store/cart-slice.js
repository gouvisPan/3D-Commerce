import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartIsVisible: false,
    products: [],
  },
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
