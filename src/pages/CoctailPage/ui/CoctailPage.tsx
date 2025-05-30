import { FC } from 'react';

import { CocktailCard } from '@widgets/CocktailCard/CocktailCard';
import { useCocktailData } from '@features/cocktails/hooks/useCocktailData';

import styles from './CoctailPage.module.scss';
import { ECoctailCodes } from '@shared/constants/coctails';
import { useParams } from 'react-router-dom';

export const CoctailPage: FC = () => {
  const { code } = useParams<{ code: ECoctailCodes }>();

  const {
    data: cocktailsData,
    loading,
    error,
  } = useCocktailData({
    cocktailCode: code,
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
