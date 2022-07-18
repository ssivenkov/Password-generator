import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';
import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';

type SetLowercaseLettersActionPayloadType = {
  lowercaseLetters: CreatePasswordReducerStateType['lowercaseLetters'];
};

export type SetLowercaseLettersActionReturnType = {
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_LOWERCASE_LETTERS;
  payload: SetLowercaseLettersActionPayloadType;
};

export type SetLowercaseLettersActionType = (
  payload: SetLowercaseLettersActionPayloadType,
) => SetLowercaseLettersActionReturnType;

export const setLowercaseLettersAction: SetLowercaseLettersActionType = (
  payload,
): SetLowercaseLettersActionReturnType => ({
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_LOWERCASE_LETTERS,
  payload,
});
