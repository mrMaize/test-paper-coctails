import { FC, Suspense } from 'react';
import { Providers } from './providers/Provideres';
import { Layout } from '../widgets/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages/NotFound/NotFound';
import { COCTAILS_LIST } from '../shared/constants/coctails';
import './App.scss';
import { RoutesMap } from '../shared/routes/routes';
import { Menu } from '../widgets/Menu/Menu';

const START_COCKTAIL_NAME = COCTAILS_LIST[0] ?? '';

const App: FC = () => {
  return (
    <Providers>
      <Suspense fallback="Загрузка">
        <Routes>
          <Route
            element={<Layout menu={<Menu menuElements={COCTAILS_LIST} />} />}
          >
            <Route
              path="/"
              element={<Navigate to={`/${START_COCKTAIL_NAME}`} />}
            />

            {RoutesMap.map(({ path, name, component: Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Providers>
  );
};

export default App;
