import React from 'react';

import { JSXElement } from 'types/commonTypes';

import { ContactButton } from './ContactButton/ContactButton';
import style from './Footer.module.scss';

export const Footer = (): JSXElement => (
  <div className={style.container}>
    <div className={style.contactsContainer}>
      <ContactButton
        iconClass='fa-linkedin-in'
        link='https://www.linkedin.com/in/ssivenkov'
      />
      <ContactButton iconClass='fa-telegram' link='https://t.me/sergei_sivenkov' />
      <ContactButton iconClass='fa-github' link='https://github.com/ssivenkov' />
      <ContactButton
        iconClass='fa-skype'
        link='https://join.skype.com/invite/cdkkYBX1uutB'
      />
    </div>
  </div>
);
