import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
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
