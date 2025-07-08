import { Outlet } from 'react-router-dom';
import { FC, ReactElement } from 'react';

import styles from './Layout.module.scss';

interface IProps {
  menu?: ReactElement;
}

export const Layout: FC<IProps> = ({ menu }) => {
  return (
    <div className={styles.layout}>
      <section>{menu}</section>
      <section className={styles.cocktailsSection}>
        <Outlet />
      </section>
    </div>
  );
};
