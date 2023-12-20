import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantData: null,
    restaurantFilterData: null,
    checkboxData: null,
    checkboxMainArray: null,
  },
  reducers: {
    addRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
    addRestaurantFilterData: (state, action) => {
      state.restaurantFilterData = action.payload;
    },
    addCheckboxFilterData: (state, action) => {
      state.checkboxData = action.payload;
    },
    addCheckboxMainArray: (state, action) => {
      state.checkboxMainArray = action.payload;
    },
  },
});

export const {
  addRestaurantData,
  addRestaurantFilterData,
  addCheckboxFilterData,
  addCheckboxMainArray,
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
