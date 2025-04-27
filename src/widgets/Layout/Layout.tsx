import { FC, ReactElement } from 'react';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';

interface IProps {
  menu?: ReactElement;
}

export const Layout: FC<IProps> = ({ menu }) => {
  return (
    <div className={styles.layout}>
      <section>{menu}</section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
