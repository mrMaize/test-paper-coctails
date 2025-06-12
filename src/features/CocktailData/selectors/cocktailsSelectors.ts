import { createSelector } from '@reduxjs/toolkit';
import { ECoctailCodes } from '@shared/constants/coctails';
import { IProfileState } from '../model/slice';

const selectCoctails = (state: IProfileState) => state;

export const selectCocktailData = (cocktailCode: ECoctailCodes) =>
  createSelector(selectCoctails, (cocktails) => cocktails[cocktailCode]);
