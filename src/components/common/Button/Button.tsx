import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import style from './Button.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonType = DefaultButtonPropsType & {
  title?: string;
  className?: string;
  condition?: boolean;
  id?: string;
};

export const Button: React.FC<ButtonType> = ({
  children,
  className,
  onClick,
  type,
  disabled,
  id,
}): ReturnComponentType => (
  <button
    id={id}
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    className={`${className || style.baseButton}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
