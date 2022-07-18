import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';
import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';

type SetLengthActionPayloadType = {
  length: CreatePasswordReducerStateType['length'];
};

export type SetLengthActionReturnType = {
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_LENGTH;
  payload: SetLengthActionPayloadType;
};

export type SetLengthActionType = (
  payload: SetLengthActionPayloadType,
) => SetLengthActionReturnType;

export const setLengthAction: SetLengthActionType = (
  payload,
): SetLengthActionReturnType => ({
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_LENGTH,
  payload,
});
