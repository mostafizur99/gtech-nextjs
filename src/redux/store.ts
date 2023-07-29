import { configureStore } from "@reduxjs/toolkit";
import builderSlice from "./features/builderSlice";

export const store = configureStore({
  reducer: {
    products: builderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
