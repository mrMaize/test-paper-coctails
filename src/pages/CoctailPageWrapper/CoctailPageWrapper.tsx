import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { COCTAILS_LIST, TCoctailCodeType } from '@shared/constants/coctails';
import { NotFound } from '../NotFound/NotFound';
import { CoctailPage } from '../CoctailPage/CoctailPage';

const reservedCoctailsSet = new Set(COCTAILS_LIST);

const CoctailPageWrapper: FC = () => {
  const params = useParams<{ cocktailCode?: TCoctailCodeType }>();

  const coctailNotMatches = useMemo(
    () =>
      !params?.cocktailCode ||
      (params?.cocktailCode && !reservedCoctailsSet.has(params.cocktailCode)),
    [params]
  );

  if (coctailNotMatches) {
    return <NotFound />;
  }

  return <CoctailPage cocktailCode={params.cocktailCode} />;
};

export default CoctailPageWrapper;
