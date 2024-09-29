import { StringValidation } from "./";

export class BaseValidation {
  protected rules: any[] = [];

  protected addRule(rule: any) {
    this.rules.push(rule);
  }

  static isString() {
    return new StringValidation();
  }
}
