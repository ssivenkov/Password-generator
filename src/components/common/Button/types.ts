import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonPropsType = DefaultButtonPropsType & {
  title?: string;
  className?: string;
  hasCondition?: boolean;
  id?: string;
};
