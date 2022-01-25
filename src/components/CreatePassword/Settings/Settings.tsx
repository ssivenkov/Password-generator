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
  setCopiedStatus,
  setLength,
} from 'store/actions/createPasswordActions';
import { ReturnComponentType } from 'types/ReturnComponentType';

type SettingsType = {
  passwordLength: number;
  passwordUppercaseLetters: boolean;
  passwordLowercaseLetters: boolean;
  passwordNumbers: boolean;
  passwordSymbols: boolean;
  copiedStatus: boolean;
};

export const Settings: FC<SettingsType> = ({
  passwordLength,
  passwordUppercaseLetters,
  passwordLowercaseLetters,
  passwordNumbers,
  passwordSymbols,
  copiedStatus,
}): ReturnComponentType => {
  const dispatch = useDispatch();

  const onRangeUpdate = (value: Array<number>): void => {
    dispatch(setCopiedStatus(false));
    dispatch(setLength(Math.round(Number(value[FIRST_ELEMENT]))));
  };

  const onUppercaseLettersChange = (): void => {
    if (copiedStatus) dispatch(setCopiedStatus(false));
    dispatch(changeUppercaseLetters(!passwordUppercaseLetters));
  };

  const onLowercaseLettersChange = (): void => {
    if (copiedStatus) dispatch(setCopiedStatus(false));
    dispatch(changeLowercaseLetters(!passwordLowercaseLetters));
  };

  const onNumbersChange = (): void => {
    if (copiedStatus) dispatch(setCopiedStatus(false));
    dispatch(changeNumbers(!passwordNumbers));
  };

  const onSymbolsChange = (): void => {
    if (copiedStatus) dispatch(setCopiedStatus(false));
    dispatch(changeSymbols(!passwordSymbols));
  };

  return (
    <div className={style.settingsContainer}>
      <div>Settings</div>
      <div>
        <RangeSlider
          startValue={EIGHT}
          min={EIGHT}
          max={HUNDRED}
          step={ONE}
          disabled={false}
          onUpdate={onRangeUpdate}
        />
        <span>length: {passwordLength}</span>
        <div>
          <Checkbox
            onChangeChecked={() => onUppercaseLettersChange()}
            checked={passwordUppercaseLetters}
          >
            Uppercase letters: {`${passwordUppercaseLetters}`}
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChangeChecked={() => onLowercaseLettersChange()}
            checked={passwordLowercaseLetters}
          >
            Lowercase letters: {`${passwordLowercaseLetters}`}
          </Checkbox>
        </div>
        <div>
          <Checkbox onChangeChecked={() => onNumbersChange()} checked={passwordNumbers}>
            Numbers: {`${passwordNumbers}`}
          </Checkbox>
        </div>
        <div>
          <Checkbox onChangeChecked={() => onSymbolsChange()} checked={passwordSymbols}>
            Symbols: {`${passwordSymbols}`}
          </Checkbox>
        </div>
      </div>
    </div>
  );
};
