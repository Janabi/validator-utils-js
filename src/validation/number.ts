import { BaseValidation } from "./";
import { TValidationParam } from "../types/base.types";
import { LocalTranslation } from "../utils/loadTranslation.utils";

export class NumberValidation extends BaseValidation {
  private loadTranslation: LocalTranslation;
  constructor(param?: TValidationParam) {
    super();
    this.loadTranslation = new LocalTranslation("number", param?.langauge);
    this.addRule((data: number) =>
      typeof data === "number"
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_NUMBER"),
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
    this.addRule((data: number) => {
      return data >= 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_POSITIVE"),
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
    this.addRule((data: number) => {
      return data <= 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_NEGATIVE"),
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
    this.addRule((data: number) => {
      return data === 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_ZERO"),
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
    this.addRule((data: number) => {
      return data % 2 !== 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_ODD_NUMBER"),
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
    this.addRule((data: number) => {
      return data % 2 === 0
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_EVEN_NUMBER"),
            messageKey: "INVALID_EVEN_NUMBER",
          };
    });

    return this;
  }

  /**
   * Checks if a specific bit is set in the number (i.e., if the bit is 1).
   * Adds a validation rule that returns true if the bit at the given position is set.
   * The bit position is 1-indexed, meaning the least significant bit is bit 1.
   *
   * @param {number} bitPosition - The position of the bit to check (1-based index).
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  // this method is deprecated
  // isBitSet(bitPosition: number): this {
  //   this.addRule((data: number) => {
  //     return (data & (1 << (bitPosition - 1))) !== 0;
  //   });

  //   return this;
  // }

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
    this.addRule((data: number) => {
      return data < suggestedNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_LESS"),
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
    this.addRule((data: number) => {
      return data > suggestedNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_GREATER"),
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
    this.addRule((data: number) => {
      return data === suggestedNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_EQUAL"),
            messageKey: "INVALID_EQUAL",
          };
    });

    return this;
  }
}
