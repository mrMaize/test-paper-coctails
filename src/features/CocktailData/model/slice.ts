import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ECoctailCodes } from '@shared/index';
import { ICocktail } from '@shared/interfaces/cocktails.interfaces';

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
