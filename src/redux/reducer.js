import { TESTIMONALS } from '../shared/testimonals';
import { ABOUTITEMS } from '../shared/aboutitems';
export const initialState = {
    testimonals: TESTIMONALS,
    aboutitems: ABOUTITEMS
};

export const Reducer = (state = initialState, action) => {
    return state;
};