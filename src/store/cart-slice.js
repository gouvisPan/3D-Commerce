import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      id:0,
      line_items: [],
      subtotal: {raw: 0, formatted:0.00},
      totalItems:0,
      totalUniqueItems:0
    },
  },
  reducers: {
    replaceCart(state, action) {
        state.id = action.payload.id;
        state.line_items = action.payload.line_items;
        state.subtotal.raw = action.payload.subtotal.raw;
        state.subtotal.formatted = action.payload.subtotal.formatted;
        state.totalItems = action.payload.total_items;
        state.totalUniqueItems = action.payload.total_unique_items;        
    },
    addItem(state,action){

    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
