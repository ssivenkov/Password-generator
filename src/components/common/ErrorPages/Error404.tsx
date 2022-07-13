import { NavLink } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { JSXElement } from 'types/commonTypes';

export const Error404 = (): JSXElement => (
  <div>
    <div>Error 404</div>
    <div>
      <NavLink to={PATH.CREATE_PASSWORD}>Back to home</NavLink>
    </div>
  </div>
);
