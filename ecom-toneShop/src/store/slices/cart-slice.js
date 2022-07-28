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
            let item = { ...action.payload }
            let existingItem = state.items.find(el => el.id === item.id);
            if (existingItem) {
                if (existingItem.availableQty <= 0)
                    return;
                existingItem.cartQty++
                existingItem.availableQty--;
                state.totalAmount += existingItem.price;
            }
            else {
                state.totalAmount += item.price
                item.cartQty = 1;
                item.availableQty--;
                state.items.push(item)
            }
            state.totalQty++;
        },
        removeItemFromCart(state, action) {
            let item = { ...action.payload }
            let existingItem = state.items.find(el => el.id === item.id);
            existingItem.availableQty++;
            state.totalAmount -= item.price;
            if (existingItem.cartQty === 1)
                state.items = state.items.filter(el => el.id !== item.id)
            else {
                existingItem.cartQty--
            }
            if (state.totalQty > 0)
                state.totalQty--;
        },
        deleteItemsFromCart(state, action) {
            let item = { ...action.payload }
            let existingItem = state.items.find(el => el.id === item.id);
            state.totalAmount -= existingItem.cartQty * existingItem.price;
            state.totalQty -= existingItem.cartQty;
            existingItem.availableQty += existingItem.cartQty;
            console.log(JSON.stringify(existingItem, undefined, 2));
            state.items = state.items.filter(el => el.id !== item.id)
        },
        toggleCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const cartActions = cartSlice.actions;
export const cartState = (state)=>state.cart;
export default cartSlice.reducer;