import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';

import { selectCocktailData } from '@features/CocktailData/selectors/cocktailsSelectors';

import { useRequestCocktailData } from './useRequestCocktailData';
import { ECoctailCodes } from '@shared/constants/coctails';
import { setCocktailDataByCode } from '../model/slice';
import { ICocktail } from '../model/types';

interface IProps {
  cocktailCode?: ECoctailCodes;
  onSuccess?: () => void;
  onError?: () => void;
}

export const useCocktailData = ({
  // todo: check the `code` below
  cocktailCode = ECoctailCodes.A1,
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
