# JavaScript ES6 Promises

This repository contains exercises and examples demonstrating the use of ES6 Promises in JavaScript, particularly focusing on async operations and error handling. It's part of the `alx-backend-javascript` learning module.

## Tasks Overview

### 0. Keep every promise you make and only make promises you can keep
- **File**: `0-promise.js`
- **Description**: Implement a function `getResponseFromAPI` that returns a Promise.

### 1. Don't make a promise if you know you can't keep it
- **File**: `1-promise.js`
- **Description**: Implement `getFullResponseFromAPI`, which returns a promise that either resolves with an object `{status: 200, body: 'Success'}` or rejects with an error message `The fake API is not working currently`, based on a boolean parameter.

### 2. Catch me if you can!
- **File**: `2-then.js`
- **Description**: Write a function `handleResponseFromAPI` that appends handlers to a Promise to return a specific object or an empty error, and logs a message in either case.

### 3. Handle multiple successful promises
- **File**: `3-all.js`
- **Description**: Implement `handleProfileSignup` that uses Promise.all to resolve multiple promises and logs specific information or an error message.

### 4. Simple promise
- **File**: `4-user-promise.js`
- **Description**: Create a function `signUpUser` that returns a resolved promise with a user object.

### 5. Reject the promises
- **File**: `5-photo-reject.js`
- **Description**: Write a function `uploadPhoto` that returns a Promise, which rejects with an Error and a specific string message.

### 6. Handle multiple promises
- **File**: `6-final-user.js`
- **Description**: Create `handleProfileSignup` to manage multiple promises and return an array containing the status and value/error of each promise.

### 7. Load balancer
- **File**: `7-load_balancer.js`
- **Description**: Implement `loadBalancer` to return the value from the first resolved promise among two given promises.

### 8. Throw error / try catch
- **File**: `8-try.js`
- **Description**: Write `divideFunction` that throws an error when the denominator is zero and returns a division result otherwise.

### 9. Throw an error
- **File**: `9-try.js`
- **Description**: Implement `guardrail` that executes a given function and manages the return value or error, always appending a specific message to the result array.

### 10. Await / Async (Advanced)
- **File**: `100-await.js`
- **Description**: Create an async function `asyncUploadUser` that uses `await` to handle asynchronous operations and returns an object with responses or null values in case of failure.

## Installation and Usage

Clone the repository and navigate to each exercise to test the JavaScript files with Node.js.

```bash
git clone [repository-url]
cd alx-backend-javascript/0x01-ES6_promise
node [filename]
```

## Dependencies

- Node.js

