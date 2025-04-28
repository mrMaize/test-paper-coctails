import { FC, PropsWithChildren } from 'react';

import { RouterProvider } from './RouterProvider/RouterProvider';
import { StoreProvider } from './StoreProvider/StoreProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RouterProvider>
      <StoreProvider>{children}</StoreProvider>
    </RouterProvider>
  );
};
