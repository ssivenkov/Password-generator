import {
  lowercaseLettersArr,
  numbersArr,
  ONE,
  symbolsArr,
  uppercaseLettersArr,
  ZERO,
} from 'constants/common';

import { useEffect } from 'react';

import { LongButton } from 'components/common/longButton/LongButton';
import { ThemeChangeBar } from 'components/themeChangeBar/ThemeChangeBar';
import { useAppSelector } from 'hooks/redux';
import { createPasswordSlice } from 'redux/reducers/createPasswordSlice/CreatePasswordSlice';
import { useAppDispatch } from 'redux/store';

import styles from './CreatePasswordPage.module.scss';
import { Settings } from './settings/Settings';

export const CreatePasswordPage = () => {
  const {
    copied: copiedStatus,
    checkboxCount,
    length: passwordLength,
    uppercaseLetters,
    lowercaseLetters,
    numbers,
    symbols,
    password,
  } = useAppSelector((state) => state.createPasswordReducer);

  const dispatch = useAppDispatch();

  const { setCopiedStatus, setCheckboxCount, setPassword } = createPasswordSlice.actions;

  let result = '';
  const maxSameSignTypeRepeatCount = ONE;
  const passwordSymbolsProportion =
    Number(uppercaseLetters) +
    Number(lowercaseLetters) +
    Number(numbers) +
    Number(symbols);
  const maxPortionLength = Math.floor(passwordLength / passwordSymbolsProportion);

  /**
   * Adds a random number of random character types to the result variable.
   * @param {Array} arr array of characters of the same type to form a fragment.
   * @return {void} void.
   * */

  const addPortion = (arr: Array<number | string>): void => {
    const maxPortion: Array<number | string> = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < maxPortionLength; i++) {
      maxPortion.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    const portion: Array<number | string> = [];
    const randomMaxPortionLength =
      Math.floor(Math.random() * maxSameSignTypeRepeatCount) + ONE;

    // eslint-disable-next-line no-plusplus
    for (let k = 0; k < randomMaxPortionLength; k++) {
      portion.push(maxPortion[Math.floor(Math.random() * maxPortion.length)]);
    }

    result += portion.join('');
  };

  const signSetsArr: Array<string[] | number[]> = [];
  const fillingSignSetsArr = (): void => {
    if (uppercaseLetters) signSetsArr.push(uppercaseLettersArr);

    if (lowercaseLetters) signSetsArr.push(lowercaseLettersArr);

    if (numbers) signSetsArr.push(numbersArr);

    if (symbols) signSetsArr.push(symbolsArr);
  };

  fillingSignSetsArr();

  const currentCheckboxCount = signSetsArr.length;

  dispatch(setCheckboxCount(currentCheckboxCount));

  const generatePassword = (): string => {
    addPortion(signSetsArr[Math.floor(Math.random() * signSetsArr.length)]);
    const checkNewPasswordLength = (): void => {
      addPortion(signSetsArr[Math.floor(Math.random() * signSetsArr.length)]);

      if (result.length < passwordLength) {
        checkNewPasswordLength();
      }
    };

    checkNewPasswordLength();
    result = result.slice(ZERO, passwordLength);

    return result;
  };

  const passwordGenerate = (): void => {
    if (copiedStatus) {
      dispatch(setCopiedStatus(false));
    }

    const password = generatePassword();

    dispatch(setPassword(password));
  };

  const onCopyPasswordClick = (): void => {
    navigator.clipboard.writeText(password).then(() => {
      dispatch(setCopiedStatus(true));
    });
  };

  useEffect(() => {
    passwordGenerate();
  }, [passwordLength, uppercaseLetters, lowercaseLetters, numbers, symbols]);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        Generate secure, random passwords to stay safe online
      </div>
      <div className={styles.passwordContainer}>
        <div className={styles.password}>{password}</div>
      </div>
      <div className={styles.buttonsContainer}>
        <LongButton onClick={() => passwordGenerate()}>Generate</LongButton>
        <LongButton onClick={() => onCopyPasswordClick()}>
          {copiedStatus ? <span>Copied to clipboard</span> : <span>Copy password</span>}
        </LongButton>
      </div>
      <Settings
        checkboxCount={checkboxCount}
        isPasswordLowercaseLetters={lowercaseLetters}
        isPasswordNumbers={numbers}
        isPasswordSymbols={symbols}
        isPasswordUppercaseLetters={uppercaseLetters}
        passwordLength={passwordLength}
      />
      <ThemeChangeBar />
    </div>
  );
};
