export interface ConfigProps {
  length2: number;
  numbers: boolean;
  letters: boolean;
  specialCharacters: boolean;
  lockedSpecialCharacters: boolean;
}

export enum characters {
  default = '',
  numbers = '0123456789',
  letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  specialCharacters = '!§$%/()´`^°*~#|,:._-€@',
  lockedSpecialCharacters = '\\?"[{\'&>;+}=]<',
}
