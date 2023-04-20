export type CreatePasswordState = {
  password: string;
  length: number;
  uppercaseLetters: boolean;
  lowercaseLetters: boolean;
  numbers: boolean;
  symbols: boolean;
  copied: boolean;
  checkboxCount: number;
  isLoading: boolean;
  error: string;
};
