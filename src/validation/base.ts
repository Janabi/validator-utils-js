import {
  DateValidation,
  NumberValidation,
  StringValidation,
  BoolValidation,
} from "./";

export class BaseValidation {
  protected rules: any[] = [];

  protected addRule(rule: any) {
    this.rules.push(rule);
  }

  // Validate method to execute all rules in the chain
  protected validate(data: any) {
    for (let rule of this.rules) {
      const result = rule(data);
      if (!result.valid) {
        return result; // Return the first failure
      }
    }
    return { valid: true }; // All validations passed
  }

  static isString() {
    return new StringValidation();
  }

  static isNumber() {
    return new NumberValidation();
  }

  static isDate() {
    return new DateValidation();
  }

  static isBoolean() {
    return new BoolValidation();
  }
}
