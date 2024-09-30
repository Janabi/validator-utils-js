import { BaseValidation } from "./";

export class StringValidation extends BaseValidation {
  isEmail() {
    return this.addRule((data: string) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const matchedEmail = emailPattern.test(data);
      return matchedEmail
        ? { valid: true }
        : { valid: false, message: "INVALID_EMAIL" };
    });
  }

  isPhoneNumber() {
    return this.addRule((data: string) => {
      const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/; // E.164 format (international phone numbers)
      const matchedPhoneNumber = phoneNumberPattern.test(data);
      return matchedPhoneNumber
        ? { valid: true }
        : { valid: false, message: "INVALID_PHONE_NUMBER" };
    });
  }

  isUrl() {
    return this.addRule((data: string) => {
      const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
      const matchedUrl = urlPattern.test(data);
      return matchedUrl
        ? { valid: true }
        : { valid: false, message: "INVALID_URL" };
    });
  }

  min(minNumber: number) {
    return this.addRule((data: string) =>
      data.length >= minNumber
        ? { valid: true }
        : { valid: false, message: "INVALID_VALUE_LENGTH" }
    );
  }

  max(maxNumber: number) {
    return this.addRule((data: string) =>
      data.length <= maxNumber
        ? { valid: true }
        : { valid: false, message: "INVALID_VALUE_LENGTH" }
    );
  }

  isJson() {
    return this.addRule((data: string) => {
      try {
        JSON.parse(data);
        return { valid: true };
      } catch (err) {
        return { valid: false, message: "INVALID_JSON" }
      }
    });
  }

  
}
