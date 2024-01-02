import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: [],
  },
  reducers: {
    updateTotal: (state, action) => {
      state.total = state.total + action.payload;
    },
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
      const itemIdToDelete = action.payload;

      // Find the index of the item to be deleted
      const indexToDelete = state.items.findIndex(
        (card) => card.card.info.id === itemIdToDelete,
      );

      if (indexToDelete !== -1) {
        const itemToDelete = state.items[indexToDelete];

        // Decrement the count by 1
        itemToDelete.count = itemToDelete.count - 1;

        // Remove the item if the count is 0
        // if (itemToDelete.count === 0) {
        //   state.items.splice(indexToDelete, 1);
        // }
      }
    },
    deleteFromCart: (state, action) => {
      const itemIdToDelete = action.payload;

      // Find the index of the item to be deleted
      const indexToDelete = state.items.findIndex(
        (card) => card.card.info.id === itemIdToDelete,
      );

      if (indexToDelete !== -1) {
        const itemToDelete = state.items[indexToDelete];
        if (itemToDelete.count === 0) {
          state.items.splice(indexToDelete, 1);
        }
      }
    },
  },
});

export const {
  addItems,
  removeItems,
  updateTotal,
  deleteFromCart,
  clearCart,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
