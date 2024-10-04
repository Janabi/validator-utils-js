import { BaseValidation } from "./";
import { programmingLanguages, daysOfWeek } from '../config'

export class StringValidation extends BaseValidation {

  /**
   * Validates if the string is in a valid email format.
   * Adds a validation rule that returns true if the string matches an email regex pattern.
   * If it does not match, returns an invalid email message.
   * 
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isEmail() {
    return this.addRule((data: string) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const matchedEmail = emailPattern.test(data);
      return matchedEmail
        ? { valid: true }
        : { valid: false, message: "INVALID_EMAIL" };
    });
  }

  /**
   * Validates if the string is a valid phone number in E.164 format.
   * Adds a validation rule that returns true if the string matches the international phone number regex.
   * If it does not match, returns an invalid phone number message.
   * 
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isPhoneNumber() {
    return this.addRule((data: string) => {
      const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/; // E.164 format (international phone numbers)
      const matchedPhoneNumber = phoneNumberPattern.test(data);
      return matchedPhoneNumber
        ? { valid: true }
        : { valid: false, message: "INVALID_PHONE_NUMBER" };
    });
  }

  /**
   * Validates if the string is a valid URL.
   * Adds a validation rule that returns true if the string matches a basic URL pattern.
   * If it does not match, returns an invalid URL message.
   * 
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isUrl() {
    return this.addRule((data: string) => {
      const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
      const matchedUrl = urlPattern.test(data);
      return matchedUrl
        ? { valid: true }
        : { valid: false, message: "INVALID_URL" };
    });
  }

  /**
   * Validates if the string has a minimum length.
   * Adds a validation rule that returns true if the string length is greater than or equal to `minNumber`.
   * If the string length is less, returns an invalid value length message.
   * 
   * @param {number} minNumber - The minimum length allowed for the string.
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  min(minNumber: number) {
    return this.addRule((data: string) =>
      data.length >= minNumber
        ? { valid: true }
        : { valid: false, message: "INVALID_VALUE_LENGTH" }
    );
  }

  /**
   * Validates if the string has a maximum length.
   * Adds a validation rule that returns true if the string length is less than or equal to `maxNumber`.
   * If the string length exceeds the limit, returns an invalid value length message.
   * 
   * @param {number} maxNumber - The maximum length allowed for the string.
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  max(maxNumber: number) {
    return this.addRule((data: string) =>
      data.length <= maxNumber
        ? { valid: true }
        : { valid: false, message: "INVALID_VALUE_LENGTH" }
    );
  }

  /**
   * Validates if the string is a valid JSON format.
   * Adds a validation rule that tries to parse the string as JSON.
   * If parsing succeeds, returns valid. If it throws an error, returns an invalid JSON message.
   * 
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isJson() {
    return this.addRule((data: string) => {
      try {
        JSON.parse(data);
        return { valid: true };
      } catch (err) {
        return { valid: false, message: "INVALID_JSON" };
      }
    });
  }

  /**
   * Validates if the string is a valid UUID (Universally Unique Identifier).
   * Adds a validation rule that returns true if the string matches a standard UUID pattern.
   * If it does not match, returns an invalid UUID message.
   * 
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isUuid() {
    return this.addRule((data: string) => {
      const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      const matchedUuid = uuidPattern.test(data);
      return matchedUuid
        ? { valid: true }
        : { valid: false, message: "INVALID_UUID" };
    });
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
  isFilePath() {
    return this.addRule((data: string) => {
      // Regex pattern for Unix and Windows file paths
      const filePathPattern = /^(\/[^<>:"|?*]+)+\/?|([a-zA-Z]:\\(?:[^<>:"\/\\|?*]+\\)*[^<>:"\/\\|?*]*)$/;
      const matchedFilePath = filePathPattern.test(data);
      return matchedFilePath
        ? { valid: true }
        : { valid: false, message: "INVALID_FILE_PATH" };
    });
  }

  /**
   * Validates if the string is a known programming language name.
   * Adds a validation rule that checks if the string matches one of the known programming languages.
   * 
   * @returns {this} Returns the validation chain with the new rule applied.
   */
  isProgrammingLanguage() {
    return this.addRule((data: string) => {
      const isValidLanguage = programmingLanguages.includes(data);
      return isValidLanguage
        ? { valid: true }
        : { valid: false, message: "INVALID_PROGRAMMING_LANGUAGE" };
    });
  }

  isDay() {
    return this.addRule((data: string) => {
      const isValidDay = daysOfWeek.includes(data.toLowerCase());
      return isValidDay
        ? { valid: true }
        : { valid: false, message: "INVALID_DAY" };
    });
  }
}
