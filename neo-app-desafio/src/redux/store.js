import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageSlice'
import cartReducer from './cartSlice'

export default configureStore({
    reducer: {
        page: pageReducer,
        cart: cartReducer
    }
})