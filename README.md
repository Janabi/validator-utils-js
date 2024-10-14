# Validator Utils JS

**validator-utils-js** is a flexible and lightweight JavaScript validation library for handling common data validation tasks such as validating strings, numbers, dates, and booleans. It provides a simple chainable methods to validate and customize various input types efficiently.

## Features

- **String Validation**: Validate strings, emails, URLs, JSON, and more.
- **Number Validation**: Check for positive, negative, even, odd numbers, etc.
- **Date Validation**: Validate date formats, check if a date is in the past or future, within a range, etc.
- **Boolean Validation**: Validate if a value is a boolean.
- Chainable validation methods for custom validation pipelines.
  
## Installation

To install the package, run the following command:

```bash
npm install validator-utils-js
```

## Usage

Below are examples of how to use the validation utilities provided by **validator-utils-js**.

### Importing the Validators

```javascript
import {
  DateValidation,
  NumberValidation,
  StringValidation,
  BoolValidation,
  BaseValidation
} from 'validator-utils-js';
```

### String Validation

You can chain string validation methods to check for conditions like email format, minimum/maximum length, and more.

```javascript
const stringValidator = BaseValidation.isString()
  .min(5)
  .isEmail()
  .validate("example@example.com");

console.log(stringValidator); // { valid: true }
```

### Number Validation

Number validation supports checks for positive, negative, even, odd numbers, and more.

```javascript
const numberValidator = BaseValidation.isNumber()
  .isPositive()
  .isEven()
  .validate(10);

console.log(numberValidator); // { valid: true }
```

### Date Validation

Date validation allows you to check if the date is valid, in a specific format, and compare dates (e.g., is in the past, is within a range).

```javascript
const dateValidator = BaseValidation.isDate()
  .isValidFormat()  // Check if date format is YYYY-MM-DD
  .isInThePast()    // Check if date is in the past
  .validate("2020-05-15");

console.log(dateValidator); // { valid: true }
```

### Boolean Validation

Boolean validation ensures that the input is a boolean value.

```javascript
const boolValidator = BaseValidation.isBoolean()
  .validate(true);

console.log(boolValidator); // { valid: true }
```

### Example: Validate a Date within a Range

```javascript
const dateRangeValidator = BaseValidation.isDate()
  .isWithinRange("2020-01-01", "2020-12-31")
  .validate("2020-06-15");

console.log(dateRangeValidator); // { valid: true }
```

## API Documentation

### String Validation

- **isEmail()**: Validates if the string is a valid email format.
- **isPhoneNumber()**: Validates if the string is a valid E.164 phone number format.
- **isUrl()**: Validates if the string is a valid URL format.
- **min(length: number)**: Validates if the string has a minimum length.
- **max(length: number)**: Validates if the string has a maximum length.
- **isJson()**: Validates if the string is a valid JSON format.
- **isUuid()**: Validates if the string is a valid UUID.
- **isFilePath()**: Validates if the string is a valid file path.
- **isProgrammingLanguage()**: Validates if the string matches a known programming language.
- **isDay()**: Validates if the string is a valid day of the week.
- **isMonth()**: Validates if the string is a valid month.

### Number Validation

- **isPositive()**: Validates if the number is positive.
- **isNegative()**: Validates if the number is negative.
- **isZero()**: Validates if the number is zero.
- **isOdd()**: Validates if the number is odd.
- **isEven()**: Validates if the number is even.
- **isBitSet(bitPosition: number)**: Validates if a specific bit is set.
- **isLess(value: number)**: Validates if the number is less than the specified value.
- **isGreater(value: number)**: Validates if the number is greater than the specified value.
- **isEqual(value: number)**: Validates if the number is equal to the specified value.

### Date Validation

- **isValidFormat()**: Validates if the date string is in the format `YYYY-MM-DD`.
- **isValidDate()**: Validates if the date is a valid calendar date.
- **isInThePast()**: Validates if the date is in the past.
- **isInTheFuture()**: Validates if the date is in the future.
- **isWithinRange(startDate: string, endDate: string)**: Validates if the date is within a given range.
- **isWeekend()**: Validates if the date falls on a weekend.

### Boolean Validation

- **BaseValidation.isBoolean()**: Checks if the value is a boolean.

## License

This project is licensed under the **ISC License**.  
