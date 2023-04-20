import { EIGHT } from 'constants/common';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreatePasswordState } from './types';

const initialState: CreatePasswordState = {
  password: '',
  length: EIGHT,
  uppercaseLetters: true,
  lowercaseLetters: true,
  numbers: true,
  symbols: true,
  copied: false,
  checkboxCount: 0,
  isLoading: false,
  error: '',
};

export const createPasswordSlice = createSlice({
  name: 'createPassword',
  initialState,
  reducers: {
    setCopiedStatus(state, action: PayloadAction<CreatePasswordState['copied']>) {
      state.copied = action.payload;
    },

    setPassword(state, action: PayloadAction<CreatePasswordState['password']>) {
      state.password = action.payload;
    },

    setCheckboxCount(state, action: PayloadAction<CreatePasswordState['checkboxCount']>) {
      state.checkboxCount = action.payload;
    },

    setLength(state, action: PayloadAction<CreatePasswordState['length']>) {
      state.length = action.payload;
    },

    setUppercaseLetters(
      state,
      action: PayloadAction<CreatePasswordState['uppercaseLetters']>,
    ) {
      state.uppercaseLetters = action.payload;
    },

    setLowercaseLetters(
      state,
      action: PayloadAction<CreatePasswordState['lowercaseLetters']>,
    ) {
      state.lowercaseLetters = action.payload;
    },

    setNumbers(state, action: PayloadAction<CreatePasswordState['numbers']>) {
      state.numbers = action.payload;
    },

    setSymbols(state, action: PayloadAction<CreatePasswordState['symbols']>) {
      state.symbols = action.payload;
    },
  },
});

export default createPasswordSlice.reducer;
