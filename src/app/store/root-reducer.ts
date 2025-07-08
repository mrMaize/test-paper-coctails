import { CoctailSliceReducer } from '@features/CocktailData';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  cocktails: CoctailSliceReducer,
});
