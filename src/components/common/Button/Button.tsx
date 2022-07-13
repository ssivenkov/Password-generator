import React from 'react';

import { JSXElement } from 'types/commonTypes';

import style from './Button.module.scss';
import { ButtonPropsType } from './types';

export const Button = (props: ButtonPropsType): JSXElement => {
  const { children, className, onClick, disabled, id } = props;

  return (
    <button
      className={`${className || style.baseButton}`}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  );
};
