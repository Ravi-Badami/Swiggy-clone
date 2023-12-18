import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantDataReducer from "./restaurantSlice";
import foodCatagoryReducer from "./foodCatagorySlice";
import filterReducer from "./filterSlice";

const appStore = configureStore({
  /**adding reducer to the store */
  reducer: {
    cart: cartReducer,
    restaurant: restaurantDataReducer,
    foodCatagory: foodCatagoryReducer,
    filter: filterReducer,
  },
});
export default appStore;
