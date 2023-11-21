export default class User {
  constructor(email, name) {
    this._email = email;
    this._name = name;
  }

  greeting() {
    return `Hi! My name is ${this._name}.`;
  }
}
