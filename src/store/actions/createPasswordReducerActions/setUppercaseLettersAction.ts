import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';
import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';

type SetUppercaseLettersActionPayloadType = {
  uppercaseLetters: CreatePasswordReducerStateType['uppercaseLetters'];
};

export type SetUppercaseLettersActionReturnType = {
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_UPPERCASE_LETTERS;
  payload: SetUppercaseLettersActionPayloadType;
};

export type SetUppercaseLettersActionType = (
  payload: SetUppercaseLettersActionPayloadType,
) => SetUppercaseLettersActionReturnType;

export const setUppercaseLettersAction: SetUppercaseLettersActionType = (
  payload,
): SetUppercaseLettersActionReturnType => ({
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_UPPERCASE_LETTERS,
  payload,
});
