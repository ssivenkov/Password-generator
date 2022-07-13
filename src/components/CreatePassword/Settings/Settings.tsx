import { FIRST_ELEMENT, ONE, EIGHT, HUNDRED } from 'constants/common';

import { Checkbox } from 'components/common/Checkbox/Checkbox';
import { RangeSlider } from 'components/common/RangeSlider/RangeSlider';
import { useDispatch } from 'react-redux';
import {
  changeUppercaseLetters,
  changeLowercaseLetters,
  changeNumbers,
  changeSymbols,
  setLength,
} from 'store/actions/CreatePasswordActions';
import { JSXElement } from 'types/commonTypes';

import style from './Settings.module.scss';
import { SettingsPropsType } from './types';

export const Settings = (props: SettingsPropsType): JSXElement => {
  const {
    checkboxCount,
    passwordLength,
    isPasswordUppercaseLetters,
    isPasswordLowercaseLetters,
    isPasswordNumbers,
    isPasswordSymbols,
  } = props;

  const dispatch = useDispatch();
  const checkboxDisable = (checked: boolean): boolean => checkboxCount <= ONE && checked;
  const onRangeUpdate = (value: Array<number>): void => {
    dispatch(setLength(Math.round(Number(value[FIRST_ELEMENT]))));
  };
  const onUppercaseLettersChange = (): void => {
    dispatch(changeUppercaseLetters(!isPasswordUppercaseLetters));
  };
  const onLowercaseLettersChange = (): void => {
    dispatch(changeLowercaseLetters(!isPasswordLowercaseLetters));
  };
  const onNumbersChange = (): void => {
    dispatch(changeNumbers(!isPasswordNumbers));
  };
  const onSymbolsChange = (): void => {
    dispatch(changeSymbols(!isPasswordSymbols));
  };

  return (
    <div className={style.settingsContainer}>
      <div className={style.title}>Settings</div>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <div className={style.descriptionText}>Length</div>
          <RangeSlider
            disabled={false}
            max={HUNDRED}
            min={EIGHT}
            onUpdate={onRangeUpdate}
            startValue={EIGHT}
            step={ONE}
          />
          <div className={style.length}>{passwordLength}</div>
        </div>
        <div className={style.rightContainer}>
          <div>
            <div className={style.checkboxWrapper}>
              <Checkbox
                checked={isPasswordUppercaseLetters}
                isDisabled={checkboxDisable(isPasswordUppercaseLetters)}
                onChangeChecked={() => onUppercaseLettersChange()}
              >
                Uppercase letters
              </Checkbox>
            </div>
            <div className={style.checkboxWrapper}>
              <Checkbox
                checked={isPasswordLowercaseLetters}
                isDisabled={checkboxDisable(isPasswordLowercaseLetters)}
                onChangeChecked={() => onLowercaseLettersChange()}
              >
                Lowercase letters
              </Checkbox>
            </div>
            <div className={style.checkboxWrapper}>
              <Checkbox
                checked={isPasswordNumbers}
                isDisabled={checkboxDisable(isPasswordNumbers)}
                onChangeChecked={() => onNumbersChange()}
              >
                Numbers
              </Checkbox>
            </div>
            <div className={style.checkboxWrapper}>
              <Checkbox
                checked={isPasswordSymbols}
                isDisabled={checkboxDisable(isPasswordSymbols)}
                onChangeChecked={() => onSymbolsChange()}
              >
                Symbols
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
