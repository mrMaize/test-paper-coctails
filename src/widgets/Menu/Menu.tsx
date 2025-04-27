import { FC, memo, useCallback } from 'react';
import { ListView } from '../../shared/components';
import { useNavigate, useParams } from 'react-router-dom';

interface IProps {
  menuElements: string[];
}

export const Menu: FC<IProps> = memo(({ menuElements }) => {
  const params = useParams<{ cocktailCode?: string }>();
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
    />
  );
});
