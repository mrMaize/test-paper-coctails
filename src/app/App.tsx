import { FC, Suspense } from 'react';
import { Providers } from './providers/Provideres';
import { Layout } from '../widgets/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages/NotFound/NotFound';
import { CoctailsList } from '../shared/constants/coctails';
import './App.scss';
import { RoutesMap } from '../shared/routes/routes';

const App: FC = () => {
  return (
    <Providers>
      <Layout>
        <Suspense fallback="Загрузка">
          <Routes>
            <Route path="/" element={<Navigate to={`/${CoctailsList[0]}`} />} />

            {RoutesMap.map(({ path, name, component: Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Providers>
  );
};

export default App;
