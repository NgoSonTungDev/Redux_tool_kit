import { IProduct } from "./../../type/product";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  DataProducts: {
    data: IProduct[];
    total: number;
  };
}

const initialState: IState = {
  DataProducts: {
    data: [],
    total: 0,
  },
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addDataProduct: (state, { payload }) => {
      state.DataProducts.data = [...state.DataProducts.data, payload];
    },
  },
});

export const { addDataProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
