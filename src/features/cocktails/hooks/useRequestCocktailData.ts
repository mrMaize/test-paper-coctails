import { useEffect, useState } from 'react';

import { ICocktail } from '../../../shared/interfaces/coctails.interfaces';
import { get } from '../../../shared/api/apiMethods';

interface IProps {
  cocktailCode?: string;
}

interface IParams {
  onSuccess?: () => void;
  onError?: () => void;
}

export const useRequestCocktailData = (
  { cocktailCode }: IProps,
  { onSuccess, onError }: IParams
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Array<ICocktail>>([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setData([]);

      try {
        const cocktailsData = await get<{ drinks: ICocktail[] }>(
          `/api/json/v1/1/search.php?s=${cocktailCode}`
        );

        setData(cocktailsData.drinks);
        setLoading(false);
        setError(null);

        onSuccess?.();
      } catch (error) {
        setError(error as Error);
        setLoading(false);

        onError?.();
      }
    };

    loadData();
  }, [cocktailCode, onError, onSuccess]);

  return {
    loading,
    data,
    error,
  };
};
