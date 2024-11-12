import { BaseValidation } from "./";
import { TValidationParam } from "../types/base.types";
import { LocalTranslation } from "../utils/loadTranslation.utils";

export class NumberValidation extends BaseValidation {
  private loadTranslation: LocalTranslation;
  constructor(param?: TValidationParam) {
    super();
    this.loadTranslation = new LocalTranslation("number", param?.langauge);
    this.addRule((data: number, keyName: string) =>
      typeof data === "number"
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_NUMBER", keyName),
            messageKey: "INVALID_NUMBER",
          }
    );
  }
  /**
   * Checks if the number is positive (greater than or equal to 0).
   * Adds a validation rule that returns true if the number is positive.
   * If the number is negative, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isPositive(): this {
    this.addRule((data: number, keyName: string) => {
      return data >= 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_POSITIVE", keyName),
            messageKey: "INVALID_POSITIVE",
          };
    });

    return this;
  }

  /**
   * Checks if the number is negative (less than or equal to 0).
   * Adds a validation rule that returns true if the number is negative.
   * If the number is positive, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isNegative(): this {
    this.addRule((data: number, keyName: string) => {
      return data <= 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_NEGATIVE", keyName),
            messageKey: "INVALID_NEGATIVE",
          };
    });

    return this;
  }

  /**
   * Checks if the number is exactly zero.
   * Adds a validation rule that returns true if the number is zero.
   * If the number is non-zero, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isZero(): this {
    this.addRule((data: number, keyName: string) => {
      return data === 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_ZERO", keyName),
            messageKey: "INVALID_ZERO",
          };
    });

    return this;
  }

  /**
   * Checks if the number is odd (not divisible by 2).
   * Adds a validation rule that returns true if the number is odd.
   * If the number is even, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isOdd(): this {
    this.addRule((data: number, keyName: string) => {
      return data % 2 !== 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_ODD_NUMBER", keyName),
            messageKey: "INVALID_ODD_NUMBER",
          };
    });

    return this;
  }

  /**
   * Checks if the number is even (divisible by 2).
   * Adds a validation rule that returns true if the number is even.
   * If the number is odd, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isEven(): this {
    this.addRule((data: number, keyName: string) => {
      return data % 2 === 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_EVEN_NUMBER", keyName),
            messageKey: "INVALID_EVEN_NUMBER",
          };
    });

    return this;
  }

  /**
   * Adds a rule to check if the input number is less than the specified suggested number.
   * This validation will pass if the input number is less than the given number.
   *
   * @param {number} suggestedNumber - The number to compare against.
   * @returns {this} Returns the validation chain with the new rule applied.
   *
   * Example usage:
   * BaseValidator.isNumber().isLess(10).validate(8); // valid: true
   */
  isLess(suggestedNumber: number): this {
    this.addRule((data: number, keyName: string) => {
      return data < suggestedNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_LESS", keyName),
            messageKey: "INVALID_LESS",
          };
    });

    return this;
  }

  /**
   * Adds a rule to check if the input number is greater than the specified suggested number.
   * This validation will pass if the input number is greater than the given number.
   *
   * @param {number} suggestedNumber - The number to compare against.
   * @returns {this} Returns the validation chain with the new rule applied.
   *
   * Example usage:
   * BaseValidator.isNumber().isGreater(10).validate(12); // valid: true
   */
  isGreater(suggestedNumber: number): this {
    this.addRule((data: number, keyName: string) => {
      return data > suggestedNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_GREATER", keyName),
            messageKey: "INVALID_GREATER",
          };
    });

    return this;
  }

  /**
   * Adds a rule to check if the input number is equal to the specified suggested number.
   * This validation will pass if the input number is exactly equal to the given number.
   *
   * @param {number} suggestedNumber - The number to compare for equality.
   * @returns {this} Returns the validation chain with the new rule applied.
   *
   * Example usage:
   * BaseValidator.isNumber().isEqual(5).validate(5); // valid: true
   */
  isEqual(suggestedNumber: number): this {
    this.addRule((data: number, keyName: string) => {
      return data === suggestedNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_EQUAL", keyName),
            messageKey: "INVALID_EQUAL",
          };
    });

    return this;
  }

  /**
   * Adds a rule to check if the input number is a multiple of a specified number.
   * This method validates by ensuring the input number is divisible by the provided divisor without a remainder.
   *
   * @param {number} divisor - The number to check for multiples.
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidator.isNumber().isMultipleOf(5).validate(10); // valid
   *
   * Note: The divisor should be a non-zero integer to avoid division errors.
   */
  isMultipleOf(divisor: number): this {
    if (divisor === 0) {
      throw new Error("Divisor cannot be zero.");
    }

    this.addRule((data: number, keyName: string) => {
      const isValidMultiple = data % divisor === 0;
      return isValidMultiple
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_MULTIPLE", keyName, { divisor }),
            messageKey: "INVALID_MULTIPLE",
          };
    });

    return this;
  }
}
