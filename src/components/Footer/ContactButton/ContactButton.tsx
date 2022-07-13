import React from 'react';

import s from './ContactButton.module.scss';

type ContactButtonType = {
  link: string;
  iconClass: string;
};

export const ContactButton: React.FC<ContactButtonType> = ({ link, iconClass }) => (
  <a className={s.contactButton} href={link} rel='noreferrer' target='_blank'>
    <span className={`${s.contactButtonIcon} fab ${iconClass}`} />
  </a>
);
