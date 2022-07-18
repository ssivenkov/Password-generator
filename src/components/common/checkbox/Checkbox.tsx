import React, { ChangeEvent } from 'react';

import styles from './Checkbox.module.scss';
import { CheckboxPropsType } from './types';

export const Checkbox = (props: CheckboxPropsType) => {
  const { onChange, onChangeChecked, className, children, checked, isDisabled } = props;

  const onChangeCallback = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(event);
    }

    if (onChangeChecked) {
      onChangeChecked(event.currentTarget.checked);
    }
  };

  const finalInputClassName = `${styles.checkbox} ${className || ''}`;

  return (
    <label className={styles.labelContainer}>
      <input
        checked={checked}
        className={finalInputClassName}
        disabled={isDisabled}
        onChange={onChangeCallback}
        type='checkbox'
      />
      {children && <span className={styles.title}>{children}</span>}
    </label>
  );
};
