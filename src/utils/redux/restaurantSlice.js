import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantData: null,
    restaurantFilterData: null,
  },
  reducers: {
    addRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
    addRestaurantFilterData: (state, action) => {
      state.restaurantFilterData = action.payload;
    },
  },
});

export const { addRestaurantData, addRestaurantFilterData } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
