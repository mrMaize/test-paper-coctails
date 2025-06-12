
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


import { ECoctailCodes } from '@shared/constants/coctails';
import { ICocktail } from './types';

export interface IProfileState {
  [x: string]: ICocktail[] | undefined;
}

const initialState: IProfileState = {};

const cocktailsReducer = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    setCocktailDataByCode: (
      state,
      {
        payload: { cocktailCode, cocktailsData },
      }: PayloadAction<{ cocktailCode: ECoctailCodes; cocktailsData: ICocktail[] }>
    ) => {
      state[cocktailCode] = cocktailsData;
    },
  },
});

export const { setCocktailDataByCode } = cocktailsReducer.actions;
export default cocktailsReducer.reducer;
