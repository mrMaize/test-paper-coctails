import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICocktail } from '../interfaces/coctails.interfaces';
import { TCoctailCodeType } from '@shared/constants/coctails';

interface IProfileState {
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
      }: PayloadAction<{ cocktailCode: TCoctailCodeType; cocktailsData: ICocktail[] }>
    ) => {
      state[cocktailCode] = cocktailsData;
    },
  },
});

export const { setCocktailDataByCode } = cocktailsReducer.actions;
export default cocktailsReducer.reducer;
