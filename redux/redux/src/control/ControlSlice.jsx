import { createSlice } from "@reduxjs/toolkit";
import datas from "../components/Datas";

const initialState = {
  cardItems: datas,
  quantity: 5,
  total: 0,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id != itemId);
    },
    increaseItem: (state, action) => {
      const item = state.cardItems.find((item) => item.id == action.payload);
      item.quantity += 1;
    },
    decreaseItem: (state, action) => {
      const item = state.cardItems.find((item) => item.id == action.payload);
      {
        item.quantity > 0 ? (item.quantity -= 1) : item.quantity == 0;
      }
    },
    calculateTotal: (state) => {
      let count = 0;
      let quantity = 0;
      state.cardItems.map((item) => {
        count += item.price * item.quantity;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = count;
    },
  },
});

export default cartReducer.reducer;
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotal,
} = cartReducer.actions;
