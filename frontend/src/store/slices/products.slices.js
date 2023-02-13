import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: "variable global",
  reducers: {
    setProductGlobal: (state, action) => action.payload,
  },
});

export const { setProductGlobal } = productSlice.actions;

export default productSlice.reducer;
