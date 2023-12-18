import { createSlice } from "@reduxjs/toolkit";
import { clearConfigCache } from "prettier";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    cuisines: [],
  },
  reducers: {
    addCuisines: (state, action) => {
      const newCuisine = action.payload;
      /** .some() is method of array */
      if (!state.cuisines.some((cuisine) => cuisine.name === newCuisine.name)) {
        state.cuisines.push(newCuisine);
      }
    },
    updateChecked: (state, action) => {
      state.cuisines.some(
        (cuisine) =>
          cuisine.name === action.payload &&
          console.log((cuisine.checked = !cuisine.checked)),
      );
    },
  },
});

export const { addCuisines, updateChecked } = filterSlice.actions;
export default filterSlice.reducer;
