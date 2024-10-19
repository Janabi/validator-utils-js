import { ISupportedLanguages } from "./locale.types";

export type SucessValidationMessage = {
  valid: boolean;
};

export type FailureValidationMessage = {
  valid: boolean;
  message: string;
  messageKey: string;
};

export type ValidateReturnMessage =
  | SucessValidationMessage
  | FailureValidationMessage;

export type TValidationParam = {
  langauge?: ISupportedLanguages;
};