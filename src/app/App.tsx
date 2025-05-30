import { FC, Suspense } from 'react';
import './App.scss';
import { Providers } from './providers/Provideres';
import { RouterPaths } from './routerPaths/RouterPaths';

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
