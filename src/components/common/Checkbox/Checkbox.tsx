import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import style from './Checkbox.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type CheckboxPropsType = DefaultInputPropsType & {
  isDisabled: boolean;
  onChangeChecked: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  children,
  checked,
  isDisabled,
}) => {
  const onChangeCallback = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(event);
    }
    if (onChangeChecked) {
      onChangeChecked(event.currentTarget.checked);
    }
  };

  const finalInputClassName = `${style.checkbox} ${className || ''}`;

  return (
    <label className={style.labelContainer}>
      <input
        checked={checked}
        className={finalInputClassName}
        isDisabled={isDisabled}
        onChange={onChangeCallback}
        type='checkbox'
      />
      {children && <span>{children}</span>}
    </label>
  );
};
