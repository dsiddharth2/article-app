/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { LOAD_ARTICLES } from './constants';

 // The initial state of the App
export const initialState = {
    loading: false,
    error: false,
    articles: [],
};

function rootReducer(state = initialState, action) {

    switch(action.type) {
        case LOAD_ARTICLES:
            return Object.assign({}, state, {
                articles: [],
                loading: true
            });
        default :
            return state;
    }
};

export default rootReducer;