import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Reducers/CartSlice";
// ROOT REDUCER
const Redux_store= configureStore({
  reducer: {
    cartReducer:CartSlice
  },
});

export default Redux_store;