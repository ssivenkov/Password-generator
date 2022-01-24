import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '../common/Checkbox/Checkbox';

import style from './CreatePassword.module.scss';

import { Button } from 'components/common/Button/Button';
import {
  ONE,
  lowercaseLettersArr,
  numbersArr,
  symbolsArr,
  uppercaseLettersArr,
  ZERO,
  TWO,
} from 'constants/common';
import {
  changeLowercaseLetters,
  changeNumbers,
  changeSymbols,
  changeUppercaseLetters,
  setPassword,
} from 'store/actions/createPasswordActions';
import { AppRootStateType } from 'store/store';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const CreatePassword = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const passwordLength = useSelector<AppRootStateType, number>(
    state => state.createPassword.length,
  );
  const passwordUppercaseLetters = useSelector<AppRootStateType, boolean>(
    state => state.createPassword.uppercaseLetters,
  );
  const passwordLowercaseLetters = useSelector<AppRootStateType, boolean>(
    state => state.createPassword.lowercaseLetters,
  );
  const passwordNumbers = useSelector<AppRootStateType, boolean>(
    state => state.createPassword.numbers,
  );
  const passwordSymbols = useSelector<AppRootStateType, boolean>(
    state => state.createPassword.symbols,
  );
  const password = useSelector<AppRootStateType, string>(
    state => state.createPassword.password,
  );

  let result = '';
  const maxSameSignTypeRepeatCount = TWO;
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

  const signSetsArr: Array<any> = [];
  const fillingSignSetsArr = (): void => {
    if (passwordUppercaseLetters) signSetsArr.push(uppercaseLettersArr);
    if (passwordLowercaseLetters) signSetsArr.push(lowercaseLettersArr);
    if (passwordNumbers) signSetsArr.push(numbersArr);
    if (passwordSymbols) signSetsArr.push(symbolsArr);
  };
  fillingSignSetsArr();

  const generatePassword = (): string => {
    addPortion(signSetsArr[Math.floor(Math.random() * signSetsArr.length)]);
    const checkNewPasswordLength = (): any => {
      addPortion(signSetsArr[Math.floor(Math.random() * signSetsArr.length)]);
      if (result.length < passwordLength) {
        checkNewPasswordLength();
      }
    };
    checkNewPasswordLength();
    result = result.slice(ZERO, passwordLength);
    return result;
  };

  const onPasswordGenerateClick = (): void => {
    const newPassword = generatePassword();
    dispatch(setPassword(newPassword));
  };

  useEffect(() => {
    onPasswordGenerateClick();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.description}>
        Generate secure, random passwords to stay safe online
      </div>
      <div className={style.passwordContainer}>
        <div className={style.password}>{password}</div>
      </div>
      <div className={style.buttonsContainer}>
        <Button onClick={() => onPasswordGenerateClick()}>Generate</Button>
      </div>
      <div className={style.settingsContainer}>
        <div>Settings</div>
        <div>
          <span>length: {passwordLength}</span>
          <div>
            <Checkbox
              onChangeChecked={() =>
                dispatch(changeUppercaseLetters(!passwordUppercaseLetters))
              }
              checked={passwordUppercaseLetters}
            >
              Uppercase letters: {`${passwordUppercaseLetters}`}
            </Checkbox>
          </div>
          <div>
            <Checkbox
              onChangeChecked={() =>
                dispatch(changeLowercaseLetters(!passwordLowercaseLetters))
              }
              checked={passwordLowercaseLetters}
            >
              Lowercase letters: {`${passwordLowercaseLetters}`}
            </Checkbox>
          </div>
          <div>
            <Checkbox
              onChangeChecked={() => dispatch(changeNumbers(!passwordNumbers))}
              checked={passwordNumbers}
            >
              Numbers: {`${passwordNumbers}`}
            </Checkbox>
          </div>
          <div>
            <Checkbox
              onChangeChecked={() => dispatch(changeSymbols(!passwordSymbols))}
              checked={passwordSymbols}
            >
              Symbols: {`${passwordSymbols}`}
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};
