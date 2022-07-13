import React from 'react';

import { NavLink } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { JSXElement } from 'types/commonTypes';

import style from './Header.module.scss';

export const Header = (): JSXElement => (
  <div className={style.container}>
    <div className={style.item}>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : '')}
        to={PATH.RECOMMENDATIONS}
      >
        Recommendations
      </NavLink>
    </div>
    <div className={style.item}>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : '')}
        to={PATH.CREATE_PASSWORD}
      >
        Create password
      </NavLink>
    </div>
  </div>
);
