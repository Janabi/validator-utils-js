const { BaseValidation } = require('./dist/index.js')

// file to test the functionality of Typescript
const data = BaseValidation.isString({ langauge: 'ar' }).min(10).isEmail().validate(
  "sunday",
  "day"
);

console.log(">>>>>>", data);
