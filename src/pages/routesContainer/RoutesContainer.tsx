import React from 'react';

import { PATH } from 'enums/routesEnum';
import { CreatePasswordPage } from 'pages/createPasswordPage/CreatePasswordPage';
import { Error404Page } from 'pages/error404Page/Error404Page';
import { TipsPage } from 'pages/tipsPage/TipsPage';
import { Navigate, Route, Routes } from 'react-router-dom';

import styles from './RoutesContainer.module.scss';

export const RoutesContainer = () => (
  <div className={styles.container}>
    <Routes>
      <Route element={<Navigate to={PATH.CREATE_PASSWORD} />} path={PATH.START_PAGE} />
      <Route element={<CreatePasswordPage />} path={PATH.CREATE_PASSWORD} />
      <Route element={<TipsPage />} path={PATH.RECOMMENDATIONS} />
      <Route element={<Error404Page />} path={PATH.ERROR} />
      <Route element={<Navigate to={PATH.ERROR} />} path={PATH.WRONG_PAGE} />
    </Routes>
  </div>
);
