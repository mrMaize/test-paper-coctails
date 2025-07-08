import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { selectCocktailData } from '@features/CocktailData/index';
import { ECoctailCodes, START_COCKTAIL_NAME } from '@shared/constants/coctails';
import { ICocktail } from '@shared/interfaces/cocktails.interfaces';

import { setCocktailDataByCode } from '../model/slice';

import { useRequestCocktailData } from './useRequestCocktailData';

interface IProps {
  cocktailCode?: ECoctailCodes;
  onSuccess?: () => void;
  onError?: () => void;
}

export const useCocktailData = ({
  cocktailCode = START_COCKTAIL_NAME,
  onSuccess,
  onError,
}: IProps) => {
  const dispatch = useDispatch();
  const cachedCocktailData = useSelector(selectCocktailData(cocktailCode));

  const onSuccessFetchData = useCallback(
    (cocktailsData: ICocktail[]) => {
      dispatch(setCocktailDataByCode({ cocktailCode, cocktailsData }));
      onSuccess?.();
    },
    [cocktailCode, dispatch, onSuccess]
  );

  const {
    data: dataFromRequest,
    loading,
    error,
  } = useRequestCocktailData(
    { cocktailCode },
    {
      onSuccess: onSuccessFetchData,
      onError,
      disabled: Boolean(cachedCocktailData),
    }
  );

  const resultData = useMemo(
    () => cachedCocktailData || dataFromRequest,
    [cachedCocktailData, dataFromRequest]
  );

  return {
    data: resultData,
    loading,
    error,
  };
};
