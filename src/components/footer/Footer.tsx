import React from 'react';

import { ContactButton } from './contactButton/ContactButton';
import styles from './Footer.module.scss';

export const Footer = () => (
  <div className={styles.container}>
    <div className={styles.contactsContainer}>
      <ContactButton
        iconClass='fa-linkedin-in'
        link='https://www.linkedin.com/in/ssivenkov'
      />
      <ContactButton iconClass='fa-telegram' link='https://t.me/orihiru' />
      <ContactButton iconClass='fa-github' link='https://github.com/ssivenkov' />
      <ContactButton
        iconClass='fa-skype'
        link='https://join.skype.com/invite/cdkkYBX1uutB'
      />
    </div>
  </div>
);
