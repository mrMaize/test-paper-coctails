import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CoctailsList } from '../../shared/constants/coctails';
import { NotFound } from '../NotFound/NotFound';
import { CoctailPage } from '../CoctailPage/CoctailPage';

const CoctailPageWrapper: FC = () => {
  const params = useParams<{ cocktailCode?: string }>();
  const reservedCoctailsSet = new Set(CoctailsList);

  const coctailNotMatches = useMemo(
    () =>
      !params?.cocktailCode ||
      (params?.cocktailCode && !reservedCoctailsSet.has(params.cocktailCode)),
    []
  );

  if (coctailNotMatches) {
    return <NotFound />;
  }

  return <CoctailPage />;
};

export default CoctailPageWrapper;
