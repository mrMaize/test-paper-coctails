import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '@pages/NotFound/NotFound';
import { RoutesMap } from '@app/routes/routes';
import { Menu, Layout } from '@widgets/index';
import { COCTAILS_LIST, START_COCKTAIL_NAME } from '@shared/index';

export const RouterPaths = () => {
  return (
    <Routes>
      <Route element={<Layout menu={<Menu menuElements={COCTAILS_LIST} />} />}>
        <Route path="/" element={<Navigate to={`/${START_COCKTAIL_NAME}`} />} />

        {RoutesMap.map(({ path, name, component: Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
