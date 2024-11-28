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
}
