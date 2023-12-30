import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    recommendation: [],
    showCard: false,
    type: "",
    cta: "",
    cardCategory: "",
    keyboardCategory: "",
    currentButton: "",
    restaurantData: [],
    dishData: [],
  },
  reducers: {
    updateCurrentButton: (state, action) => {
      state.currentButton = action.payload;
    },
    addRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
    addDishData: (state, action) => {
      state.dishData = action.payload;
    },
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
      state.cardCategory = action.payload;
    },
    updateKeyboardCategory: (state, action) => {
      state.keyboardCategory = action.payload;
    },
  },
});

export const {
  updateSearchType,
  updateCta,
  updateCurrentButton,
  addRecommendation,
  updateShowCard,
  addDishData,
  addRestaurantData,
  updateDisplayCategory,
  updateKeyboardCategory,
} = searchSlice.actions;

export default searchSlice.reducer;
