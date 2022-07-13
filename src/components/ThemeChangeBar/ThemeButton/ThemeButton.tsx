import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import style from './ThemeButton.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ThemeButtonType = DefaultButtonPropsType & {
  theme: string;
};

export const ThemeButton: FC<ThemeButtonType> = ({ theme, onClick }) => (
  <button
    className={`${style.baseButton} ${style[theme]}`}
    onClick={onClick}
    type='button'
  />
);
