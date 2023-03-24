import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'Cart',
    initialState: {
        comics: [],
        count: 0,
        error: '',
    },
    reducers: {
        addCart(state, {payload}){
            return {...state, comics: [...state.comics, ...payload], count: state.count + 1}
        },
        removeCart(state, {payload}){
            for(var i= 0; i<state.comics.length; i++)
            {
                if(state.comics[i].title === payload[0].title){
                    return {...state, error: 'teste'}
                }
            }
        }
    }
});

export const {addCart, removeCart} = slice.actions;

export const selectCart = state => state.cart;

export default slice.reducer;