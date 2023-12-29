import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    recommendation: [],
    showCard: false,
    type: "",
    cta: "",
    displayCategory: "restaurants",
  },
  reducers: {
    addRecommendation: (state, action) => {
      state.recommendation = action.payload;
    },
    updateShowCard: (state, action) => {
      state.showCard = action.payload;
    },
    updateSearchType: (state, action) => {
      state.type = action.payload;
    },
    updateCta: (state, action) => {
      state.cta = action.payload;
    },
    updateDisplayCategory: (state, action) => {
      state.displayCategory = action.payload;
    },
  },
});

export const {
  updateSearchType,
  updateCta,
  addRecommendation,
  updateShowCard,
  updateDisplayCategory,
} = searchSlice.actions;

export default searchSlice.reducer;
