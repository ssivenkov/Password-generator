import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { setErrorMessage } from 'store/actions/CreatePasswordActions';
import { AppRootStateType } from 'store/store';
import { JSXElement } from 'types/commonTypes';

export const ErrorAll = (): JSXElement => {
  const error = useSelector<AppRootStateType, boolean>(
    (state) => state.createPassword.error,
  );
  const textError = useSelector<AppRootStateType, string>(
    (state) => state.createPassword.textError,
  );
  const dispatch = useDispatch();
  const deleteMessageError = () => {
    dispatch(setErrorMessage(false, ''));
  };
  const time = 3000;

  useEffect(() => {
    setTimeout(deleteMessageError, time);
  }, [error]);

  return (
    <div>
      {error && (
        <div>
          <h1>Error:</h1>
          <h2>{textError}</h2>
          <div>
            <NavLink to={PATH.CREATE_PASSWORD}>Back to home</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
