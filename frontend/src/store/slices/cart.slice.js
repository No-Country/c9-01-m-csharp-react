import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartGlobal: (state, action) => {
      const index = state.findIndex((prod) => prod.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { setCartGlobal } = cartSlice.actions;

export default cartSlice.reducer;
