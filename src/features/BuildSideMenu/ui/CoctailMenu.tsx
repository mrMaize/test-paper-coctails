import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { menuItems } from '../config/menuItems';

import styles from './Menu.module.scss';

export const CocktailsMenu = memo(() => {
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

CocktailsMenu.displayName = 'MenuComponent';
