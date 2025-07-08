import { FC } from 'react';
import { ICocktail } from '@shared/interfaces/cocktails.interfaces';
import { CoctailIngridientsAndMeasures } from '@widgets/CocktailIngridients/CoctailIngridientsAndMeasures';

import styles from './CocktailCard.module.scss';

interface IProps {
  cocktailInfo: ICocktail;
}

export const CocktailCard: FC<IProps> = ({ cocktailInfo }) => {
  return (
    <div className={styles.cocktailCardWrapper}>
      <div className={styles.cocktailTextInfo}>
        <div className={styles.title}>
          <h1>{cocktailInfo.strDrink}</h1>
        </div>

        <div className={styles.commonInfo}>
          <div>{cocktailInfo.strCategory}</div>
          <div>{cocktailInfo.strAlcoholic}</div>
          <div>{cocktailInfo.strGlass}</div>
        </div>

        <div className={styles.instructions}>
          <span>Instructions:</span>
          <div>{cocktailInfo.strInstructions}</div>
        </div>

        <div className={styles.ingridiends}>
          <span>Ingridients:</span>
          <CoctailIngridientsAndMeasures cocktailInfo={cocktailInfo} />
        </div>
      </div>

      <div className={styles.cocktailLogo}>
        <img loading="lazy" src={cocktailInfo.strDrinkThumb} />
      </div>
    </div>
  );
};
