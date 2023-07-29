import { IProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IProductBuild {
  products: IProduct[];
}

const initialState: IProductBuild = {
  products: [],
};

export const builderSlice = createSlice({
  name: "productBuild",
  initialState,
  reducers: {
    addToBuild: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!existing) {
        state.products.push({ ...action.payload });
      }
    },
  },
});

export const { addToBuild } = builderSlice.actions;

export default builderSlice.reducer;
