export type SucessValidationMessage = {
  valid: boolean;
};

export type FailureValidationMessage = {
  valid: boolean;
  message: string;
};

export type ValidateReturnMessage =
  | SucessValidationMessage
  | FailureValidationMessage;
