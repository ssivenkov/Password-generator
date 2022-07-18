import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';
import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';

type SetPasswordActionPayloadType = {
  password: CreatePasswordReducerStateType['password'];
};

export type SetPasswordActionReturnType = {
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_PASSWORD;
  payload: SetPasswordActionPayloadType;
};

export type SetPasswordActionType = (
  payload: SetPasswordActionPayloadType,
) => SetPasswordActionReturnType;

export const setPasswordAction: SetPasswordActionType = (
  payload,
): SetPasswordActionReturnType => ({
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_PASSWORD,
  payload,
});
