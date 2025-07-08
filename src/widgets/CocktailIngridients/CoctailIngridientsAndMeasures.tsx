import { FC, useMemo } from 'react';
import { ICocktail } from '@shared/interfaces/cocktails.interfaces';

import styles from './CoctailIngridientsAndMeasures.module.scss';

interface IProps {
  cocktailInfo: ICocktail;
}

const isKeyAnIngridientKey = (key: string): key is keyof ICocktail =>
  /^strIngredient\d+$/.test(key);

const isKeyAMeasureKey = (key: string): key is keyof ICocktail =>
  /^strMeasure\d+$/.test(key);

export const CoctailIngridientsAndMeasures: FC<IProps> = ({ cocktailInfo }) => {
  const cocktailIngridientsAndMeasures = useMemo(() => {
    return Object.keys(cocktailInfo).reduce(
      (acc, cocktailDataKey) => {
        if (isKeyAnIngridientKey(cocktailDataKey)) {
          const ingridientKeyNumber = parseInt(
            cocktailDataKey.replace(/\D+/g, '')
          );

          const ingridientValue = cocktailInfo[cocktailDataKey];

          const measureKey = 'strMeasure' + ingridientKeyNumber;

          if (measureKey && isKeyAMeasureKey(measureKey)) {
            const measureValue = cocktailInfo[measureKey];

            if (measureValue) {
              return {
                ...acc,
                [measureValue]: ingridientValue,
              };
            }
          }
        }

        return acc;
      },
      {} as { [p in keyof ICocktail]: string }
    );
  }, [cocktailInfo]);

  return (
    <div className={styles.wrapper}>
      {Object.entries(cocktailIngridientsAndMeasures).map(
        ([measureValue, ingridientName], idx) => (
          <div
            key={`${measureValue}-${ingridientName}-${idx}`}
            className={styles.ingridientRow}
          >
            <span className={styles.measureLabel}>{measureValue}</span>
            <span>{ingridientName}</span>
          </div>
        )
      )}
    </div>
  );
};
