import { CREATE_PASSWORD_REDUCER_ACTION } from 'enums/createPasswordReducerEnum';
import { CreatePasswordReducerStateType } from 'store/reducers/createPasswordReducer/types';

type SetSymbolsActionPayloadType = {
  symbols: CreatePasswordReducerStateType['symbols'];
};

export type SetSymbolsActionReturnType = {
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_SYMBOLS;
  payload: SetSymbolsActionPayloadType;
};

export type SetSymbolsActionType = (
  payload: SetSymbolsActionPayloadType,
) => SetSymbolsActionReturnType;

export const setSymbolsAction: SetSymbolsActionType = (
  payload,
): SetSymbolsActionReturnType => ({
  type: CREATE_PASSWORD_REDUCER_ACTION.SET_SYMBOLS,
  payload,
});
