import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { COCTAILS_LIST, ECoctailCodes } from '@shared/constants/coctails';
import { NotFound } from '../NotFound/NotFound';
import { CoctailPage } from '../CoctailPage/ui/CoctailPage';

const reservedCoctailsSet = new Set(COCTAILS_LIST);

/**
 * @deprecated – dont use the component
 */
const CoctailPageWrapper: FC = () => {
  const params = useParams<{ cocktailCode?: ECoctailCodes }>();

  const coctailNotMatches = useMemo(
    () =>
      !params?.cocktailCode ||
      (params?.cocktailCode && !reservedCoctailsSet.has(params.cocktailCode)),
    [params]
  );

  if (coctailNotMatches) {
    return <NotFound />;
  }

  return <CoctailPage />;
};

export default CoctailPageWrapper;
