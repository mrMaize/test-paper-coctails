import { createSelector } from '@reduxjs/toolkit';

import { TRootState } from '../store/store';
import { TCoctailCodeType } from '@shared/constants/coctails';

const selectCoctails = (state: TRootState) => state.cocktails;

export const selectCocktailData = (cocktailCode: TCoctailCodeType) =>
  createSelector(selectCoctails, (cocktails) => cocktails[cocktailCode]);
