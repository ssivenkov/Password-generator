import React from 'react';

import styles from './ContactButton.module.scss';
import { ContactButtonPropsType } from './types';

export const ContactButton = (props: ContactButtonPropsType) => {
  const { link, iconClass } = props;

  return (
    <a className={styles.contactButton} href={link} rel='noreferrer' target='_blank'>
      <span className={`${styles.contactButtonIcon} fab ${iconClass}`} />
    </a>
  );
};
