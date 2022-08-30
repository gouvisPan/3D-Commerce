import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import commerceSlice from "./commerce-slice";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,persistCombineReducers} from 'redux-persist';
import combineReducers from 'redux'
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const userReducer = {
  cart: cartSlice.reducer,
  ui: uiSlice.reducer,
  commerce: commerceSlice.reducer
}
const persistedReducer = persistCombineReducers(persistConfig, userReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)

// const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//     ui: uiSlice.reducer,
//     commerce: commerceSlice.reducer
//   },
// });

// export default store;
