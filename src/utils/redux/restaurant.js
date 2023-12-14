import { createSlice } from "@reduxjs/toolkit";

const restaurant = createSlice({
  name: "restaurant",
  initialState: {
    restaurantData: {},
  },
  reducers: {
    addRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
  },
});

export const { addRestaurantData } = restaurant.actions;
export default restaurant.reducer;
