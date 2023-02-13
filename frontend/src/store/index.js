import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slices";
export default configureStore({
  reducer: {
    products,
  },
});
