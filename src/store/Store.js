import { configureStore } from "@reduxjs/toolkit";

import addCart from "./Features/cart";

export default configureStore({
  reducer: {
    cart: addCart, 
  },
});
