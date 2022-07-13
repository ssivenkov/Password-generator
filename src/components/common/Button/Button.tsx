import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import style from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonType = DefaultButtonPropsType & {
  title?: string;
  className?: string;
  hasCondition?: boolean;
  id?: string;
};

export const Button: React.FC<ButtonType> = ({
  children,
  className,
  onClick,
  disabled,
  id,
}) => (
  <button
    className={`${className || style.baseButton}`}
    /* eslint-disable-next-line react/button-has-type */
    disabled={disabled}
    id={id}
    onClick={onClick}
    type='button'
  >
    {children}
  </button>
);
