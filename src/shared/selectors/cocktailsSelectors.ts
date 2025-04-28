import { createSelector } from '@reduxjs/toolkit';

import { TRootState } from '../store/store';

const selectCoctails = (state: TRootState) => state.cocktails;

export const selectCocktailData = (cocktailCode: string) =>
  createSelector(selectCoctails, (cocktails) => cocktails[cocktailCode]);
