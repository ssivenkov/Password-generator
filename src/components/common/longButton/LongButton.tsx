import React from 'react';

import styles from './LongButton.module.scss';
import { LongButtonPropsType } from './types';

export const LongButton = (props: LongButtonPropsType) => {
  const { children, onClick } = props;

  return (
    <button className={styles.longButton} onClick={onClick} type='button'>
      {children}
    </button>
  );
};
