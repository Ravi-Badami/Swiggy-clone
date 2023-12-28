import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    recommendation: [],
    showCard: false,
    type: true,
  },
  reducers: {
    addType: (state, action) => {
      state.type = !state.type;
    },
    addRecommendation: (state, action) => {
      state.recommendation = action.payload;
    },
    updateShowCard: (state, action) => {
      state.showCard = action.payload;
    },
  },
});

export const { addType, addRecommendation, updateShowCard } =
  searchSlice.actions;

export default searchSlice.reducer;
