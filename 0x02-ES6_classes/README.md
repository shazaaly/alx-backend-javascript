# ES6 Classes Project

## Description
This repository contains a series of JavaScript exercises focused on the use of ES6 classes, covering concepts such as class definition, inheritance, static methods, getters, setters, and symbols.

## Tasks

### Task 0: ClassRoom Class
- File: `0-classroom.js`
- Description: Implementation of a class named `ClassRoom`.
- Features:
  - Accepts a `maxStudentsSize` attribute and assigns it to `_maxStudentsSize`.

### Task 1: Make Classrooms
- File: `1-make_classrooms.js`
- Description: Function `initializeRooms` that returns an array of `ClassRoom` objects.
- Features:
  - Creates and returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

### Task 2: HolbertonCourse Class
- File: `2-hbtn_course.js`
- Description: Class `HolbertonCourse` with name, length, and students attributes.
- Features:
  - Constructor with validation for attribute types.
  - Getter and setter for each attribute.

### Task 3: Currency Class
- File: `3-currency.js`
- Description: `Currency` class with code and name attributes.
- Features:
  - Getter and setter for each attribute.
  - Method `displayFullCurrency` to format the output.

### Task 4: Pricing Class
- File: `4-pricing.js`
- Description: `Pricing` class representing a price in a specific currency.
- Features:
  - Constructor with `amount` and `currency` attributes.
  - Method `displayFullPrice` for formatted output.
  - Static method `convertPrice` for currency conversion.

### Task 5: Building Class
- File: `5-building.js`
- Description: Abstract class `Building`.
- Features:
  - Enforces implementation of `evacuationWarningMessage` in subclasses.

### Task 6: SkyHighBuilding Class
- File: `6-sky_high.js`
- Description: `SkyHighBuilding` class extending `Building`.
- Features:
  - Additional attribute `floors`.
  - Custom `evacuationWarningMessage` implementation.

### Task 7: Airport Class
- File: `7-airport.js`
- Description: `Airport` class with name and code attributes.
- Features:
  - Overrides default string description to return the airport code.

### Task 8: HolbertonClass
- File: `8-hbtn_class.js`
- Description: `HolbertonClass` with size and location attributes.
- Features:
  - Custom casting behavior for `Number` and `String`.

### Task 9: Hoisting
- File: `9-hoisting.js`
- Description: Fixes hoisting issues in the provided code.
- Features:
  - Correct class and variable declarations to resolve hoisting problems.

### Task 10: Car Class
- File: `10-car.js`
- Description: `Car` class with brand, motor, and color attributes.
- Features:
  - Method `cloneCar` to create a new instance of the class.
  - Usage of symbols for privacy.

### Task 11: EVCar Class (Advanced)
- File: `100-evcar.js`
- Description: `EVCar` class extending `Car`.
- Features:
  - Additional attribute `range`.
  - Modified behavior for `cloneCar`.

## Installation
- Clone the repository: `git clone [repository URL]`
- Navigate to the directory: `cd [local repository]`

## Usage
Run each file using Node.js:
```bash
npm run dev [file-name.js]
```

