import React from 'react';

import { Error404 } from 'components/common/ErrorPages/Error404';
import { CreatePassword } from 'components/CreatePassword/CreatePassword';
import { Recommendations } from 'components/Recommendations/Recommendations';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { JSXElement } from 'types/commonTypes';

import style from './RoutesContainer.module.scss';

export const RoutesContainer = (): JSXElement => (
  <div className={style.container}>
    <Routes>
      <Route element={<CreatePassword />} path={PATH.CREATE_PASSWORD} />
      <Route element={<Recommendations />} path={PATH.RECOMMENDATIONS} />
      <Route element={<Error404 />} path={PATH.ERROR} />
      <Route element={<Navigate to={PATH.ERROR} />} path={PATH.WRONG_PAGE} />
    </Routes>
  </div>
);
