import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

import { menuItems } from '../config/menuItems';

export const Menu = memo(() => {
  return (
    <nav className={styles.menu}>
      {menuItems.map(({ code, name }) => (
        <NavLink
          key={code}
          to={`/cocktail/${code}`}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
});

Menu.displayName = 'MenuComponent';
