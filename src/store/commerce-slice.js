import { createSlice } from "@reduxjs/toolkit";

const commerceSlice = createSlice({
  name: "commerce",
  initialState: {
    categories: ["All"],
    products: [],
    activeCategory: { name: "All", id: "cat_zkK6oL0nRoXn0Q" },
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setActiveCategory(state, action) {
      state.activeCategory = state.categories[action.payload];
    },
  },
});

export const commerceActions = commerceSlice.actions;

export default commerceSlice;
