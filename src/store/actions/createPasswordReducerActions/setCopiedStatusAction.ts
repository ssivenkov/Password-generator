import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';
import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';

type SetCopiedStatusActionPayloadType = {
  copied: CreatePasswordReducerStateType['copied'];
};

export type SetCopiedStatusActionReturnType = {
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_COPIED_STATUS;
  payload: SetCopiedStatusActionPayloadType;
};

export type SetCopiedStatusActionType = (
  payload: SetCopiedStatusActionPayloadType,
) => SetCopiedStatusActionReturnType;

export const setCopiedStatusAction: SetCopiedStatusActionType = (
  payload,
): SetCopiedStatusActionReturnType => ({
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_COPIED_STATUS,
  payload,
});
