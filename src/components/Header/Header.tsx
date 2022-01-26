import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Header = (): ReturnComponentType => (
  <div className={style.container}>
    <div className={style.item}>
      <NavLink
        to={PATH.RECOMMENDATIONS}
        className={({ isActive }) => (isActive ? style.active : '')}
      >
        Recommendations
      </NavLink>
    </div>
    <div className={style.item}>
      <NavLink
        to={PATH.CREATE_PASSWORD}
        className={({ isActive }) => (isActive ? style.active : '')}
      >
        Create password
      </NavLink>
    </div>
  </div>
);
