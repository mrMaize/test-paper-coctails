import { FC, LazyExoticComponent } from 'react';

export interface IRoute {
  name: string;
  path?: string;
  component: LazyExoticComponent<FC>;
}

export type TRoutesMap = Array<IRoute>;
