import { configureStore } from "@reduxjs/toolkit/dist";
import cartSliceReducer from "./slices/cart-slice";
import productsSliceReducer from "./slices/products-slice";

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        products:productsSliceReducer
    }
})

export default store;