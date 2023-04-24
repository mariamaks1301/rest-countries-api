import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-actions";

const inititalState = {
    status: 'idle',    // loading | recieved | error
    error: null,
    list: [],
}

export const  countriesReducer = (state = inititalState, {type, payload}) => {
    switch (type) {
        case SET_LOADING: 
            return {
                ...state,
                status: 'loading',
                error: null,
            }
        
        case SET_ERROR: 
            return {
                ...state,
                status: 'rejected',
                error: payload,
            }
        case SET_COUNTRIES: 
            return {
                ...state,
                status: 'received',
                list: payload
            }

        default: {
            return state;
        }
            
    }
}