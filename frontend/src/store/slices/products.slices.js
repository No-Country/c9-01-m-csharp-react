import { createSlice } from "@reduxjs/toolkit";
import arteYdisenio from "../../DB/arteYdisenio";

const productSlice = createSlice({
  name: "products",
  initialState: arteYdisenio,
  reducers: {
    setProductGlobal: (state, action) => action.payload,
  },
});

export const { setProductGlobal } = productSlice.actions;

export default productSlice.reducer;
