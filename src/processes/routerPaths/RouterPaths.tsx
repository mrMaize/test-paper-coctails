import { Navigate, Route, Routes } from 'react-router-dom';

import { NotFound } from '@pages/NotFound/NotFound';
import { COCTAILS_LIST, START_COCKTAIL_NAME } from '@shared/constants/coctails';
import { RoutesMap } from '@shared/routes/routes';
import { Layout } from '@widgets/Layout/Layout';
import { Menu } from '@widgets/Menu/Menu';

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
