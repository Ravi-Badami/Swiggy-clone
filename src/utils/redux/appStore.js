import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  /**adding reducer to the store */
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
