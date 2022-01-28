import { FC } from 'react';

import { useDispatch } from 'react-redux';

import style from './Settings.module.scss';

import { Checkbox } from 'components/common/Checkbox/Checkbox';
import { RangeSlider } from 'components/common/RangeSlider/RangeSlider';
import { FIRST_ELEMENT, ONE, EIGHT, HUNDRED } from 'constants/common';
import {
  changeUppercaseLetters,
  changeLowercaseLetters,
  changeNumbers,
  changeSymbols,
  setLength,
} from 'store/actions/CreatePasswordActions';
import { ReturnComponentType } from 'types/ReturnComponentType';

type SettingsType = {
  checkboxCount: number;
  passwordLength: number;
  passwordUppercaseLetters: boolean;
  passwordLowercaseLetters: boolean;
  passwordNumbers: boolean;
  passwordSymbols: boolean;
};

export const Settings: FC<SettingsType> = ({
  checkboxCount,
  passwordLength,
  passwordUppercaseLetters,
  passwordLowercaseLetters,
  passwordNumbers,
  passwordSymbols,
}): ReturnComponentType => {
  const dispatch = useDispatch();
  const checkboxDisable = (checked: boolean): boolean => checkboxCount <= ONE && checked;
  const onRangeUpdate = (value: Array<number>): void => {
    dispatch(setLength(Math.round(Number(value[FIRST_ELEMENT]))));
  };
  const onUppercaseLettersChange = (): void => {
    dispatch(changeUppercaseLetters(!passwordUppercaseLetters));
  };
  const onLowercaseLettersChange = (): void => {
    dispatch(changeLowercaseLetters(!passwordLowercaseLetters));
  };
  const onNumbersChange = (): void => {
    dispatch(changeNumbers(!passwordNumbers));
  };
  const onSymbolsChange = (): void => {
    dispatch(changeSymbols(!passwordSymbols));
  };

  return (
    <div className={style.settingsContainer}>
      <div className={style.title}>Settings</div>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <div className={style.descriptionText}>Length</div>
          <RangeSlider
            startValue={EIGHT}
            min={EIGHT}
            max={HUNDRED}
            step={ONE}
            disabled={false}
            onUpdate={onRangeUpdate}
          />
          <div className={style.length}>{passwordLength}</div>
        </div>
        <div className={style.rightContainer}>
          <div>
            <div className={style.checkboxWrapper}>
              <Checkbox
                onChangeChecked={() => onUppercaseLettersChange()}
                checked={passwordUppercaseLetters}
                disabled={checkboxDisable(passwordUppercaseLetters)}
              >
                Uppercase letters
              </Checkbox>
            </div>
            <div className={style.checkboxWrapper}>
              <Checkbox
                onChangeChecked={() => onLowercaseLettersChange()}
                checked={passwordLowercaseLetters}
                disabled={checkboxDisable(passwordLowercaseLetters)}
              >
                Lowercase letters
              </Checkbox>
            </div>
            <div className={style.checkboxWrapper}>
              <Checkbox
                onChangeChecked={() => onNumbersChange()}
                checked={passwordNumbers}
                disabled={checkboxDisable(passwordNumbers)}
              >
                Numbers
              </Checkbox>
            </div>
            <div className={style.checkboxWrapper}>
              <Checkbox
                onChangeChecked={() => onSymbolsChange()}
                checked={passwordSymbols}
                disabled={checkboxDisable(passwordSymbols)}
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
