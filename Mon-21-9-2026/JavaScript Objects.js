// ============================================
// JavaScript Objects
// ============================================

// 1. Create an object with name, age, and gender
// and print its values

const person = {
  name: "Adam",
  age: 25,
  gender: "male",
};

console.log(person.name);
console.log(person.age);
console.log(person.gender);

// ============================================
// 2. Add a new property using dot notation

const person2 = {
  name: "Adam",
  age: 25,
};

person2.gender = "male";

console.log(person2);

// ============================================
// 3. Access a property using dot notation

const person3 = {
  name: "Adam",
  age: 25,
};

console.log(person3.name);

// ============================================
// JavaScript Array
// ============================================

// 1. Use forEach() to print each element

const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function (number) {
  console.log(number);
});

// ============================================
// 2. Use sort() to sort strings alphabetically

const fruits = ["banana", "cherry", "apple"];

fruits.sort();

console.log(fruits);

// ============================================
// 3A. Use reverse() to reverse the array

const fruits2 = ["apple", "banana", "cherry"];

fruits2.reverse();

console.log(fruits2);

// ============================================
// 3B. Use concat() to combine two arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);

console.log(combinedArray);

// ============================================
// 3C. Use slice() to extract a portion
//
// The example says [1, 2, 3, 4, 5, 6], 2, 4
// and output [1, 2, 5, 6].
// slice() itself does NOT remove elements.
// To get [1, 2, 5, 6], we can combine slices.

const numbers3 = [1, 2, 3, 4, 5, 6];

const result3 = numbers3.slice(0, 2).concat(numbers3.slice(4));

console.log(result3);

// ============================================
// 3D. Use splice() to add and remove elements

const numbers4 = [1, 2, 3, 4, 5];

// Remove 1 element starting from index 2
const removedElement = numbers4.splice(2, 1);

console.log(removedElement);
console.log(numbers4);

// ============================================
// 3E. Use indexOf() to find the index
// of a specific element

const numbers5 = [1, 2, 3, 4, 5];

const index = numbers5.indexOf(2);

console.log(index);

// ============================================
// 3F. Use join() to convert an array to a string

const numbers6 = [1, 2, 3, 4, 5];

const stringNumbers = numbers6.join(",");

console.log(stringNumbers);

// ============================================
// 3G. Use split() to convert a string to an array

const numbersString = "1,2,3,4,5";

const numbersArray = numbersString.split(",");

console.log(numbersArray);

// ============================================
// 7. Use length to find number of elements

const numbers7 = [1, 2, 3, 4, 5];

console.log(numbers7.length);

// ============================================
// 8. Use for...of to iterate through an array

const numbers8 = [1, 2, 3, 4, 5];

for (const number of numbers8) {
  console.log(number);
}

// ============================================
// 9. Use Array.isArray() to check if
// an object is an array

const numbers9 = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers9));
