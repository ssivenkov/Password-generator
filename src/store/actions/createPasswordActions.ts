export enum CREATE_PASSWORD_ACTIONS {
  SET_ERROR_MESSAGE = 'createPasswordReducer/SET-ERROR-MESSAGE',
  SET_PASSWORD = 'createPasswordReducer/SET-PASSWORD',
  SET_LENGTH = 'createPasswordReducer/SET-LENGTH',
  CHANGE_UPPERCASE_LETTERS = 'createPasswordReducer/CHANGE-UPPERCASE-LETTERS',
  CHANGE_LOWERCASE_LETTERS = 'createPasswordReducer/CHANGE-LOWERCASE-LETTERS',
  CHANGE_NUMBERS = 'createPasswordReducer/CHANGE-NUMBERS',
  CHANGE_SYMBOLS = 'createPasswordReducer/CHANGE-SYMBOLS',
}

export type createPasswordActionsType =
  | ReturnType<typeof setErrorMessage>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setLength>
  | ReturnType<typeof changeUppercaseLetters>
  | ReturnType<typeof changeLowercaseLetters>
  | ReturnType<typeof changeNumbers>
  | ReturnType<typeof changeSymbols>;

export const setErrorMessage = (error: boolean, textError: string) =>
  ({ type: CREATE_PASSWORD_ACTIONS.SET_ERROR_MESSAGE, error, textError } as const);

export const setPassword = (password: string) =>
  ({ type: CREATE_PASSWORD_ACTIONS.SET_PASSWORD, password } as const);

export const setLength = (length: number) =>
  ({ type: CREATE_PASSWORD_ACTIONS.SET_LENGTH, length } as const);

export const changeUppercaseLetters = (uppercaseLetters: boolean) =>
  ({ type: CREATE_PASSWORD_ACTIONS.CHANGE_UPPERCASE_LETTERS, uppercaseLetters } as const);

export const changeLowercaseLetters = (lowercaseLetters: boolean) =>
  ({ type: CREATE_PASSWORD_ACTIONS.CHANGE_LOWERCASE_LETTERS, lowercaseLetters } as const);

export const changeNumbers = (numbers: boolean) =>
  ({ type: CREATE_PASSWORD_ACTIONS.CHANGE_NUMBERS, numbers } as const);

export const changeSymbols = (symbols: boolean) =>
  ({ type: CREATE_PASSWORD_ACTIONS.CHANGE_SYMBOLS, symbols } as const);
