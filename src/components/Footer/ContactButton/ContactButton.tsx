import React from 'react';

import s from './ContactButton.module.scss';
import { ContactButtonPropsType } from './types';

export const ContactButton = (props: ContactButtonPropsType) => {
  const { link, iconClass } = props;

  return (
    <a className={s.contactButton} href={link} rel='noreferrer' target='_blank'>
      <span className={`${s.contactButtonIcon} fab ${iconClass}`} />
    </a>
  );
};
