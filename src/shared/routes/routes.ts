import { lazy } from 'react';
import { TRoutesMap } from './routes.interfaces';

export const RoutesMap: TRoutesMap = [
  {
    name: 'coctailPage',
    path: ':cocktailPage',
    component: lazy(
      () => import('../../pages/CoctailPageWrapper/CoctailPageWrapper')
    ),
  },
];
