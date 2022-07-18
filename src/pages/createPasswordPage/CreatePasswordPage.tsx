import {
  ZERO,
  ONE,
  uppercaseLettersArr,
  lowercaseLettersArr,
  numbersArr,
  symbolsArr,
} from 'constants/common';

import { useEffect } from 'react';

import { LongButton } from 'components/common/longButton/LongButton';
import { ThemeChangeBar } from 'components/themeChangeBar/ThemeChangeBar';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckboxCountAction } from 'store/actions/createPasswordReducerActions/setCheckboxCountAction';
import { setCopiedStatusAction } from 'store/actions/createPasswordReducerActions/setCopiedStatusAction';
import { setPasswordAction } from 'store/actions/createPasswordReducerActions/setPasswordAction';
import {
  checkboxCountSelector,
  copiedSelector,
  lengthSelector,
  lowercaseLettersSelector,
  numbersSelector,
  passwordSelector,
  symbolsSelector,
  uppercaseLettersSelector,
} from 'store/selectors/createPasswordSelector';

import styles from './CreatePasswordPage.module.scss';
import { Settings } from './settings/Settings';

export const CreatePasswordPage = () => {
  const dispatch = useDispatch();

  const checkboxCount = useSelector(checkboxCountSelector);
  const passwordLength = useSelector(lengthSelector);
  const passwordUppercaseLetters = useSelector(uppercaseLettersSelector);
  const passwordLowercaseLetters = useSelector(lowercaseLettersSelector);
  const passwordNumbers = useSelector(numbersSelector);
  const passwordSymbols = useSelector(symbolsSelector);
  const password = useSelector(passwordSelector);
  const copiedStatus = useSelector(copiedSelector);

  let result = '';
  const maxSameSignTypeRepeatCount = ONE;
  const passwordSymbolsProportion =
    Number(passwordUppercaseLetters) +
    Number(passwordLowercaseLetters) +
    Number(passwordNumbers) +
    Number(passwordSymbols);
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
    if (passwordUppercaseLetters) signSetsArr.push(uppercaseLettersArr);

    if (passwordLowercaseLetters) signSetsArr.push(lowercaseLettersArr);

    if (passwordNumbers) signSetsArr.push(numbersArr);

    if (passwordSymbols) signSetsArr.push(symbolsArr);
  };

  fillingSignSetsArr();

  const currentCheckboxCount = signSetsArr.length;

  dispatch(setCheckboxCountAction({ checkboxCount: currentCheckboxCount }));

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
      dispatch(setCopiedStatusAction({ copied: false }));
    }

    const password = generatePassword();

    dispatch(setPasswordAction({ password }));
  };

  const onCopyPasswordClick = (): void => {
    navigator.clipboard.writeText(password).then(() => {
      dispatch(setCopiedStatusAction({ copied: true }));
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
