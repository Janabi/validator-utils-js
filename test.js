const { BaseValidation } = require("./dist/index.js");

// file to test the functionality of Typescript
const data = BaseValidation.isString({ langauge: "en" })
  .min(10)
  .isEmail()
  .validate("sunday", "day");

console.log(">>>>>>", data);

const currency = BaseValidation.isString()
  .isCurrency()
  .validate("1003", "dollar");
console.log(">>>>> ", currency);
