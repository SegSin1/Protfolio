import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchValue: ''
    },
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload
        }
    }
})

export const searchActions = searchSlice.actions;
export const searchState = state => state.search;
export default searchSlice.reducer;