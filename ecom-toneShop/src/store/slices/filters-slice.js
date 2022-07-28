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
    { title: 'Folk Instruments', count: '0' },
    { title: 'Bands & Ocahestra', count: '0' },
    { title: 'Software', count: '0' },
    { title: 'Other', count: '0' }
]

const INSTRUMENT_OPTIONS = [
    { title: 'All', category: 'All' },
    { title: 'Electric Guitars', count: '0', category: 'Guitars', options: [] },
    { title: 'Acoustic Guitars', count: '0', category: 'Guitars', options: [] },
    { title: 'Classic Guitars', count: '0', category: 'Guitars', options: [] },
    { title: 'Bass Guitars', count: '0', category: 'Guitars', options: [] },
    { title: 'Tube Amp', count: '0', category: 'Amplifiers', options: [] },
    { title: 'Solid State Amp', count: '0', category: 'Amplifiers', options: [] },
    { title: 'Modeling Amp', count: '0', category: 'Amplifiers', options: [] },
    { title: 'Acoustic Drums', count: '0', category: 'Drums & Percussions', options: [] },
    { title: 'Electronic Drums', count: '0', category: 'Drums & Percussions', options: [] },
    { title: 'Cymbals', count: '0', category: 'Drums & Percussions', options: [] },
    { title: 'Drum Parts & Accessories', count: '0', category: 'Drums & Percussions', options: [] },
    { title: 'Orchastra Percussion', count: '0', category: 'Drums & Percussions', options: [] }
]

const CONDITION_OPTIONS = [
    { title: 'All', category: 'All' },
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
    { title: 'Fender', category: 'Guitars' },
    { title: 'Gibson', category: 'Guitars' },
    { title: 'Epiphone', category: 'Guitars' },
    { title: 'ESP', category: 'Guitars' },
    { title: 'PRS', category: 'Guitars' },
    { title: 'Ibanez', category: 'Guitars' },
    { title: 'Martin', category: 'Guitars' },
    { title: 'Squire', category: 'Guitars' },
    { title: 'Taylor', category: 'Guitars' },
    { title: 'Gretsh', category: 'Guitars' },
    { title: 'Jackson', category: 'Guitars' },
    { title: 'Charvel', category: 'Guitars' }
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
            if (action.payload.val.toLowerCase() === 'all') {
                if (action.payload.type.toLowerCase() === 'category') {
                    state.category = INITIAL_STATE.category
                    state.instrument = INITIAL_STATE.instrument
                    state.brand = INITIAL_STATE.brand
                    state.model = INITIAL_STATE.model
                } else
                    state[action.payload.type.toLowerCase()] = INITIAL_STATE[action.payload.type.toLowerCase()]
            }
            else if (action.payload.type.toLowerCase() === 'category') {
                state.category.val = action.payload.val
                state.instrument = INITIAL_STATE.instrument
                state.brand = INITIAL_STATE.brand
                state.model = INITIAL_STATE.model
            }
            else
                state[action.payload.type.toLowerCase()].val = action.payload.val
        }
    }
}
)

export const filtersSliceActions = filtersSlice.actions;
export const filtersState = state=>state.filters;
export default filtersSlice.reducer;