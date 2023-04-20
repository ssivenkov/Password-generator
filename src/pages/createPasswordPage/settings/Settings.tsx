import { EIGHT, FIFTY, FIRST_ELEMENT, ONE } from 'constants/common';

import { Checkbox } from 'components/common/checkbox/Checkbox';
import { RangeSlider } from 'components/common/rangeSlider/RangeSlider';
import { createPasswordSlice } from 'redux/reducers/createPasswordSlice/CreatePasswordSlice';
import { useAppDispatch } from 'redux/store';

import styles from './Settings.module.scss';
import { SettingsPropsType } from './types';

export const Settings = (props: SettingsPropsType) => {
  const {
    checkboxCount,
    passwordLength,
    isPasswordUppercaseLetters,
    isPasswordLowercaseLetters,
    isPasswordNumbers,
    isPasswordSymbols,
  } = props;

  const dispatch = useAppDispatch();

  const { setLength, setUppercaseLetters, setLowercaseLetters, setNumbers, setSymbols } =
    createPasswordSlice.actions;

  const checkboxDisableCondition = (checked: boolean): boolean =>
    checkboxCount <= ONE && checked;

  const onRangeUpdate = (value: Array<number>): void => {
    const length = Math.round(Number(value[FIRST_ELEMENT]));

    dispatch(setLength(length));
  };

  const onUppercaseLettersChange = (): void => {
    const uppercaseLetters = !isPasswordUppercaseLetters;

    dispatch(setUppercaseLetters(uppercaseLetters));
  };

  const onLowercaseLettersChange = (): void => {
    const lowercaseLetters = !isPasswordLowercaseLetters;

    dispatch(setLowercaseLetters(lowercaseLetters));
  };

  const onNumbersChange = (): void => {
    const numbers = !isPasswordNumbers;

    dispatch(setNumbers(numbers));
  };

  const onSymbolsChange = (): void => {
    const symbols = !isPasswordSymbols;

    dispatch(setSymbols(symbols));
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.title}>Settings</div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.descriptionText}>Length</div>
          <RangeSlider
            disabled={false}
            max={FIFTY}
            min={EIGHT}
            onUpdate={onRangeUpdate}
            startValue={EIGHT}
            step={ONE}
          />
          <div className={styles.lengthText}>{passwordLength}</div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={isPasswordUppercaseLetters}
              isDisabled={checkboxDisableCondition(isPasswordUppercaseLetters)}
              onChangeChecked={() => onUppercaseLettersChange()}
            >
              Uppercase letters
            </Checkbox>
          </div>
          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={isPasswordLowercaseLetters}
              isDisabled={checkboxDisableCondition(isPasswordLowercaseLetters)}
              onChangeChecked={() => onLowercaseLettersChange()}
            >
              Lowercase letters
            </Checkbox>
          </div>
          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={isPasswordNumbers}
              isDisabled={checkboxDisableCondition(isPasswordNumbers)}
              onChangeChecked={() => onNumbersChange()}
            >
              Numbers
            </Checkbox>
          </div>
          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={isPasswordSymbols}
              isDisabled={checkboxDisableCondition(isPasswordSymbols)}
              onChangeChecked={() => onSymbolsChange()}
            >
              Symbols
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};
