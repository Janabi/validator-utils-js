import { BaseValidation } from "./";
import { TValidationParam } from "../types/base.types";
import { LocalTranslation } from "../utils/loadTranslation.utils";

export class DateValidation extends BaseValidation {
  private loadTranslation: LocalTranslation;
  constructor(param?: TValidationParam) {
    super();
    this.loadTranslation = new LocalTranslation("date", param?.langauge);
    this.addRule((data: string) =>
      typeof data === "string"
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_DATE"),
            messageKey: "INVALID_DATE",
          }
    );
  }
  /**
   * Checks if the date is in the format YYYY-MM-DD.
   * Adds a validation rule that returns true if the date is in the correct format.
   * If the date format is invalid, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isValidFormat(): this {
    this.addRule((data: string) => {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      return datePattern.test(data)
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_DATE_FORMAT"),
            messageKey: "INVALID_DATE_FORMAT",
          };
    });

    return this;
  }

  /**
   * Checks if the date is a valid calendar date.
   * Adds a validation rule that returns true if the date is valid.
   * If the date is invalid (e.g., Feb 30), it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isValidDate(): this {
    this.addRule((data: string) => {
      const [year, month, day] = data.split("-").map(Number);
      const dateObject = new Date(year, month - 1, day);

      const isValid =
        dateObject.getFullYear() === year &&
        dateObject.getMonth() === month - 1 &&
        dateObject.getDate() === day;

      return isValid
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_DATE"),
            messageKey: "INVALID_DATE",
          };
    });

    return this;
  }

  /**
   * Checks if the date is in the past.
   * Adds a validation rule that returns true if the date is earlier than the current date.
   * If the date is in the future, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isInThePast(): this {
    this.addRule((data: string) => {
      const inputDate = new Date(data);
      const currentDate = new Date();

      return inputDate < currentDate
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_PAST_DATE"),
            messageKey: "INVALID_PAST_DATE",
          };
    });

    return this;
  }

  /**
   * Checks if the date is in the future.
   * Adds a validation rule that returns true if the date is later than the current date.
   * If the date is in the past, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isInTheFuture(): this {
    this.addRule((data: string) => {
      const inputDate = new Date(data);
      const currentDate = new Date();

      return inputDate > currentDate
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_FUTURE_DATE"),
            messageKey: "INVALID_FUTURE_DATE",
          };
    });

    return this;
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
  isWithinRange(startDate: string, endDate: string): this {
    this.addRule((data: string) => {
      const inputDate = new Date(data);
      const start = new Date(startDate);
      const end = new Date(endDate);

      return inputDate >= start && inputDate <= end
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_DATE_RANGE"),
            messageKey: "INVALID_DATE_RANGE",
          };
    });

    return this;
  }

  /**
   * Checks if the date falls on a weekend (Saturday or Sunday).
   * Adds a validation rule that returns true if the date is a weekend.
   * If the date is not a weekend, it returns an invalid message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isWeekend(): this {
    this.addRule((data: string) => {
      const inputDate = new Date(data);
      const dayOfWeek = inputDate.getDay(); // 0 = Sunday, 6 = Saturday

      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      return isWeekend
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_NOT_WEEKEND"),
            messageKey: "INVALID_NOT_WEEKEND",
          };
    });

    return this;
  }
}
