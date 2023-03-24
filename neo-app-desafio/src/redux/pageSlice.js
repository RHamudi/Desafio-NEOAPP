import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'Page',
    initialState: {
        page: 1,
        offset: 0,
    },
    reducers: {
        proxPage(state){
            return {...state, page: state.page + 1, offset: state.offset + 10}
        },
        prevPage(state){
            if(state.page === 0 || state.page === 1){
                return {...state, page: 1, offset: 0}
            } else {
                return {...state, page: state.page -1, offset: state.offset - 10}
            }
        }
    }
})

export const { proxPage, prevPage } = slice.actions

export const selectPage = state => state.page

export default slice.reducer