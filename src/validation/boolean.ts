import { BaseValidation } from ".";

export class BoolValidation extends BaseValidation {
    constructor() {
        super();
        this.addRule((data: string) =>
          typeof data === "boolean"
            ? { valid: true }
            : { valid: false, message: "INVALID_BOOLEAN" }
        );
      }
}
