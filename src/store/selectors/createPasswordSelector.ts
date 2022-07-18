import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';
import { AppRootStateType } from 'store/store';

export const checkboxCountSelector = (
  state: AppRootStateType,
): CreatePasswordReducerStateType['checkboxCount'] => {
  return state.createPassword.checkboxCount;
};

export const lengthSelector = (
  state: AppRootStateType,
): CreatePasswordReducerStateType['length'] => {
  return state.createPassword.length;
};

export const uppercaseLettersSelector = (
  state: AppRootStateType,
): CreatePasswordReducerStateType['uppercaseLetters'] => {
  return state.createPassword.uppercaseLetters;
};

export const lowercaseLettersSelector = (
  state: AppRootStateType,
): CreatePasswordReducerStateType['lowercaseLetters'] => {
  return state.createPassword.lowercaseLetters;
};

export const numbersSelector = (
  state: AppRootStateType,
): CreatePasswordReducerStateType['numbers'] => {
  return state.createPassword.numbers;
};

export const symbolsSelector = (
  state: AppRootStateType,
): CreatePasswordReducerStateType['symbols'] => {
  return state.createPassword.symbols;
};

export const passwordSelector = (
  state: AppRootStateType,
): CreatePasswordReducerStateType['password'] => {
  return state.createPassword.password;
};

export const copiedSelector = (
  state: AppRootStateType,
): CreatePasswordReducerStateType['copied'] => {
  return state.createPassword.copied;
};
