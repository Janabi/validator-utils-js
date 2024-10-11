import { BaseValidation } from "./src";

const data = (BaseValidation.isString().min(10).isDay() as any).validate(
  "sunday"
);

console.log(">>>>>>", data);
