import { BaseValidation } from "./src";

// file to test the functionality of Typescript
const data = BaseValidation.isString().min(10).isDay().validate(
  "sunday"
);

console.log(">>>>>>", data);
