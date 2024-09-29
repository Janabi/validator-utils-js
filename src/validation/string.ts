import { BaseValidation } from "./";

export class StringValidation extends BaseValidation {
  isEmail() {
    return this.addRule((data: string) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const matchedEmail = emailPattern.test(data);
      return matchedEmail ? { valid: true } : { valid: false, message: "INVALID_EMAIL" };
    });
  }
}
