import { createSlice } from '@reduxjs/toolkit'

const CATEGOTY_OPTIONS = [
    { title: 'All', count: '0' },
    { title: 'Guitars', count: '0' },
    { title: 'Amplifiers', count: '0' },
    { title: 'Profilers & Modulers', count: '0' },
    { title: 'Pedals', count: '0' },
    { title: 'Guitar Parts & Accessories', count: '0' },
    { title: 'Recording Gear', count: '0' },
    { title: 'Drums & Percussions', count: '0' },
    { title: 'Other', count: '0' }
]

const INSTRUMENT_OPTIONS = [
    { title: 'Electric Guitars', count: '0' },
    { title: 'Acoustic Guitars', count: '0' },
    { title: 'Bass Guitars', count: '0' },
    { title: 'Guitar Parts & Accessories', count: '0' },
    { title: 'Other', count: '0' }
]

const CONDITION_OPTIONS = [
    { title: 'Brand New', count: '0' },
    { title: 'Open box', count: '0' },
    { title: 'B-Stock', count: '0' },
    { title: 'Used-Mint', count: '0' },
    { title: 'Used-Excellent', count: '0' },
    { title: 'Used-Very Good', count: '0' },
    { title: 'Used-Good', count: '0' },
    { title: 'Used-Poor', count: '0' },
    { title: 'For Parts', count: '0' }
]

const BRAND_OPTIONS = [
    { title: 'Fender', relatedCategory: 'Guitars' },
    { title: 'Gibson', relatedCategory: 'Guitars' },
    { title: 'Epiphone', relatedCategory: 'Guitars' },
    { title: 'ESP', relatedCategory: 'Guitars' },
    { title: 'PRS', relatedCategory: 'Guitars' },
    { title: 'Ibanez', relatedCategory: 'Guitars' },
    { title: 'Martin' },
    { title: 'Squire' },
    { title: 'Taylor' },
    { title: 'Gretsh' },
    { title: 'Jackson' },
    { title: 'Charvel' }
]

const MODEL_OPTIONS = [
    { title: 'Startocaster', relatedCategory: 'Guitars', brand: 'Fender' },
    { title: 'Telecaster', relatedCategory: 'Guitars', brand: 'Fender' },
    { title: 'Jazzmaster', relatedCategory: 'Guitars', brand: 'Fender' },
    { title: 'Jaguar', relatedCategory: 'Guitars', brand: 'Fender' },
    { title: 'Mustang', relatedCategory: 'Guitars', brand: 'Fender' },
    { title: 'Jazzmaster', relatedCategory: 'Guitars', brand: 'Fender' },
    { title: 'ESP', relatedCategory: 'Guitars' },
    { title: 'PRS', relatedCategory: 'Guitars' },
    { title: 'Ibanez', relatedCategory: 'Guitars' }
]

const INITIAL_STATE = {
    category: { title: 'Category', val: '', options: CATEGOTY_OPTIONS },
    instrument: { title: 'Instrument', val: '', options: INSTRUMENT_OPTIONS },
    condition: { title: 'Condition', val: '', options: CONDITION_OPTIONS },
    brand: { title: 'Brand', val: '', options: BRAND_OPTIONS },
    model: { title: 'Model', val: '', options: MODEL_OPTIONS },
    price: { title: 'Price', val: { min: 0, max: 0 } },
    location: { title: 'Item Location', val: '', options: INSTRUMENT_OPTIONS },
}


const filtersSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,
    reducers: {
        setActiveFilter(state, action) {
            if (action.payload.type.toLowerCase() === 'category' && action.payload.val.toLowerCase() === 'all')
                return INITIAL_STATE;
            else
                state[action.payload.type.toLowerCase()].val = action.payload.val
        }
    },
    setFilter(state, action) {
        switch (action.payload.type) {
            case 'all categories': state = INITIAL_STATE;
                break;
            case 'category': state.category.val = action.payload.category;
                break;
            case 'instrument': state.instrument.val = action.payload.instrument;
                break;
            case 'condition': state.condition.val = action.payload.condition;
                break;
            case 'brand': state.brand.val = action.payload.brand;
                break;
            case 'model': state.model.val = action.payload.model;
                break;
            case 'price': state.price.val = { max: action.payload.price.max, min: action.payload.price.min };
                break;
            case 'location': state.location.val = action.payload.location;
                break;
            default: state.category.val = ''
        }
    }
}
)

export const filtersSliceActions = filtersSlice.actions;
export default filtersSlice.reducer;