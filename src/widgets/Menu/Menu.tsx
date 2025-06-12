import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListView } from '@shared/index';
import styles from './Menu.module.scss';
import { ECoctailCodes } from '@shared/constants/coctails';

interface IProps {
  menuElements: string[];
}

export const Menu = memo(({ menuElements }: IProps) => {
  const params = useParams<{ cocktailCode: ECoctailCodes }>();
  const navigate = useNavigate();

  const coctailCodeFromParams = params?.cocktailCode;

  const handleSelectCocktailFromMenu = useCallback(
    (cocktailName: string) => {
      navigate(cocktailName);
    },
    [navigate]
  );

  return (
    <ListView
      list={menuElements}
      onClick={handleSelectCocktailFromMenu}
      activeElementName={coctailCodeFromParams}
      className={styles.menu}
    />
  );
});

Menu.displayName = 'MenuComponent';
