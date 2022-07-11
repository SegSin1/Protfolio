import { createSlice } from '@reduxjs/toolkit'


const INITIAL_STATE = [
    {
        id: "a1",
        title: "MLX Floyd Black Satin",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Dean",
        model: "MLX Floyd Black Satin",
        description: "The brand new X- Series line offers all the quality features and aesthetics of High-end Deans, but at a price anyone can afford. The ML X features: a bolt on 22 fret maple neck with Indian Rosewood Fingerboard as well as white binding on the body, neck, and headstock. The DMT Designed High Output Zebra Pickups offer everything you need as a beginner or a seasoned pro. All of these features are finished off by a Floyd Rose FR20 Tremolo system and Satin black finish to provide the perfect blend of class and boldness.",
        color: "black",
        price: 2370,
        currency: "USD",
        availableQty: 1,
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqTKlrNr32RRjqdGKnFxPa8Cw2jmVVgZIPQ&usqp=CAU'],
        type: "sell",
        expiry: "2022-07-11T13:08:23.970Z",
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
        title: "Dimebag Lightning Bolt ML",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Dean",
        model: "Dimebag Lightning Bolt ML",
        description: "This guitar has a unique appearance in a unique size. Perfect for any Dimebag fan! It is in great condition but has had a pot replaced by a professional. This deal includes a coffin case that adds to the uniqueness of the guitar. Feel free to make an offer, send any questions in the messenger, or give us a call at 864-422-0072. We now offer Reverb's layaway and direct checkout!",
        color: "black",
        price: 1699,
        currency: "USD",
        availableQty: 2,
        images: ['data:image/jpeg;base64,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GlVGmoiuvgwB/ORHNOzrCvdqLNSbwHeT6Hl8jN1zwl6lRzvp+SPpdr2Oc18LUUHS1x4TWDAVSrVNB0LzO35czJhjOFMxw5uF9Kg6obm38J3/ADliY1jSegAE1HvBls4JFiBfl1+s1fJhdtMxXGrfdaxoiGFxLU2V0YowN1ZdiDOxcH8YpigKVWyVwOXsuB7S/pOQ43CFDYzyoVmUggkEG4IJBB8QRyM05OKPIv7KcfNLiePuj6TiQbgbi817Yet+9AOl+jgc7+DAfWTmeZODg6Z6vHNTVorERKlxERAEREAREQBERAEREAREQBERAEREAREQBERAEtJtuZdLHUEEHkRY/OAcE424qqY2qVU2w6MQij2rba28SengDL+z/wBGuIYuBqK2Qm2xv3rX62lub8GYvD12RaL1KeruMilwV6A25EcjebzLeCcdUAuiUl8XPe/0i/8AKdr7Oykzgufktqza5tTthyK5TUGLJpBt61gu5uTpO5kQr5gP3dNSzHoBcn5CdEwPZ9RFjXqvVI6X0r8Nt7fOSjAZTh6ItSpKnwAv9ecxjOMFWzaXHObvRxrA8GZjiDqNPQp9pzp+3OSvLey2iLHEVmc+6llX6m5/KdIiRLqJvWCY9NBbyanLOHcJQ/dUUU+9a7fU7zbREybb2bqKWisREgkREQBERAEREApMHHZXQrC1Smredt/kRvM+UhNrRDSeyAZ12c06l2o1WU9FfvL8iNx95Bc04Qx1C5akWUe2neH23H0neZSdEOpnHDyc8+lhLKwcV7P8vrNi6bBGCI2tmIIAsCPve1vOdrlAJWZ8vL5JXRfh4vGquysREzNhERAEREAREQBERAEREAREQBERAEREAREQBERAEREApErEAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//2Q=='],
        type: "sell",
        expiry: "2022-08-27T06:31:23.970Z",
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
        model: "Les Paul",
        description: "Gibson Custom Shop's 1959 Les Paul Standard Reissue is not just a tribute to the priceless original models -- it's a clone of them. From laser-scanned dimensions to chemically-recreated plastics to colour-matched shades of sunburst, every element has been rendered in unbelievable detail. It represents the culmination of decades of work by Custom Shop's expert team -- a tireless quest to bring accuracy and authenticity to the hands of fans. Its the definition of cool, and it's the best representation of the 1959 Les Paul Standard since the Gibson Custom Shop began making Historic Reissues over twenty-five years ago.",
        color: "black",
        price: 7699,
        currency: "USD",
        availableQty: 1,
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-IE6BSrnLvA-tqlspEam8HdCn80JviCaJg&usqp=CAU'],
        type: "sell",
        expiry: "2022-09-27T06:31:23.970Z",
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
        title: "Fender Custom Shop Road Worn",
        mainCategory: "Musical Instruments",
        secondayCategory: "Electric Guitars",
        brand: "Gibson",
        model: "Les Paul",
        description: "Fender Road Worn is back! Those of us who love vintage instruments can’t help but have a special place for the ones that wear their licks and lumps with pride, boldly brandishing the tarnish of time as a catalog of a life hard-lived and shows hard-played. We teamed up with our friends in the UK, Andertons Music Co., to create just such a guitar. The CME Exclusive Fender Road Worn 1960s Stratocaster is the spitting image of the real thing, outfitted with period-correct components, USA-made Pure Vintage ‘59 Strat pickups, and CME Exclusive finishes like Vintage White, Daphne Blue, and Candy Apple Red, each pulled from the pages of history and made to look as broken in as they feel.",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 55,
        images: ['https://ichef.bbci.co.uk/news/976/cpsprodpb/7593/production/_106199003_gettyimages-991321438.jpg'],
        type: "sell",
        expiry: "2022-06-30T06:31:23.970Z",
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
        model: "Les Paul",
        description: "Best Guitar Ever 5",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 3,
        images: ['data:image/jpeg;base64,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'],
        type: "auction",
        expiry: "2022-07-15T13:08:23.970Z",
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
        model: "Les Paul",
        description: "Best Guitar Ever 6",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 2,
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGP1z1hGDuwrDp06LiDzPbrlvlJOgjwm3tBwRtgIwugPCtU7oSbrKuimGjdXJuOCeTyos&usqp=CAU'],

        type: "auction",
        expiry: "2022-06-29T06:31:23.970Z",
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
        model: "Les Paul",
        description: "Best Guitar Ever 7",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 2,
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCS_4bxHljWB6QAme7nwdZYSuiY8Naj5OPNg&usqp=CAU'],
        type: "auction",
        expiry: "2022-10-27T06:31:23.970Z",
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
        model: "Les Paul",
        description: "Best Guitar Ever 8",
        color: "black",
        price: 3499,
        currency: "USD",
        availableQty: 2,
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fMv8OUxgkjZ9XQx_WfUDrvF4WYSd8GmCKw&usqp=CAU'],
        type: "auction",
        expiry: "2022-11-27T06:31:23.970Z",
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
        },
        returnDeletedCartProducts(state, action) {
            const existingItem = state.find(el => el.id === action.payload.id)
            if (existingItem !== undefined)
                state = [...state, existingItem.availableQty+=action.payload.cartQty]
            else
                state = [...state, action.payload]
        }
    }
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
