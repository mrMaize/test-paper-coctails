import { FC, useCallback } from 'react';

import { CocktailCard } from '../../widgets/cocktails/CocktailCard/CocktailCard';
import { useCocktailData } from '../../features/cocktails/hooks/useCocktailData';

import styles from './CoctailPage.module.scss';

interface IProps {
  cocktailCode?: string;
}

export const CoctailPage: FC<IProps> = ({ cocktailCode }) => {
  const onSuccessLoadCocktailsData = useCallback(() => {
    console.log('cocktails successfully loaded.');
  }, []);

  const onErrorLoadCocktailsData = useCallback(() => {
    console.log('error while loading cocktails.');
  }, []);

  const {
    data: cocktailsData,
    loading,
    error,
  } = useCocktailData({
    cocktailCode,
    onSuccess: onSuccessLoadCocktailsData,
    onError: onErrorLoadCocktailsData,
  });

  if (loading) {
    return <div>Загрузка данных по выбранному коктейлю</div>;
  }

  if (error) {
    return <div>Ошибка загрузки данных по выбранному коктейлю</div>;
  }

  return (
    <div className={styles.wrapper}>
      {cocktailsData?.map((coctailInfo) => (
        <CocktailCard key={coctailInfo.idDrink} cocktailInfo={coctailInfo} />
      ))}
    </div>
  );
};
