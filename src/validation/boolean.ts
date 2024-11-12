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
}
