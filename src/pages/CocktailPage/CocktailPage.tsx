import { FC } from 'react';
import styles from './CoctailPage.module.scss';
import { ECoctailCodes } from '@shared/constants/coctails';
import { useParams } from 'react-router-dom';
import { useCocktailData } from '@features/CocktailData';
import { CocktailCard } from '@widgets/index';

const CoctailPage: FC = () => {
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
      {cocktailsData?.map((cocktailInfo) => (
        <CocktailCard key={cocktailInfo.idDrink} cocktailInfo={cocktailInfo} />
      ))}
    </div>
  );
};

export default CoctailPage;