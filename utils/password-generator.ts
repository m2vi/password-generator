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

export class PasswordGenerator {
  private getRandomNumbers(length: number) {
    let array = new Uint8Array(length);
    let res = new Float32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < array.length; i++) {
      if (array[i] % 0xff === 0) {
        array[i] = 0xfe;
      }
      res[i] = array[i] / 0xff;
    }
    return res;
  }

  public getPassword(config: ConfigProps) {
    const characters = this.genChars(config);
    let randomness = this.getRandomNumbers(config.length2);

    var result = [];
    for (let i = 0; i < config.length2; i++) {
      let char = characters.charAt(Math.floor(randomness[i] * characters.length));

      result.push(char);
    }

    let res = result.join('');

    return res;
  }

  private genChars(config: ConfigProps) {
    let chars = '';

    if (config.numbers) {
      chars += characters.numbers;
    }
    if (config.letters) {
      chars += characters.letters;
    }
    if (config.specialCharacters) {
      chars += characters.specialCharacters;
    }
    if (config.lockedSpecialCharacters) {
      chars += characters.lockedSpecialCharacters;
    }

    return chars;
  }
}
