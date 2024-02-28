0x04. Typescript


### Task 0: Creating an Interface for a Student
1. **Objective**: Define a `Student` interface and create a table using Vanilla JavaScript to display students' information.
2. **Key Points**:
   - Define the `Student` interface with `firstName`, `lastName`, `age`, and `location`.
   - Create two student objects and store them in an array `studentsList`.
   - Use Vanilla JavaScript to dynamically generate a table displaying each student's first name and location.

### Task 1: Building a Teacher Interface
1. **Objective**: Create a `Teacher` interface with specific attributes and the ability to add arbitrary attributes.
2. **Key Points**:
   - `Teacher` should have `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience` (optional), and `location`.
   - Allow adding any other attributes like `contract`.

### Task 2: Extending the Teacher Class
1. **Objective**: Define an interface `Directors` that extends the `Teacher` interface.
2. **Key Points**:
   - Add a new attribute `numberOfReports` to the `Directors` interface.

### Task 3: Printing Teachers
1. **Objective**: Implement a function `printTeacher` and define an interface for this function.
2. **Key Points**:
   - `printTeacher` should take `firstName` and `lastName` and return a string format `F. LastName`.

### Task 4: Writing a Class
1. **Objective**: Create a `StudentClass` with specific methods and constructor requirements.
2. **Key Points**:
   - Include methods `workOnHomework` and `displayName`.
   - Use interfaces to define constructor and class structure.

### Task 5: Advanced Types Part 1
1. **Objective**: Create `DirectorInterface` and `TeacherInterface` with specific methods and a function `createEmployee`.
2. **Key Points**:
   - Define the methods as specified in the task.
   - `createEmployee` should return either a `Director` or `Teacher` based on the salary argument.

### Task 6: Functions Specific to Employees
1. **Objective**: Implement `isDirector` and `executeWork` functions.
2. **Key Points**:
   - `isDirector` should be a type predicate.
   - `executeWork` should call specific methods based on whether the employee is a Director or Teacher.

### Task 7: String Literal Types
1. **Objective**: Create a `Subjects` literal type and a function `teachClass`.
2. **Key Points**:
   - `Subjects` should only allow 'Math' or 'History'.
   - `teachClass` should return a string based on the subject.

### Task 8: Ambient Namespaces
1. **Objective**: Work with ambient files and namespaces for database operations.
2. **Key Points**:
   - Write type declarations for CRUD functions.
   - Implement database operations using these declarations.

### Task 9: Namespace & Declaration Merging
1. **Objective**: Use namespaces and declaration merging in TypeScript.
2. **Key Points**:
   - Extend the `Teacher` interface and implement classes for different subjects with specific requirements and methods.

### Task 10: Update `main.ts`
1. **Objective**: Utilize the classes and interfaces created in previous tasks.
2. **Key Points**:
   - Create and export instances of the subjects and a teacher.
   - Demonstrate the functionality of each class and method.

### Task 11: Brand Convention & Nominal Typing
1. **Objective**: Implement nominal typing and brand properties in TypeScript.
2. **Key Points**:
   - Create `MajorCredits` and `MinorCredits` interfaces with a unique brand property.
   - Implement functions to sum credits.

For each of these tasks, you'll need to apply your knowledge of TypeScript, including interfaces, types, classes, and functions. Remember to follow TypeScript best practices, such as using strict typing and leveraging interfaces for type checking and structure definition. These tasks are designed to give you hands-on experience with various TypeScript features and will be beneficial for your growth as a software engineer.