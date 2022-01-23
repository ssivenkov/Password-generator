import { EMPTY_STRING } from 'constants/common';
import {
  CREATE_PASSWORD_ACTIONS,
  createPasswordActionsType,
} from 'store/actions/createPasswordActions';

const initialCreatePasswordState = {
  password: EMPTY_STRING,
  length: 12,
  uppercaseLetters: false,
  lowercaseLetters: true,
  numbers: true,
  symbols: false,
  error: false,
  textError: EMPTY_STRING,
};

export type InitialCreatePasswordStateType = typeof initialCreatePasswordState;

export const createPasswordReducer = (
  state: InitialCreatePasswordStateType = initialCreatePasswordState,
  action: createPasswordActionsType,
): InitialCreatePasswordStateType => {
  switch (action.type) {
    case CREATE_PASSWORD_ACTIONS.SET_ERROR_MESSAGE:
      return { ...state, error: action.error, textError: action.textError };
    case CREATE_PASSWORD_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.password };
    case CREATE_PASSWORD_ACTIONS.SET_LENGTH:
      return { ...state, length: action.length };
    default:
      return state;
  }
};
