import { PATH } from 'enums/routesEnum';
import { Link } from 'react-router-dom';

import styles from './Error404Page.module.scss';

export const Error404Page = () => (
  <div className={styles.container}>
    <span className={styles.errorText}>Error 404: page not found</span>
    <Link className={styles.linkText} to={`../${PATH.CREATE_PASSWORD}`}>
      Back to home
    </Link>
  </div>
);
