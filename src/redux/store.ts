import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./product/productSlide";

export const Store = configureStore({
  reducer: {
    dataProduct: ProductReducer,
  },
});
