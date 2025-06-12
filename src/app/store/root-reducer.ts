import { combineReducers } from '@reduxjs/toolkit';
import cocktailsReducer from '@features/CocktailData/model/slice';

export const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
});
