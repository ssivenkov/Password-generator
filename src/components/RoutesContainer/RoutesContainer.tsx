import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Error404 } from 'components/common/ErrorPages/Error404';
import { CreatePassword } from 'components/CreatePassword/CreatePassword';
import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const RoutesContainer = (): ReturnComponentType => (
  <div>
    <Routes>
      <Route path={PATH.CREATE_PASSWORD} element={<CreatePassword />} />
      <Route path={PATH.ERROR} element={<Error404 />} />
      <Route path={PATH.WRONG_PAGE} element={<Navigate to={PATH.ERROR} />} />
    </Routes>
  </div>
);
