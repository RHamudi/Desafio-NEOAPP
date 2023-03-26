import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const slice = createSlice({
    name: 'Cart',
    initialState: {
        comics: [],
        count: 0,
        error: '',
    },
    reducers: {
        addCart(state, {payload}){
            console.log()
            if(state.comics.length > 0){
                for(var i= 0; i<state.comics.length; i++){
                    if(state.comics[i].id === payload[i].id){
                        return {...state}
                    } 
            }
            } else {
                toast.success("Produto adicionado com sucesso");
                return {...state, comics: [...state.comics, ...payload], count: state.count + 1}
            }
        },
        removeCart(state, {payload}){
            for(var i= 0; i<state.comics.length; i++)
            {
                if(state.comics[i].id === payload.id){
                    return {...state, comics: [...state.comics].filter(item => item.id !== payload.id), count: state.count - 1}
                }
            }
        }
    }
});

export const {addCart, removeCart} = slice.actions;

export const selectCart = state => state.cart;

export default slice.reducer;