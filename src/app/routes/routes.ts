import { lazy } from 'react';

import { TRoutesMap } from './routes.interfaces';

export const RoutesMap: TRoutesMap = [
  {
    name: 'coctailPage',
    path: '/:cocktailCode',
    component: lazy(
      () => import('@pages/CocktailPage/CocktailPage')
    ),
  },
];
