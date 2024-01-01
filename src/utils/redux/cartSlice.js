import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      /**modifying the state of the slice */
      const data = action.payload;
      const isPresent = state.items.some((card) => card.id === data.id);
      if (isPresent) {
        const foundObject = state.items.find((card) => card.id === data.id);
        foundObject.count = foundObject.count + 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    deleteItem: (state, action) => {
      // const indexToDelete = state.items.findIndex(
      //   (card) => card.cardData.info.id === action.payload,
      // );

      // if (indexToDelete !== -1) {
      //   state.items.splice(indexToDelete, 1);
      // }
      const data = action.payload;
      const isPresent = state.items.some((card) => card.id === data.id);
      if (isPresent) {
        const foundObject = state.items.find((card) => card.id === data.id);
        foundObject.count = foundObject.count - 1;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItems, removeItems, clearCart, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
