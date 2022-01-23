export enum CREATE_PASSWORD_ACTIONS {
  SET_ERROR_MESSAGE = 'createPasswordReducer/SET-ERROR-MESSAGE',
  SET_PASSWORD = 'createPasswordReducer/SET-PASSWORD',
  SET_LENGTH = 'createPasswordReducer/SET-LENGTH',
}

export type createPasswordActionsType =
  | ReturnType<typeof setErrorMessage>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setLength>;

export const setErrorMessage = (error: boolean, textError: string) =>
  ({ type: CREATE_PASSWORD_ACTIONS.SET_ERROR_MESSAGE, error, textError } as const);

export const setPassword = (password: string) =>
  ({ type: CREATE_PASSWORD_ACTIONS.SET_PASSWORD, password } as const);

export const setLength = (length: number) =>
  ({ type: CREATE_PASSWORD_ACTIONS.SET_LENGTH, length } as const);
