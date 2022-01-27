import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import style from './Checkbox.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type CheckboxPropsType = DefaultInputPropsType & {
  disabled: boolean;
  onChangeChecked: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  children,
  checked,
  disabled,
}): ReturnComponentType => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e);
    }
    if (onChangeChecked) {
      onChangeChecked(e.currentTarget.checked);
    }
  };

  const finalInputClassName = `${style.checkbox} ${className || ''}`;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={style.labelContainer}>
      <input
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        checked={checked}
        disabled={disabled}
      />
      {children && <span>{children}</span>}
    </label>
  );
};
