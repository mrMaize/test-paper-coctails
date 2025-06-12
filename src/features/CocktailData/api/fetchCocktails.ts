
import { get } from '@shared/index';
import { ICocktail } from '../model/types';

export const fetchCocktails = () => {
  return get<ICocktail[]>('/cocktails');
};