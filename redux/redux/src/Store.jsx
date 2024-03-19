import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/ControlSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    //payment : paymentReducer
  },
});
