import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sort: "Relevance",
    cuisines: [],
    cusineButton: "Sort",
    Rating: [
      {
        rate: "Ratings 4.5+",
        checked: false,
      },

      {
        rate: "Ratings 4.0+",
        checked: false,
      },
      {
        rate: "Ratings 3.5+",
        checked: false,
      },
    ],
  },
  reducers: {
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
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
    updateRating: (state, action) => {
      state.Rating.some(
        (rate) =>
          rate.rate === action.payload && (rate.checked = !rate.checked),
      );
    },
  },
});

export const {
  addCuisines,
  updateChecked,
  updateButton,
  updateRating,
  updateSort,
} = filterSlice.actions;
export default filterSlice.reducer;
