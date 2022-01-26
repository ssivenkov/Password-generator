import style from './Recommendations.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Recommendations = (): ReturnComponentType => (
  <div className={style.container}>
    <div className={style.contentContainer}>Recommendations</div>
  </div>
);
