import { EIGHT, EMPTY_STRING } from 'constants/common';

import {
  CREATE_PASSWORD_ACTIONS,
  createPasswordActionsType,
} from 'store/actions/CreatePasswordActions';

const initialState = {
  password: EMPTY_STRING,
  length: EIGHT,
  uppercaseLetters: true,
  lowercaseLetters: true,
  numbers: true,
  symbols: true,
  error: false,
  textError: EMPTY_STRING,
  copied: false,
  checkboxCount: 0,
};

export type InitialCreatePasswordStateType = typeof initialState;

export const createPasswordReducer = (
  state: InitialCreatePasswordStateType = initialState,
  action: createPasswordActionsType,
): InitialCreatePasswordStateType => {
  switch (action.type) {
    case CREATE_PASSWORD_ACTIONS.SET_ERROR_MESSAGE:
      return { ...state, error: action.error, textError: action.textError };
    case CREATE_PASSWORD_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.password };
    case CREATE_PASSWORD_ACTIONS.SET_LENGTH:
      return { ...state, length: action.length };
    case CREATE_PASSWORD_ACTIONS.CHANGE_UPPERCASE_LETTERS:
      return { ...state, uppercaseLetters: action.uppercaseLetters };
    case CREATE_PASSWORD_ACTIONS.CHANGE_LOWERCASE_LETTERS:
      return { ...state, lowercaseLetters: action.lowercaseLetters };
    case CREATE_PASSWORD_ACTIONS.CHANGE_NUMBERS:
      return { ...state, numbers: action.numbers };
    case CREATE_PASSWORD_ACTIONS.CHANGE_SYMBOLS:
      return { ...state, symbols: action.symbols };
    case CREATE_PASSWORD_ACTIONS.SET_COPIED_STATUS:
      return { ...state, copied: action.status };
    case CREATE_PASSWORD_ACTIONS.SET_CHECKBOX_COUNT:
      return { ...state, checkboxCount: action.count };
    default:
      return state;
  }
};
