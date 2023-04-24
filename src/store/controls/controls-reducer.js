import { SET_SEARCH, SET_REGION, CLEAR_CONTROLS } from "./controls-actions";

const inititalState = {
    search: '',
    region: '',

}

export const controlsReducer = (state = inititalState, {type, payload}) => {
    switch (type) {
        case SET_SEARCH:
            return {
                ...state, 
                search: payload,
            }
        case SET_REGION: 
            return {
                ...state, 
                region: payload,
            }
        case CLEAR_CONTROLS: 
            return inititalState;
            
        default:
            return state;
    }
}