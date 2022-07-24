import { configureStore } from "@reduxjs/toolkit/dist";
import cartSliceReducer from "./slices/cart-slice";
import productsSliceReducer from "./slices/products-slice";
import searchSliceReducer from "./slices/search-slice";
import filtersSliceReducer from "./slices/filters-slice";

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        products:productsSliceReducer,
        search:searchSliceReducer,
        filters:filtersSliceReducer
    }
})

export default store;