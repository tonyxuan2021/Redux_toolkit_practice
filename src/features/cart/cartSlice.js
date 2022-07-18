import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log(cartSlice);

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default cartSlice.reducer;
