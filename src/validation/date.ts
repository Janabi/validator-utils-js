import { BaseValidation } from ".";

export class DateValidation extends BaseValidation {
  /**
   * Checks if the date is in the format YYYY-MM-DD.
   * Adds a validation rule that returns true if the date is in the correct format.
   * If the date format is invalid, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isValidFormat() {
    return this.addRule((data: string) => {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      return datePattern.test(data)
        ? { valid: true }
        : { valid: false, message: "INVALID_DATE_FORMAT" };
    });
  }

  /**
   * Checks if the date is a valid calendar date.
   * Adds a validation rule that returns true if the date is valid.
   * If the date is invalid (e.g., Feb 30), it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isValidDate() {
    return this.addRule((data: string) => {
      const [year, month, day] = data.split("-").map(Number);
      const dateObject = new Date(year, month - 1, day);

      const isValid =
        dateObject.getFullYear() === year &&
        dateObject.getMonth() === month - 1 &&
        dateObject.getDate() === day;

      return isValid
        ? { valid: true }
        : { valid: false, message: "INVALID_DATE" };
    });
  }

  /**
   * Checks if the date is in the past.
   * Adds a validation rule that returns true if the date is earlier than the current date.
   * If the date is in the future, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isInThePast() {
    return this.addRule((data: string) => {
      const inputDate = new Date(data);
      const currentDate = new Date();

      return inputDate < currentDate
        ? { valid: true }
        : { valid: false, message: "INVALID_PAST_DATE" };
    });
  }

  /**
   * Checks if the date is in the future.
   * Adds a validation rule that returns true if the date is later than the current date.
   * If the date is in the past, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isInTheFuture() {
    return this.addRule((data: string) => {
      const inputDate = new Date(data);
      const currentDate = new Date();

      return inputDate > currentDate
        ? { valid: true }
        : { valid: false, message: "INVALID_FUTURE_DATE" };
    });
  }

  /**
   * Checks if the date is within a specified range.
   * Adds a validation rule that returns true if the date is within the given range.
   * If the date is outside the range, it returns an invalid message.
   *
   * @param {string} startDate - The start date of the range in YYYY-MM-DD format.
   * @param {string} endDate - The end date of the range in YYYY-MM-DD format.
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isWithinRange(startDate: string, endDate: string) {
    return this.addRule((data: string) => {
      const inputDate = new Date(data);
      const start = new Date(startDate);
      const end = new Date(endDate);

      return inputDate >= start && inputDate <= end
        ? { valid: true }
        : { valid: false, message: "INVALID_DATE_RANGE" };
    });
  }
}
