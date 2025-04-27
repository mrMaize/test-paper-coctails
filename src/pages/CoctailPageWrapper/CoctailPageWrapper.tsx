import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { COCTAILS_LIST } from '../../shared/constants/coctails';
import { NotFound } from '../NotFound/NotFound';
import { CoctailPage } from '../CoctailPage/CoctailPage';

const CoctailPageWrapper: FC = () => {
  const params = useParams<{ cocktailCode?: string }>();
  const reservedCoctailsSet = new Set(COCTAILS_LIST);

  const coctailNotMatches = useMemo(
    () =>
      !params?.cocktailCode ||
      (params?.cocktailCode && !reservedCoctailsSet.has(params.cocktailCode)),
    [params, reservedCoctailsSet]
  );

  if (coctailNotMatches) {
    return <NotFound />;
  }

  return <CoctailPage cocktailCode={params.cocktailCode} />;
};

export default CoctailPageWrapper;
