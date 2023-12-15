import { createSlice } from "@reduxjs/toolkit";

const foodCatagorySlice = createSlice({
  name: "foodCatagory",
  initialState: {
    name: null,
    foodItems: null,
  },
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addAllFoodTypes: (state, action) => {
      state.foodItems = action.payload;
    },
  },
});

export const { addAllFoodTypes, addName } = foodCatagorySlice.actions;
export default foodCatagorySlice.reducer;
