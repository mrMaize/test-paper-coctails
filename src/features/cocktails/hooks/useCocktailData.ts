import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';

import { selectCocktailData } from '@shared/selectors/cocktailsSelectors';
import { ICocktail } from '@shared/interfaces/coctails.interfaces';
import { setCocktailDataByCode } from '@shared/store/cocktails-slice';

import { useRequestCocktailData } from './useRequestCocktailData';
import { ECoctailCodes } from '@shared/constants/coctails';

interface IProps {
  cocktailCode?: ECoctailCodes;
  onSuccess?: () => void;
  onError?: () => void;
}

export const useCocktailData = ({
  cocktailCode,
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
