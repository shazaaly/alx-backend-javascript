export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  get code() {
    return_code;
  }

  get name() {
    return_name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
