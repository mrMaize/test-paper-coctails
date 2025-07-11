import { store } from '@app/store';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
