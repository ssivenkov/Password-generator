import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CheckboxPropsType = DefaultInputPropsType & {
  isDisabled: boolean;
  onChangeChecked: (checked: boolean) => void;
};
