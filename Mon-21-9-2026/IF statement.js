let age = 22;

if (age >= 18) {
  console.log("You are an adult");
}

let num = 4;

if (num % 2 == 0) {
  console.log("The number is even");
}

let char = "A";

let code = char.charCodeAt(0);

if (
  (code >= 65 && code <= 90) || // A-Z
  (code >= 97 && code <= 122) // a-z
) {
  console.log("It's a letter");
}

let list = [1, 2, 3, 4];

if (Array.isArray(list)) {
  console.log("It's an array");
}

let x = 55;

if (x > 0) {
  console.log("x is a positive number");
}

// 9. Check if z is a multiple of 3

let z = 9;

if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}

// 10. Check if password is at least 8 characters long

let password = "mypassword123";

if (password.length >= 8) {
  console.log("Your password is strong");
}

// 11. Check if age is between 18 and 65 (inclusive)

let age1 = 30;

if (age1 >= 18 && age1 <= 65) {
  console.log("You are of working age");
}

// 12. Check if color is red, green, or blue

let color = "red";

if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}

// 13. Check if input is a number using isNaN()

function isValidNumber(input) {
  if (isNaN(input)) {
    return input + " is not a number";
  } else {
    return input + " is a valid number";
  }
}

console.log(isValidNumber(11));
// 11 is a valid number

console.log(isValidNumber("19"));
// 19 is a valid number

console.log(isValidNumber("xyz"));
// xyz is not a number

console.log(isValidNumber("17.5"));
// 17.5 is a valid number
