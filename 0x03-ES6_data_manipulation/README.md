# ALX Backend JavaScript - ES6 Data Manipulation

This repository contains JavaScript exercises focused on ES6 data manipulation. It covers various ES6 features like arrays, typed arrays, and Set, Map, WeakMap data structures.

## Tasks

### 0. Basic List of Objects

- **File:** `0-get_list_students.js`
- **Function:** `getListStudents`
- **Description:** Create a function that returns an array of objects, each with `id`, `firstName`, and `location` attributes.

### 1. More Mapping

- **File:** `1-get_list_student_ids.js`
- **Function:** `getListStudentIds`
- **Description:** Create a function that returns an array of student ids from a list of student objects. If the input is not an array, return an empty array. Use the `map` function.

### 2. Filter

- **File:** `2-get_students_by_loc.js`
- **Function:** `getStudentsByLocation`
- **Description:** Create a function that returns an array of student objects who are located in a specific city. Use the `filter` function.

### 3. Reduce

- **File:** `3-get_ids_sum.js`
- **Function:** `getStudentIdsSum`
- **Description:** Create a function that returns the sum of all student ids. Use the `reduce` function.

### 4. Combine

- **File:** `4-update_grade_by_city.js`
- **Function:** `updateStudentGradeByCity`
- **Description:** Create a function that returns an array of students for a specific city with their new grade. Use `filter` and `map` combined.

### 5. Typed Arrays

- **File:** `5-typed_arrays.js`
- **Function:** `createInt8TypedArray`
- **Description:** Create a function that returns a new `ArrayBuffer` with an `Int8` value at a specific position.

### 6. Set Data Structure

- **File:** `6-set.js`
- **Function:** `setFromArray`
- **Description:** Create a function that returns a `Set` from an array.

### 7. More Set Data Structure

- **File:** `7-has_array_values.js`
- **Function:** `hasValuesFromArray`
- **Description:** Create a function that returns a boolean indicating if all the elements in the array exist within the set.

### 8. Clean Set

- **File:** `8-clean_set.js`
- **Function:** `cleanSet`
- **Description:** Create a function that returns a string of all the set values that start with a specific string.

### 9. Map Data Structure

- **File:** `9-groceries_list.js`
- **Function:** `groceriesList`
- **Description:** Create a function that returns a map of groceries with the items: Apples, Tomatoes, Pasta, Rice, and Banana.

### 10. More Map Data Structure

- **File:** `10-update_uniq_items.js`
- **Function:** `updateUniqueItems`
- **Description:** Create a function that returns an updated map for all items with an initial quantity of 1.

### 11. Weak Link Data Structure

- **File:** `100-weak.js`
- **Function:** `queryAPI`
- **Description:** Export a const instance of `WeakMap` and a function named `queryAPI` that tracks the number of times it's called for each endpoint.

---

## Installation

To use these scripts, clone the repo and run each script with Node.js.

```bash
git clone [repo-url]
cd alx-backend-javascript/0x03-ES6_data_manipulation
npm install
npm run dev [script-name].js
```

## Usage

Each script can be run with Node.js to see the output of the implemented functions.

