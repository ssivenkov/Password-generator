import React from 'react';

import { JSXElement } from 'types/commonTypes';

import s from './ContactButton.module.scss';
import { ContactButtonPropsType } from './types';

export const ContactButton = (props: ContactButtonPropsType): JSXElement => {
  const { link, iconClass } = props;

  return (
    <a className={s.contactButton} href={link} rel='noreferrer' target='_blank'>
      <span className={`${s.contactButtonIcon} fab ${iconClass}`} />
    </a>
  );
};
