import React, { ChangeEvent } from 'react';

import { JSXElement } from 'types/commonTypes';

import style from './Checkbox.module.scss';
import { CheckboxPropsType } from './types';

export const Checkbox = (props: CheckboxPropsType): JSXElement => {
  const { onChange, onChangeChecked, className, children, checked, isDisabled } = props;

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
