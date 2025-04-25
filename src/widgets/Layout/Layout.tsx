import { FC, memo, PropsWithChildren, useCallback } from 'react';
import styles from './Layout.module.scss';
import { ListView } from '../../shared/components';
import { CoctailsList } from '../../shared/constants/coctails';
import { useNavigate } from 'react-router-dom';

export const Layout: FC<PropsWithChildren> = memo(({ children }) => {
  const navigate = useNavigate();

  const handleCocktailClick = useCallback((cocktailName: string) => {
    navigate(cocktailName);
  }, []);

  return (
    <div className={styles.layout}>
      <ListView
        list={CoctailsList.map((item) => ({ name: item, id: item }))}
        onClick={handleCocktailClick}
      />
      {children}
    </div>
  );
});
