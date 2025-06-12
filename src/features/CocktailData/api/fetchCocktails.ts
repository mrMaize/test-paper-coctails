
import { get } from '@shared/index';
import { ICocktail } from '@shared/interfaces/cocktails.interfaces';


export const fetchCocktails = () => {
  return get<ICocktail[]>('/cocktails');
};