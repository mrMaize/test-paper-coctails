
import { combineReducers } from '@reduxjs/toolkit';
import {coctailSlice} from '@features/CocktailData/index';


export const rootReducer = combineReducers({
  cocktails: coctailSlice,
});
