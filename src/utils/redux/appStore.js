import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantDataReducer from "./restaurantSlice";

const appStore = configureStore({
  /**adding reducer to the store */
  reducer: {
    cart: cartReducer,
    restaurant: restaurantDataReducer,
  },
});
export default appStore;
