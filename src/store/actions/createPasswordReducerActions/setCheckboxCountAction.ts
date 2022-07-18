import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';
import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';

type SetCheckboxCountActionPayloadType = {
  checkboxCount: CreatePasswordReducerStateType['checkboxCount'];
};

export type SetCheckboxCountActionReturnType = {
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_CHECKBOX_COUNT;
  payload: SetCheckboxCountActionPayloadType;
};

export type SetCheckboxCountActionType = (
  payload: SetCheckboxCountActionPayloadType,
) => SetCheckboxCountActionReturnType;

export const setCheckboxCountAction: SetCheckboxCountActionType = (
  payload,
): SetCheckboxCountActionReturnType => ({
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_CHECKBOX_COUNT,
  payload,
});
