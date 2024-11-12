import { BaseValidation } from "./src";

// file to test the functionality of Typescript
const data = BaseValidation.isString().min(10).isEmail().validate(
  "sunday",
  "day"
);

console.log(">>>>>>", data);
