import React from 'react';

import style from './Header.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Header = (): ReturnComponentType => (
  <div className={style.container}>
    <div className={style.pageTitle}>Create password</div>
  </div>
);
