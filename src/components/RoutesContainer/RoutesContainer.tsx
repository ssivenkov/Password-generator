import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import style from './RoutesContainer.module.scss';

import { Error404 } from 'components/common/ErrorPages/Error404';
import { CreatePassword } from 'components/CreatePassword/CreatePassword';
import { Recommendations } from 'components/Recommendations/Recommendations';
import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const RoutesContainer = (): ReturnComponentType => (
  <div className={style.container}>
    <Routes>
      <Route path={PATH.CREATE_PASSWORD} element={<CreatePassword />} />
      <Route path={PATH.RECOMMENDATIONS} element={<Recommendations />} />
      <Route path={PATH.ERROR} element={<Error404 />} />
      <Route path={PATH.WRONG_PAGE} element={<Navigate to={PATH.ERROR} />} />
    </Routes>
  </div>
);
