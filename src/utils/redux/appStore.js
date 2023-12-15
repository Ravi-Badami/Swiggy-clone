import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantDataReducer from "./restaurantSlice";
import foodCatagoryReducer from "./foodCatagorySlice";

const appStore = configureStore({
  /**adding reducer to the store */
  reducer: {
    cart: cartReducer,
    restaurant: restaurantDataReducer,
    foodCatagory: foodCatagoryReducer,
  },
});
export default appStore;
