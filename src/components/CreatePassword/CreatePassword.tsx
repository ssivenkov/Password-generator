import {
  ZERO,
  ONE,
  uppercaseLettersArr,
  lowercaseLettersArr,
  numbersArr,
  symbolsArr,
} from 'constants/common';

import { useEffect } from 'react';

import { Button } from 'components/common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCheckboxCount,
  setCopiedStatus,
  setPassword,
} from 'store/actions/CreatePasswordActions';
import { AppRootStateType } from 'store/store';
import { JSXElement } from 'types/commonTypes';

import { ThemeChangeBar } from '../ThemeChangeBar/ThemeChangeBar';

import style from './CreatePassword.module.scss';
import { Settings } from './Settings/Settings';

export const CreatePassword = (): JSXElement => {
  const dispatch = useDispatch();

  const checkboxCount = useSelector<AppRootStateType, number>(
    (state) => state.createPassword.checkboxCount,
  );
  const passwordLength = useSelector<AppRootStateType, number>(
    (state) => state.createPassword.length,
  );
  const passwordUppercaseLetters = useSelector<AppRootStateType, boolean>(
    (state) => state.createPassword.uppercaseLetters,
  );
  const passwordLowercaseLetters = useSelector<AppRootStateType, boolean>(
    (state) => state.createPassword.lowercaseLetters,
  );
  const passwordNumbers = useSelector<AppRootStateType, boolean>(
    (state) => state.createPassword.numbers,
  );
  const passwordSymbols = useSelector<AppRootStateType, boolean>(
    (state) => state.createPassword.symbols,
  );
  const password = useSelector<AppRootStateType, string>(
    (state) => state.createPassword.password,
  );
  const copiedStatus = useSelector<AppRootStateType, boolean>(
    (state) => state.createPassword.copied,
  );

  let result = '';
  const maxSameSignTypeRepeatCount = ONE;
  const passwordSymbolsProportion =
    Number(passwordUppercaseLetters) +
    Number(passwordLowercaseLetters) +
    Number(passwordNumbers) +
    Number(passwordSymbols);
  const maxPortionLength = Math.floor(passwordLength / passwordSymbolsProportion);

  /**
   * adds a random number of random character types to the result variable.
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
    if (passwordUppercaseLetters) signSetsArr.push(uppercaseLettersArr);
    if (passwordLowercaseLetters) signSetsArr.push(lowercaseLettersArr);
    if (passwordNumbers) signSetsArr.push(numbersArr);
    if (passwordSymbols) signSetsArr.push(symbolsArr);
  };

  fillingSignSetsArr();
  dispatch(setCheckboxCount(signSetsArr.length));

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
    if (copiedStatus) dispatch(setCopiedStatus(false));
    const newPassword = generatePassword();

    dispatch(setPassword(newPassword));
  };

  const onCopyPasswordClick = (): void => {
    navigator.clipboard.writeText(password).then(() => {
      dispatch(setCopiedStatus(true));
    });
  };

  useEffect(() => {
    passwordGenerate();
  }, [
    passwordLength,
    passwordUppercaseLetters,
    passwordLowercaseLetters,
    passwordNumbers,
    passwordSymbols,
  ]);

  return (
    <div className={style.container}>
      <div className={style.description}>
        Generate secure, random passwords to stay safe online
      </div>
      <div className={style.passwordContainer}>
        <div className={style.password}>{password}</div>
      </div>
      <div className={style.buttonsContainer}>
        <Button onClick={() => passwordGenerate()}>Generate</Button>
        <Button onClick={() => onCopyPasswordClick()}>
          {copiedStatus ? <span>Copied to clipboard</span> : <span>Copy password</span>}
        </Button>
      </div>
      <Settings
        checkboxCount={checkboxCount}
        isPasswordLowercaseLetters={passwordLowercaseLetters}
        isPasswordNumbers={passwordNumbers}
        isPasswordSymbols={passwordSymbols}
        isPasswordUppercaseLetters={passwordUppercaseLetters}
        passwordLength={passwordLength}
      />
      <ThemeChangeBar />
    </div>
  );
};
