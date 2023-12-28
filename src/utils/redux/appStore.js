import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantDataReducer from "./restaurantSlice";
import foodCatagoryReducer from "./foodCatagorySlice";
import filterReducer from "./filterSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  /**adding reducer to the store */
  reducer: {
    cart: cartReducer,
    restaurant: restaurantDataReducer,
    foodCatagory: foodCatagoryReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});
export default appStore;
