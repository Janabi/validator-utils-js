import { BaseValidation } from "./src";

// const data = BaseValidation.isString().min(10).isDay().validate(
//   "sunday"
// );
const data = BaseValidation.isBoolean().validate('sss');

console.log(">>>>>>", data);
