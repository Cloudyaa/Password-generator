class PasswordGenerator {
  constructor() {
    this.chars = [];
    // range from char no 33 = '!' to no 126 = '~'
    // eslint-disable-next-line no-plusplus
    for (let i = 33; i <= 126; i++) {
      this.chars.push(String.fromCharCode(i));
    }

    // eslint-disable-next-line no-alert
    this.howMany = process.argv[2];
  }

  generate() {
    let newPassword = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.howMany; i++) {
      const index = Math.round(Math.random() * (this.chars.length - 1));
      const newChar = this.chars[index];
      newPassword += newChar;
    }

    return newPassword;
  }
}

const password = new PasswordGenerator();

console.log(password.generate());
