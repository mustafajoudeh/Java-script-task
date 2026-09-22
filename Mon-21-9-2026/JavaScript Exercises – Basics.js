// ============================================================
// ==================Data Types and Operators==================
// ============================================================

// 1.Cash flow ratio

let Cash = 1000;
let currentLiabilities = 500;

let Cashflowratio = Cash / currentLiabilities;

console.log(`Cash flow ratio = ${Cashflowratio}`);

// 2.Net income

let revenues = 1000;
let expenses = 500;

let Netincom = revenues - expenses;

console.log(`Net income = ${Netincom}`);

// 3.Total assets

let liabilities = 1000;
let equity = 500;

let TotalAssets = liabilities + equity;

console.log(`Total Assets = ${TotalAssets}`);

// 4.Net income (using profit margin and sales)

let profit = 1000;
let sales = 500;

let Neticome = profit * sales;
console.log(`Neticome = ${Neticome}`);

// 5.Average

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Use reduce to sum all numbers
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log("sum of numbers = " + sum);

let avg = sum / numbers.length;

console.log("avg of numbers = " + avg);

// 6.Discount

let price = 150;
let discount = 0.3;

let finalPrice = price - price * discount;

console.log("finalPrice = " + finalPrice);

// 7. Age limit (older than 18 and less than 30)
function checkAgeLimit(age) {
  return age > 18 && age < 30;
}

let ageInput = 20;
console.log(`Age Limit = ${checkAgeLimit(ageInput)}`);

// 8.Exponential
let num1 = 2;
let num2 = 3;
let Exponential = num1 ** num2;
console.log(`Exponential = ${Exponential}`);

// 9.Remainder
let dividend = 10;
let divisor = 4;
Remainder = dividend % divisor;
console.log(`Remainder = ${Remainder}`);

// ============================================================
// ==================Strings ==================================
// ============================================================

let S1 = "Welcome to Orange";
let S2 = S1.toUpperCase();
console.log(S2);
console.log(S2.slice(8, 11));

let S3 = S1.replace("Welcome to", "Hello from");
console.log(S3);
console.log(S1.toLowerCase());
console.log(S1.length);

let S4 = S1.replace("Orange", "“Orange”");
console.log(S4);

let S5 = S1 + " Jordan";
console.log(S5);

let str = "cactus";

let firstChar = str[0];

for (let i = 1; i < str.length; i++) {
  if (str[i] === firstChar) {
    str = str.substring(0, i) + "*" + str.substring(i + 1);
  }
}

console.log(str);

// ============================================================
// ==================Arrays ==================================
// ============================================================

let arr = ["Coding", "Academy", "By", "Orange"];

// 1. Add "Jordan" to the end
console.log([...arr, "Jordan"]);

// 2. Get the first two elements
console.log(arr.slice(0, 2));

// 3. Add "Welcome" and "To" at the beginning
console.log(["Welcome", "To", ...arr]);

// 4. Get "Academy", "By", "Orange"
console.log(arr.slice(1));

// 5. Convert the array to a string
console.log(arr.join(" "));

// 6. Copy the array
console.log([...arr]);

// 7. Get "Coding" and "Orange" only
console.log([arr[0], arr[3]]);

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// a. Remove the last item from the vegetable array
vegetables.pop();

// b. Remove the first item from the fruit array
fruit.shift();

// c. Find the index of "orange"
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

// d. Add that number to the end of the fruit array
fruit.push(orangeIndex);

// e. Find the length of the vegetable array
var vegetablesLength = vegetables.length;
console.log(vegetablesLength);

// f. Add that number to the end of the vegetable array
vegetables.push(vegetablesLength);

// g. Put the two arrays together into one array. Fruit first. Call the new array "food"
var food = fruit.concat(vegetables);
console.log(food);

// h. Remove 2 elements from your new array starting at index 4
food.splice(4, 2);

// i. Reverse your array
food.reverse();

// j. Turn the array into a string
var result = food.join(",");

console.log(result);

// ============================================================
// ==================Conditionals =============================
// ============================================================

// 1. Check the candidate's eligibility based on age

let birthYear = 2004;
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

if (age > 60) {
  console.log("You may join the seniors’ program.");
} else if (age > 30) {
  console.log("You are not eligible. You may join other programs.");
} else if (age >= 18 && age <= 30) {
  console.log("You are eligible. Start your application.");
} else {
  console.log("You may join the kids' program.");
}

// 2. Switch the letters' case from upper to lower and vice versa

function switchCase(str) {
  let result = "";

  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

console.log(switchCase("OrAnGe"));
// Output: oRaNgE

// 3. Capitalize each word's first letter and remove all spaces (Camel Case)

function camelCase(str) {
  let words = str.split(" ");
  let result = "";

  for (let word of words) {
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}

console.log(camelCase("Coding Academy by Orange"));
// Output: CodingAcademyByOrange

// 4. Remove a specific element from an array

function removeElement(array, element) {
  let index = array.indexOf(element);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"));

// Output: ["Coding", "Academy", "Orange"]

// 5. Check if a number is odd or even

function checkOddEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkOddEven(10));
// Output: Even

console.log(checkOddEven(7));
// Output: Odd

// 6. Check whether an input variable is a number

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

console.log(isNumber(10));
// Output: true

console.log(isNumber("10"));
// Output: false

// 7. Find the largest of two numbers

function findLargest(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(findLargest(10, 20));
// Output: 20

// 8. Check if a triangle is equilateral, scalene, or isosceles

function checkTriangle(a, b, c) {
  if (a === b && b === c) {
    return "Equilateral";
  } else if (a !== b && b !== c && a !== c) {
    return "Scalene";
  } else {
    return "Isosceles";
  }
}

console.log(checkTriangle(5, 5, 5));
// Output: Equilateral

console.log(checkTriangle(5, 5, 3));
// Output: Isosceles

console.log(checkTriangle(5, 4, 3));
// Output: Scalene

// 9. Check if a number is present in a given range

function isInRange(number, min, max) {
  return number >= min && number <= max;
}

console.log(isInRange(15, 10, 20));
// Output: true

console.log(isInRange(25, 10, 20));
// Output: false

// 10. Check whether a year is a leap year

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
// Output: true

console.log(isLeapYear(2023));
// Output: false

// ============================================================
// ==================Loops ====================================
// ============================================================

// ============================================
// 1. Print all even numbers between 1 and 50 twice
//    Using 1 for loop and 1 while loop
// ============================================

// Using for loop
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Using while loop
let i = 1;

while (i <= 50) {
  if (i % 2 === 0) {
    console.log(i);
  }

  i++;
}

// ============================================
// 2. Print even numbers using a single for loop
// ============================================

for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

// ============================================
// 3. One loop prints even numbers
//    and the second loop prints odd numbers
// ============================================

// Even numbers
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Odd numbers
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// ============================================
// 4. FizzBuzz
// ============================================

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// ============================================
// 5. FizzBuzz using a function
// ============================================

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

console.log(fizzBuzz(1));
// Output: 1

console.log(fizzBuzz(15));
// Output: FizzBuzz

// ============================================
// 6. Recursive FizzBuzz
// ============================================

function recursiveFizzBuzz(number) {
  if (number > 100) {
    return;
  }

  console.log(fizzBuzz(number));

  recursiveFizzBuzz(number + 1);
}

recursiveFizzBuzz(1);

// ============================================
// 7. Convert a number to banknotes
// ============================================

function getBanknotes(amount, banknotes) {
  let result = [];

  for (let note of banknotes) {
    while (amount >= note) {
      result.push(note);
      amount -= note;
    }
  }

  return result;
}

console.log(getBanknotes(57, [25, 10, 5, 1]));

// Output:
// [25, 25, 5, 1, 1]

// ============================================
// 8. Count a character regardless of case
// ============================================

function countCharacter(str, character) {
  let count = 0;

  str = str.toLowerCase();
  character = character.toLowerCase();

  for (let char of str) {
    if (char === character) {
      count++;
    }
  }

  return count;
}

console.log(countCharacter("Coding Academy by Orange", "o"));

// Output: 2

// ============================================
// 9-a. Print numbers 0 - 20
// ============================================

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// ============================================
// 9-b. Print ODD values from 3 - 29
// ============================================

for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}

// ============================================
// 9-c. Print EVEN numbers from 12 down to -14
// ============================================

for (let i = 12; i >= -14; i -= 2) {
  console.log(i);
}

// ============================================
// 9-d. Print multiples of 3 from 50 down to 20
// ============================================

for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// ============================================
// 10. Initialize string and array
// ============================================

let text = "CodingAcademy";

let array = [7, 500, "KH404", "black", 36];

// 10-e. Print each array element on a new line

for (let element of array) {
  console.log(element);
}

// 10-f. Print each string character in reverse order

for (let i = text.length - 1; i >= 0; i--) {
  console.log(text[i]);
}

// ============================================
// 11. Separate even and odd numbers
// ============================================

let numbers1 = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let evens = [];
let odds = [];

for (let number of numbers1) {
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
}

console.log("Evens:", evens);
console.log("Odds:", odds);

// ============================================
// 12. Create unique meals
// ============================================

let proteins = ["chicken", "pork", "tofu", "beef", "fish", "beans"];

let grains = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];

let vegetables1 = [
  "peas",
  "green beans",
  "kale",
  "edamame",
  "broccoli",
  "asparagus",
];

let beverages = ["juice", "milk", "water", "soy milk", "soda", "tea"];

let desserts = [
  "apple",
  "banana",
  "more kale",
  "ice cream",
  "chocolate",
  "kiwi",
];

// Number of meals
let numberOfMeals = 10;

let meals = [];

for (let i = 0; i < numberOfMeals; i++) {
  let meal = {
    protein: proteins[i % proteins.length],
    grain: grains[i % grains.length],
    vegetable: vegetables1[i % vegetables1.length],
    beverage: beverages[i % beverages.length],
    dessert: desserts[i % desserts.length],
  };

  meals.push(meal);
}

console.log(meals);

// ============================================================
// ==================objects ==================================
// ============================================================

// ============================================
// 1. Return an array of the object's properties
// ============================================

function getProperties(obj) {
  return Object.keys(obj);
}

let person = {
  name: "Mustafa",
  age: 22,
  city: "Amman",
};

console.log(getProperties(person));

// Output:
// ["name", "age", "city"]

// ============================================
// 2. Return the number of properties in an object
// ============================================

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties(person));

// Output:
// 3

// ============================================
// 3. Combine two objects into a new object
// ============================================

function combineObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

let object1 = {
  name: "Mustafa",
  age: 22,
};

let object2 = {
  city: "Amman",
  country: "Jordan",
};

console.log(combineObjects(object1, object2));

// Output:
// {
//     name: "Mustafa",
//     age: 22,
//     city: "Amman",
//     country: "Jordan"
// }

// ============================================
// 4. Convert all property values to uppercase
// ============================================

function convertToUppercase(obj) {
  let copy = {};

  for (let property in obj) {
    copy[property] = String(obj[property]).toUpperCase();
  }

  return copy;
}

let data = {
  name: "mustafa",
  city: "amman",
  country: "jordan",
};

console.log(convertToUppercase(data));

// Output:
// {
//     name: "MUSTAFA",
//     city: "AMMAN",
//     country: "JORDAN"
// }

// ============================================
// 5. Return only properties with non-null values
// ============================================

function removeNullValues(obj) {
  let result = {};

  for (let property in obj) {
    if (obj[property] !== null) {
      result[property] = obj[property];
    }
  }

  return result;
}

let information = {
  name: "Mustafa",
  age: null,
  city: "Amman",
  phone: null,
};

console.log(removeNullValues(information));

// Output:
// {
//     name: "Mustafa",
//     city: "Amman"
// }

// ============================================
// 6. Return property names sorted alphabetically
// ============================================

function getSortedProperties(obj) {
  return Object.keys(obj).sort();
}

let student = {
  name: "Mustafa",
  age: 22,
  city: "Amman",
  country: "Jordan",
};

console.log(getSortedProperties(student));

// Output:
// ["age", "city", "country", "name"]
