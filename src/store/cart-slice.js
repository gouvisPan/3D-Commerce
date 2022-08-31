import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: 0,
    items: [{}],
    total_items: 0,
    total_unique_items: 0,
    subtotal_raw: 0,
    cart: {},
  },
  reducers: {
    updateCart(state, action) {
      state.id = action.payload.id;
      state.items = action.payload.line_items;
      state.total_items = action.payload.total_items;
      state.total_unique_items = action.payload.total_unique_items;
      state.subtotal_raw = action.payload.subtotal.raw;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
