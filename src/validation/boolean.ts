import { BaseValidation } from "./";
import { TValidationParam } from "../types/base.types";
import { LocalTranslation } from "../utils/loadTranslation.utils";

export class BoolValidation extends BaseValidation {
  private loadTranslation: LocalTranslation;
  constructor(param?: TValidationParam) {
    super();
    this.loadTranslation = new LocalTranslation("boolean", param?.langauge);
    this.addRule((data: string, keyName: string) =>
      typeof data === "boolean"
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_BOOLEAN", keyName),
            messageKey: "INVALID_BOOLEAN",
          }
    );
  }

  /**
   * Validates if the value is explicitly `true`.
   * Adds a validation rule that checks if the input is strictly equal to `true`.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidation.isBoolean().isTrue().validate(true);
   * BaseValidation.isBoolean().isTrue().validate(false); // Invalid
   */
  isTrue(): this {
    this.addRule((data: boolean, keyName?: string) => {
      const isValidTrue = data === true;

      return isValidTrue
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("NOT_TRUE", keyName || "Input"),
            messageKey: "NOT_TRUE",
          };
    });

    return this;
  }

  /**
   * Validates if the value is explicitly `false`.
   * Adds a validation rule that checks if the input is strictly equal to `false`.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidation.isBoolean().isFalse().validate(false);
   * BaseValidation.isBoolean().isFalse().validate(true); // Invalid
   */
  isFalse(): this {
    this.addRule((data: boolean, keyName?: string) => {
      const isValidFalse = data === false;

      return isValidFalse
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("NOT_FALSE", keyName || "Input"),
            messageKey: "NOT_FALSE",
          };
    });

    return this;
  }

  /**
   * Validates if the boolean value equals the expected value.
   * Adds a validation rule that checks if the input is strictly equal to the expected boolean value.
   *
   * @param {boolean} expected - The expected boolean value to compare against.
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidation.isBoolean().equalsTo(true).validate(true, "isActive");
   * BaseValidation.isBoolean().equalsTo(false).validate(true, "isActive"); // Invalid
   */
  equalsTo(expected: boolean): this {
    this.addRule((data: boolean, keyName?: string) => {
      const isValid = data === expected;

      return isValid
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("DOES_NOT_EQUAL", keyName || "", {
              expected,
            }),
            messageKey: "DOES_NOT_EQUAL",
          };
    });

    return this;
  }

  /**
   * Validates if the value is falsy (e.g., false, 0, null, undefined, "", NaN).
   * Adds a validation rule that checks if the input is falsy.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidation.isBoolean().isFalsy().validate(false, "isDisabled");
   * BaseValidation.isBoolean().isFalsy().validate(true, "isDisabled"); // Invalid
   */
  isFalsy(): this {
    this.addRule((data: any, keyName?: string) => {
      const isValidFalsy = !data;

      return isValidFalsy
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("NOT_FALSY", keyName || ""),
            messageKey: "NOT_FALSY",
          };
    });

    return this;
  }

  /**
   * Validates if the value is truthy (e.g., true, 1, "non-empty string").
   * Adds a validation rule that checks if the input is truthy.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidation.isBoolean().isTruthy().validate(true, "isActive");
   * BaseValidation.isBoolean().isTruthy().validate(false, "isActive"); // Invalid
   */
  isTruthy(): this {
    this.addRule((data: any, keyName?: string) => {
      const isValidFalsy = !!data;

      return isValidFalsy
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("NOT_TRUTHY", keyName || ""),
            messageKey: "NOT_TRUTHY",
          };
    });

    return this;
  }
}
