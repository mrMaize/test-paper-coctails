import { useEffect, useState } from 'react';
import { get, ICocktail, ECoctailCodes } from '@shared/index';


interface IProps {
  cocktailCode?: ECoctailCodes;
}

interface IParams {
  onSuccess?: (data: ICocktail[]) => void;
  onError?: () => void;
  disabled?: boolean;
}

export const useRequestCocktailData = (
  { cocktailCode = ECoctailCodes.A1 }: IProps,
  params?: IParams
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<ICocktail[] | undefined>();

  useEffect(() => {
    if (!params?.disabled && !loading) {
      setData(undefined);
      setLoading(true);
    }
  }, [loading, params?.disabled]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const cocktailsData = await get<{ drinks: ICocktail[] }>(
          `/api/json/v1/1/search.php?s=${cocktailCode}`
        );

        setData(cocktailsData.drinks);
        setLoading(false);
        setError(null);

        params?.onSuccess?.(cocktailsData.drinks);
      } catch (error) {
        setError(error as Error);
        setLoading(false);

        params?.onError?.();
      }
    };

    if (!params?.disabled && loading) {
      loadData();
    }
  }, [params, cocktailCode, loading]);

  return {
    loading,
    data,
    error,
  };
};
