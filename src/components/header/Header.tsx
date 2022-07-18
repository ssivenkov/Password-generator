import React from 'react';

import { PATH } from 'enums/routesEnum';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : '')}
        to={PATH.RECOMMENDATIONS}
      >
        Tips
      </NavLink>
    </div>
    <div className={styles.item}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : '')}
        to={PATH.CREATE_PASSWORD}
      >
        Create password
      </NavLink>
    </div>
  </div>
);
