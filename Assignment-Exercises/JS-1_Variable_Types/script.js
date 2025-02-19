/**
 * JavaScript Variables: let, const, and var
 * 
 * 1. let:
 *    - Used to declare variables that can be reassigned later.
 *    - Block-scoped: The variable exists only within the block where it's declared.
 *    - Preferred for variables whose values may change during program execution.
 *    - Example: let count = 5; count = 10; // Valid
 * 
 * 2. const:
 *    - Used to declare variables whose values cannot be reassigned.
 *    - Block-scoped like `let`.
 *    - Must be initialized at the time of declaration.
 *    - Preferred for constants or variables that should not change.
 *    - Example: const pi = 3.14159; pi = 4; // Error
 * 
 * 3. var:
 *    - Used to declare variables with function scope.
 *    - Hoisted to the top of its scope, but its value remains `undefined` until assigned.
 *    - Not block-scoped, which can cause unexpected behaviors.
 *    - Its usage is generally discouraged in modern JavaScript due to better alternatives (`let` and `const`).
 *    - Example: var name = "John"; name = "Doe"; // Valid
 */
 
// Using let
let name = "John Paul"; // Define a string here, e.g., "Juan Cruz"
let age = 18; // Define a number here, e.g., 30
let isStudent = true; // Define a boolean here, e.g., true or false
let hobbies = ["sports", "watching", "eating"]; // Define an array here, e.g., ["reading", "gaming", "coding"]

// Checking types and values
console.log(name); // Output: should be "string"  (until a value is assigned)
console.log(age); // Output: should be "number" (until a value is assigned)
console.log(isStudent); // Output:  should be "boolean" (until a value is assigned)
console.log(hobbies); // Output: should be "object" (until a value is assigned)

// Using const
const pi = 3.145; // Define a number here, e.g., 3.14159
const birthYear = 2006; // Define a number here, e.g., 1990
const isEmployed = false; // Define a boolean here, e.g., true or false
const favoriteBooks = "none"; // Define an array here, e.g., ["1984", "Brave New World", "Fahrenheit 451"]

// Checking types and values
console.log(pi); // Output: should be "number" (until a value is assigned)
console.log(birthYear); // Output: should be "number" (until a value is assigned)
console.log(isEmployed); // Output: should be "boolean" (until a value is assigned)
console.log(favoriteBooks); // Output: should be "object" (until a value is assigned)

// Using var
var city = "Mandaluyong"; // Define a string here, e.g., "New York"
var temperature = 36.8; // Define a number here, e.g., 22.5
var hasPets = true; // Define a boolean here, e.g., true or false
var colors = ["black", "white", "red"]; // Define an array here, e.g., ["red", "green", "blue"]

// Checking types and values
console.log(city); // Output: should be "string" (until a value is assigned)
console.log(temperature);  // Output: should be "number" (until a value is assigned)
console.log(hasPets); // Output: should be "boolean" (until a value is assigned)
console.log(colors); // Output: should be "object" (until a value is assigned)
