import { BaseValidation } from ".";

export class NumberValidation extends BaseValidation {
  /**
   * Checks if the number is positive (greater than or equal to 0).
   * Adds a validation rule that returns true if the number is positive.
   * If the number is negative, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isPositive() {
    return this.addRule((data: number) => {
      return data >= 0
        ? { valid: true }
        : { valid: false, message: "INVALID_POSITIVE" };
    });
  }

  /**
   * Checks if the number is negative (less than or equal to 0).
   * Adds a validation rule that returns true if the number is negative.
   * If the number is positive, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isNegative() {
    return this.addRule((data: number) => {
      return data <= 0
        ? { valid: true }
        : { valid: false, message: "INVALID_NEGATIVE" };
    });
  }

  /**
   * Checks if the number is exactly zero.
   * Adds a validation rule that returns true if the number is zero.
   * If the number is non-zero, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isZero() {
    return this.addRule((data: number) => {
      return data === 0
        ? { valid: true }
        : { valid: false, message: "INVALID_ZERO" };
    });
  }

  /**
   * Checks if the number is odd (not divisible by 2).
   * Adds a validation rule that returns true if the number is odd.
   * If the number is even, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isOdd() {
    return this.addRule((data: number) => {
      return data % 2 !== 0
        ? { valid: true }
        : { valid: false, message: "INVALID_ODD_NUMBER" };
    });
  }

  /**
   * Checks if the number is even (divisible by 2).
   * Adds a validation rule that returns true if the number is even.
   * If the number is odd, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isEven() {
    return this.addRule((data: number) => {
      return data % 2 === 0
        ? { valid: true }
        : { valid: false, message: "INVALID_EVEN_NUMBER" };
    });
  }

  /**
   * Checks if a specific bit is set in the number (i.e., if the bit is 1).
   * Adds a validation rule that returns true if the bit at the given position is set.
   * The bit position is 1-indexed, meaning the least significant bit is bit 1.
   *
   * @param {number} bitPosition - The position of the bit to check (1-based index).
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isBitSet(bitPosition: number) {
    return this.addRule((data: number) => {
      return (data & (1 << (bitPosition - 1))) !== 0;
    });
  }
}
