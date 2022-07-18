import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';
import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';

type SetNumbersActionPayloadType = {
  numbers: CreatePasswordReducerStateType['numbers'];
};

export type SetNumbersActionReturnType = {
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_NUMBERS;
  payload: SetNumbersActionPayloadType;
};

export type SetNumbersActionType = (
  payload: SetNumbersActionPayloadType,
) => SetNumbersActionReturnType;

export const setNumbersAction: SetNumbersActionType = (
  payload,
): SetNumbersActionReturnType => ({
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_NUMBERS,
  payload,
});
