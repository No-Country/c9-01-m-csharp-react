import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: "hola espero funcione",
  reducers: {
    setProductGlobal: (state, action) => action.payload,
  },
});

export const { setProductGlobal } = productSlice.actions;

export default productSlice.reducer;
