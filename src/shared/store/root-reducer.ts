import { combineReducers } from '@reduxjs/toolkit';

import cocktailsReducer from './cocktails-slice';

export const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
});
