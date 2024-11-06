const { BaseValidation } = require("./dist/validation");

const data = BaseValidation.isString().min(10).isDay().validate("sunday");

console.log(">>>>>>", data);