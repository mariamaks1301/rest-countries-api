import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries-reducrs";
import { controlsReducer } from "./controls/controls-reducer";
import { detailsReducer } from "./details/details-reducr";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer, 
    controls:  controlsReducer,
    details: detailsReducer,
});