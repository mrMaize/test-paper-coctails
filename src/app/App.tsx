import { FC, Suspense } from 'react';
import './App.scss';
import { Providers, RouterPaths } from '@processes/index';

const App: FC = () => {
  return (
    <Providers>
      <Suspense fallback="Загрузка">
        <RouterPaths />
      </Suspense>
    </Providers>
  );
};

export default App;
