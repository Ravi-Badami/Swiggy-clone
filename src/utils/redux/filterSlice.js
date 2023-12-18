import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    cuisines: [],
    cusineButton: null,
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
          (cuisine.checked = !cuisine.checked),
      );
    },
    updateButton: (state, action) => {
      state.cusineButton = action.payload;
    },
  },
});

export const { addCuisines, updateChecked, updateButton } = filterSlice.actions;
export default filterSlice.reducer;
