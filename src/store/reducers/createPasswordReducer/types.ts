import { SetCheckboxCountActionReturnType } from 'store/actions/createPasswordReducerActions/setCheckboxCountAction';
import { SetCopiedStatusActionReturnType } from 'store/actions/createPasswordReducerActions/setCopiedStatusAction';
import { SetLengthActionReturnType } from 'store/actions/createPasswordReducerActions/setLengthAction';
import { SetLowercaseLettersActionReturnType } from 'store/actions/createPasswordReducerActions/setLowercaseLettersAction';
import { SetNumbersActionReturnType } from 'store/actions/createPasswordReducerActions/setNumbersAction';
import { SetPasswordActionReturnType } from 'store/actions/createPasswordReducerActions/setPasswordAction';
import { SetSymbolsActionReturnType } from 'store/actions/createPasswordReducerActions/setSymbolsAction';
import { SetUppercaseLettersActionReturnType } from 'store/actions/createPasswordReducerActions/setUppercaseLettersAction';

export type CreatePasswordReducerStateType = {
  password: string;
  length: number;
  uppercaseLetters: boolean;
  lowercaseLetters: boolean;
  numbers: boolean;
  symbols: boolean;
  copied: boolean;
  checkboxCount: number;
};

export type CreatePasswordReducerActionsType =
  | SetPasswordActionReturnType
  | SetLengthActionReturnType
  | SetUppercaseLettersActionReturnType
  | SetLowercaseLettersActionReturnType
  | SetNumbersActionReturnType
  | SetSymbolsActionReturnType
  | SetCopiedStatusActionReturnType
  | SetCheckboxCountActionReturnType;
