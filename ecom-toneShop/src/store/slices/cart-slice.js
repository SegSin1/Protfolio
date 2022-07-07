import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    totalAmount: 0,
    items: [],
    totalQty: 0,
    showCart: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            let item ={...action.payload}
            let existingItem = state.items.find(el => el.id === item.id);
            if (existingItem)
                state.items = [...state.items, existingItem.cartQty++]
            else{
                item.cartQty=1;
                state.items.push(item)
            }
            state.totalQty++;
        },
        removeItemFromCart(state, action) {
            let item = {...action.payload}
            let existingItem = state.items.find(el => el.id === item.id);
            if (existingItem.cartQty === 1)
                state.items = state.items.filter(el => el.id === item.id)
            else
                state.items = [...state.items, ...existingItem.cartQty--]
            if (state.totalQty > 0)
                state.totalQty--;
        },
        toggleCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;