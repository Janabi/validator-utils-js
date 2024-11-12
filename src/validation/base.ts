import {
  DateValidation,
  NumberValidation,
  StringValidation,
  BoolValidation,
} from "./";
import { TValidationParam } from "../types/base.types";

export class BaseValidation {
  protected rules: any[] = [];

  protected addRule(rule: any) {
    this.rules.push(rule);
  }

  // Validate method to execute all rules in the chain
  validate(data: any, keyName: string) {
    for (let rule of this.rules) {
      const result = rule(data, keyName);
      if (!result.valid) {
        return result; // Return the first failure
      }
    }
    return { valid: true }; // All validations passed
  }

  static isString(param?: TValidationParam) {
    return new StringValidation(param);
  }

  static isNumber(param?: TValidationParam) {
    return new NumberValidation(param);
  }

  static isDate(param?: TValidationParam) {
    return new DateValidation(param);
  }

  static isBoolean(param?: TValidationParam) {
    return new BoolValidation(param);
  }
}
