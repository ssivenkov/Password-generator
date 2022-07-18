import { EIGHT } from 'constants/common';

import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';

import {
  CreatePasswordReducerActionsType,
  CreatePasswordReducerStateType,
} from './types';

const initialState = {
  password: '',
  length: EIGHT,
  uppercaseLetters: true,
  lowercaseLetters: true,
  numbers: true,
  symbols: true,
  copied: false,
  checkboxCount: 0,
};

export const createPasswordReducer = (
  state: CreatePasswordReducerStateType = initialState,
  action: CreatePasswordReducerActionsType,
): CreatePasswordReducerStateType => {
  switch (action.type) {
    case CREATE_PASSWORD_REDUCER_ACTION.SET_PASSWORD:
      return { ...state, password: action.payload.password };
    case CREATE_PASSWORD_REDUCER_ACTION.SET_LENGTH:
      return { ...state, length: action.payload.length };
    case CREATE_PASSWORD_REDUCER_ACTION.SET_UPPERCASE_LETTERS:
      return { ...state, uppercaseLetters: action.payload.uppercaseLetters };
    case CREATE_PASSWORD_REDUCER_ACTION.SET_LOWERCASE_LETTERS:
      return { ...state, lowercaseLetters: action.payload.lowercaseLetters };
    case CREATE_PASSWORD_REDUCER_ACTION.SET_NUMBERS:
      return { ...state, numbers: action.payload.numbers };
    case CREATE_PASSWORD_REDUCER_ACTION.SET_SYMBOLS:
      return { ...state, symbols: action.payload.symbols };
    case CREATE_PASSWORD_REDUCER_ACTION.SET_COPIED_STATUS:
      return { ...state, copied: action.payload.copied };
    case CREATE_PASSWORD_REDUCER_ACTION.SET_CHECKBOX_COUNT:
      return { ...state, checkboxCount: action.payload.checkboxCount };
    default:
      return state;
  }
};
