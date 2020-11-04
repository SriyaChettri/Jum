import {createStore,combineReducers} from 'redux';
import { Aboutitems} from './aboutitems';
import { Testimonals } from './testimonals';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
          aboutitems :Aboutitems,
            testimonals:Testimonals
        })
    );

    return store;
}