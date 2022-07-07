import { createSlice } from '@reduxjs/toolkit'


const INITIAL_STATE = [
    {
        id: "a1",
        title: "Les Paul 59 Reissue",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        modal: "Les Paul",
        description: "Best Guitar Ever 1",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 1,
        images: [],
        type: "sell",
        expiry : "2022-07-05T18:08:23.970Z",
        offersEnabled: true,
        seller: {
            sellerUid: 'b1',
            sellerAlias: 'Yohoho',
            sellerShopEmail: 'YohohoShop@gmail.com',
            sellerRank: '4.1',
            personalMessagesEnabled: false,
        }
    },
    {
        id: "a2",
        title: "Les Paul 59 Reissue",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        modal: "Les Paul",
        description: "Best Guitar Ever 2",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 2,
        images: [],
        type: "sell",
        expiry : "2022-08-27T06:31:23.970Z",
        offersEnabled: true,
        seller: {
            sellerUid: 'b1',
            sellerAlias: 'Yohoho',
            sellerShopEmail: 'YohohoShop@gmail.com',
            sellerRank: '4.1',
            personalMessagesEnabled: false,
        }
    },
    {
        id: "a3",
        title: "Les Paul 59 Reissue",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        modal: "Les Paul",
        description: "Best Guitar Ever 3",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 21,
        images: [],
        type: "sell",
        expiry : "2022-09-27T06:31:23.970Z",
        offersEnabled: true,
        seller: {
            sellerUid: 'b1',
            sellerAlias: 'Yohoho',
            sellerShopEmail: 'YohohoShop@gmail.com',
            sellerRank: '4.1',
            personalMessagesEnabled: false,
        }
    },
    {
        id: "a4",
        title: "Les Paul 59 Reissue",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        modal: "Les Paul",
        description: "Best Guitar Ever 4",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 55,
        images: [],
        type: "sell",
        expiry : "2022-06-30T06:31:23.970Z",
        offersEnabled: true,
        seller: {
            sellerUid: 'b2',
            sellerAlias: 'Yohoho',
            sellerShopEmail: 'YohohoShop@gmail.com',
            sellerRank: '4.1',
            personalMessagesEnabled: false,
        }
    },
    {
        id: "a5",
        title: "Les Paul 59 Reissue",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        modal: "Les Paul",
        description: "Best Guitar Ever 5",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 3,
        images: [],
        type: "auction",
        expiry : "2022-07-07T06:31:23.970Z",
        offersEnabled: true,
        seller: {
            sellerUid: 'b1',
            sellerAlias: 'Yohoho',
            sellerShopEmail: 'YohohoShop@gmail.com',
            sellerRank: '4.1',
            personalMessagesEnabled: false,
        }
    },
    {
        id: "a6",
        title: "Les Paul 59 Reissue",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        modal: "Les Paul",
        description: "Best Guitar Ever 6",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 2,
        images: [],
        type: "auction",
        expiry : "2022-06-29T06:31:23.970Z",
        offersEnabled: true,
        seller: {
            sellerUid: 'b2',
            sellerAlias: 'Yohoho',
            sellerShopEmail: 'YohohoShop@gmail.com',
            sellerRank: '4.1',
            personalMessagesEnabled: false,
        }
    },
    {
        id: "a7",
        title: "Les Paul 59 Reissue",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        modal: "Les Paul",
        description: "Best Guitar Ever 7",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 2,
        images: [],
        type: "auction",
        expiry : "2022-10-27T06:31:23.970Z",
        offersEnabled: true,
        seller: {
            sellerUid: 'b1',
            sellerAlias: 'Yohoho',
            sellerShopEmail: 'YohohoShop@gmail.com',
            sellerRank: '4.1',
            personalMessagesEnabled: false,
        }
    },
    {
        id: "a8",
        title: "Les Paul 59 Reissue",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        modal: "Les Paul",
        description: "Best Guitar Ever 8",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 2,
        images: [],
        type: "auction",
        expiry : "2022-11-27T06:31:23.970Z",
        offersEnabled: true,
        seller: {
            sellerUid: 'b2',
            sellerAlias: 'Yohoho',
            sellerShopEmail: 'YohohoShop@gmail.com',
            sellerRank: '4.1',
            personalMessagesEnabled: false,
        }
    }
];


const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        addProduct(state, action) {
            const existingItem = state.find(el => el.id === action.payload.id)
            if (existingItem !== undefined)
                state = [...state, existingItem.availableQty++]
            else
                state = [...state, action.payload]
        },
        removeProduct(state, action) {
            const existingItem = state.find(el => el.id === action.payload.id)
            if (existingItem.availableQty > 0)
                state = [...state, existingItem.availableQty--]
        },
        updateProduct(state, action) {
            const itemIndex = state.findIndex(el => el.id === action.payload.id)
            state[itemIndex] = action.payload
        },
        deleteProduct(state, action) {
            state = state.filter(el => el.id === action.payload.id)
        }
    }
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
