import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import style from './ThemeButton.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ThemeButtonType = DefaultButtonPropsType & {
  theme: string;
};

export const ThemeButton: FC<ThemeButtonType> = ({
  theme,
  onClick,
  type,
}): ReturnComponentType => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <button
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    className={`${style.baseButton} ${style[theme]}`}
    onClick={onClick}
  />
);
