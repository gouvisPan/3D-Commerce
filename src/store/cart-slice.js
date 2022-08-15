import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {},
  },
  reducers: {
    updateCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
