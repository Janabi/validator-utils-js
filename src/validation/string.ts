import { BaseValidation } from "./";
import { programmingLanguages, daysOfWeek, monthOfYear } from "../config";
import { LocalTranslation } from "../utils/index.utils";
import { TValidationParam } from "../types/base.types";

export class StringValidation extends BaseValidation {
  private loadTranslation: LocalTranslation;
  constructor(param?: TValidationParam) {
    super();
    this.loadTranslation = new LocalTranslation("string", param?.langauge);
    this.addRule((data: string, keyName: string) =>
      typeof data === "string"
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_STRING", keyName),
            messageKey: "INVALID_STRING",
          }
    );
  }
  /**
   * Validates if the string is in a valid email format.
   * Adds a validation rule that returns true if the string matches an email regex pattern.
   * If it does not match, returns an invalid email message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isEmail(): this {
    this.addRule((data: string, keyName: string) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const matchedEmail = emailPattern.test(data);
      return matchedEmail
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_EMAIL", keyName),
            messageKey: "INVALID_EMAIL",
          };
    });

    return this;
  }

  /**
   * Validates if the string is a valid phone number in E.164 format.
   * Adds a validation rule that returns true if the string matches the international phone number regex.
   * If it does not match, returns an invalid phone number message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isPhoneNumber(): this {
    this.addRule((data: string, keyName: string) => {
      const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/; // E.164 format (international phone numbers)
      const matchedPhoneNumber = phoneNumberPattern.test(data);
      return matchedPhoneNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_PHONE_NUMBER", keyName),
            messageKey: "INVALID_PHONE_NUMBER",
          };
    });

    return this;
  }

  /**
   * Validates if the string is a valid URL.
   * Adds a validation rule that returns true if the string matches a basic URL pattern.
   * If it does not match, returns an invalid URL message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isUrl(): this {
    this.addRule((data: string, keyName: string) => {
      const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
      const matchedUrl = urlPattern.test(data);
      return matchedUrl
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_URL", keyName),
            messageKey: "INVALID_URL",
          };
    });

    return this;
  }

  /**
   * Validates if the string has a minimum length.
   * Adds a validation rule that returns true if the string length is greater than or equal to `minNumber`.
   * If the string length is less, returns an invalid value length message.
   *
   * @param {number} minNumber - The minimum length allowed for the string.
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  min(minNumber: number): this {
    this.addRule((data: string, keyName: string) =>
      data.length >= minNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_VALUE_LENGTH", keyName),
            messageKey: "INVALID_VALUE_LENGTH",
          }
    );

    return this;
  }

  /**
   * Validates if the string has a maximum length.
   * Adds a validation rule that returns true if the string length is less than or equal to `maxNumber`.
   * If the string length exceeds the limit, returns an invalid value length message.
   *
   * @param {number} maxNumber - The maximum length allowed for the string.
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  max(maxNumber: number): this {
    this.addRule((data: string, keyName: string) =>
      data.length <= maxNumber
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_VALUE_LENGTH", keyName),
            messageKey: "INVALID_VALUE_LENGTH",
          }
    );

    return this;
  }

  /**
   * Validates if the string is a valid JSON format.
   * Adds a validation rule that tries to parse the string as JSON.
   * If parsing succeeds, returns valid. If it throws an error, returns an invalid JSON message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isJson(): this {
    this.addRule((data: string, keyName: string) => {
      try {
        JSON.parse(data);
        return { valid: true };
      } catch (err) {
        return {
          valid: false,
          message: this.loadTranslation.t("INVALID_JSON", keyName),
          messageKey: "INVALID_JSON",
        };
      }
    });

    return this;
  }

  /**
   * Validates if the string is a valid UUID (Universally Unique Identifier).
   * Adds a validation rule that returns true if the string matches a standard UUID pattern.
   * If it does not match, returns an invalid UUID message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isUuid(): this {
    this.addRule((data: string, keyName: string) => {
      const uuidPattern =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      const matchedUuid = uuidPattern.test(data);
      return matchedUuid
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_UUID", keyName),
            messageKey: "INVALID_UUID",
          };
    });

    return this;
  }

  /**
   * Validates if the string is a valid file path for both Windows and Unix-based systems.
   * Adds a validation rule that returns true if the string matches a valid file path pattern.
   *
   * Windows file path example: C:\Users\Name\file.txt
   * Unix file path example: /home/user/file.txt
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isFilePath(): this {
    this.addRule((data: string, keyName: string) => {
      // Regex pattern for Unix and Windows file paths
      const filePathPattern =
        /^(\/[^<>:"|?*]+)+\/?|([a-zA-Z]:\\(?:[^<>:"\/\\|?*]+\\)*[^<>:"\/\\|?*]*)$/;
      const matchedFilePath = filePathPattern.test(data);
      return matchedFilePath
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_FILE_PATH", keyName),
            messageKey: "INVALID_FILE_PATH",
          };
    });

    return this;
  }

  /**
   * Validates if the string is a known programming language name.
   * Adds a validation rule that checks if the string matches one of the known programming languages.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isProgrammingLanguage(): this {
    this.addRule((data: string, keyName: string) => {
      const isValidLanguage = programmingLanguages.includes(data);
      return isValidLanguage
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t(
              "INVALID_PROGRAMMING_LANGUAGE",
              keyName
            ),
            messageKey: "INVALID_PROGRAMMING_LANGUAGE",
          };
    });

    return this;
  }

  /**
   * Adds a rule to check if the input is a valid day of the week.
   * The input is validated by checking if it matches one of the days in the `daysOfWeek` array.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidator.isString().isDay().validate("monday");
   *
   * Note: This method is case-insensitive, so "Monday" and "monday" both pass validation.
   */
  isDay(): this {
    this.addRule((data: string, keyName: string) => {
      const isValidDay = daysOfWeek.includes(data.toLowerCase());
      return isValidDay
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_DAY", keyName),
            messageKey: "INVALID_DAY",
          };
    });

    return this;
  }

  /**
   * Adds a rule to check if the input is a valid month of the year.
   * The input is validated by checking if it matches one of the months in the `monthOfYear` array.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidator.isString().isMonth().validate("january");
   *
   * Note: This method is case-insensitive, so "January" and "january" both pass validation.
   */
  isMonth(): this {
    this.addRule((data: string, keyName: string) => {
      const isValidMonth = monthOfYear.includes(data.toLowerCase());
      return isValidMonth
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_MONTH", keyName),
            messageKey: "INVALID_MONTH",
          };
    });

    return this;
  }

  /**
   * Validates if the string is a valid credit card number.
   * Adds a validation rule that returns true if the string matches a standard credit card pattern
   * and passes the Luhn algorithm check.
   * If it does not match, returns an invalid credit card message.
   *
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isCreditCard(): this {
    this.addRule((data: string, keyName: string) => {
      const creditCardPattern =
        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
      const isValidPattern = creditCardPattern.test(data);

      const isValidLuhn = this.luhnCheck(data);

      return isValidPattern && isValidLuhn
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_CREDIT_CARD", keyName),
            messageKey: "INVALID_CREDIT_CARD",
          };
    });

    return this;
  }

  /*
   * Adds a rule to check if the input contains only alphanumeric characters.
   * This method validates by ensuring the string contains only letters and numbers.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidator.isString().isAlphanum().validate("abc123");
   *
   * Note: This method does not allow special characters or spaces.
   */
  isAlphanum(): this {
    this.addRule((data: string, keyName: string) => {
      const alphanumPattern = /^[a-zA-Z0-9]+$/;
      const isValidAlphanum = alphanumPattern.test(data);

      return isValidAlphanum
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t("INVALID_ALPHANUM", keyName),
            messageKey: "INVALID_ALPHANUM",
          };
    });

    return this;
  }

  /**
   * Validates if the string is a valid token.
   * Adds a validation rule that checks if the input matches a typical token format.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidator.isString().isToken().validate("abc123.456-def", "apiToken");
   *
   * Note: You can customize the token regex to match your specific token structure.
   */
  isToken(): this {
    this.addRule((data: string, keyName: string) => {
      // Regex to match a token: alphanumeric characters, dots, dashes, and underscores
      const tokenPattern = /^[a-zA-Z0-9._-]+$/;

      const isValidToken = tokenPattern.test(data);

      return isValidToken
        ? { valid: true }
        : {
            valid: false,
            message: `${keyName || "Input"}: ${this.loadTranslation.t(
              "INVALID_TOKEN",
              keyName
            )}`,
            messageKey: "INVALID_TOKEN",
          };
    });

    return this;
  }

  /**
   * Validates if the string is a valid hexadecimal value.
   * Adds a validation rule that checks if the input matches a hexadecimal format.
   *
   * @returns {this} - The current instance for method chaining.
   *
   * Example usage:
   * BaseValidator.isString().isHexadecimal().validate("1a3f");
   *
   * Note: The method supports both uppercase and lowercase hexadecimal characters.
   */
  isHexadecimal(): this {
    this.addRule((data: string, keyName?: string) => {
      // Regex to match hexadecimal values
      const hexPattern = /^[0-9a-fA-F]+$/;

      const isValidHex = hexPattern.test(data);

      return isValidHex
        ? { valid: true }
        : {
            valid: false,
            message: this.loadTranslation.t(
              "INVALID_HEXADECIMAL",
              keyName || ""
            ),
            messageKey: "INVALID_HEXADECIMAL",
          };
    });

    return this;
  }

  /**
   * Luhn algorithm to validate credit card numbers.
   * @param {string} cardNumber - The credit card number to validate.
   * @returns {boolean} - True if the card number passes the Luhn check, false otherwise.
   */
  private luhnCheck(cardNumber: string): boolean {
    let sum = 0;
    let shouldDouble = false;

    // Process each digit starting from the right
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  }
}
