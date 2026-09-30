// ===============================
// JavaScript Loops Exercises
// ===============================

// 1. Use a while loop to print numbers from 1 to 10

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// =====================================
// 2. Use a for loop to print array elements

const numbers2 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i]);
}

// =====================================
// 3. Print even numbers from 0 to 10

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// =====================================
// 4. Print the sum of numbers from 1 to 10

let sum4 = 0;

for (let i = 1; i <= 10; i++) {
  sum4 += i;
}

console.log(sum4);

// =====================================
// 5. Find the largest number in an array

const numbers5 = [1, 2, 3, 4, 5];

let largest = numbers5[0];

for (let i = 1; i < numbers5.length; i++) {
  if (numbers5[i] > largest) {
    largest = numbers5[i];
  }
}

console.log(largest);

// =====================================
// 6. Find the average of numbers in an array

const numbers6 = [1, 2, 3, 4, 5];

let sum6 = 0;

for (let i = 0; i < numbers6.length; i++) {
  sum6 += numbers6[i];
}

let average = sum6 / numbers6.length;

console.log(average);

// =====================================
// 7. Find the factorial of a number

const number7 = 5;

let factorial = 1;

for (let i = 1; i <= number7; i++) {
  factorial *= i;
}

console.log(factorial);

// =====================================
// 8. Print Fibonacci sequence up to a given number

const number8 = 10;

let a = 0;
let b = 1;

for (let i = 0; a <= number8; i++) {
  console.log(a);

  let next = a + b;
  a = b;
  b = next;
}

// =====================================
// 9. Print prime numbers up to a given number

const number9 = 20;

for (let i = 2; i <= number9; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// =====================================
// 10. Print elements of a 2D array

const numbers10 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < numbers10.length; i++) {
  for (let j = 0; j < numbers10[i].length; j++) {
    console.log(numbers10[i][j]);
  }
}

// =====================================
// 11. Print array elements in reverse order

const numbers11 = [1, 2, 3, 4, 5];

for (let i = numbers11.length - 1; i >= 0; i--) {
  console.log(numbers11[i]);
}

// =====================================
// 12. Print array elements with a specific step

const numbers12 = [1, 2, 3, 4, 5];
const step = 2;

for (let i = 0; i < numbers12.length; i += step) {
  console.log(numbers12[i]);
}

// =====================================
// 13. Find the frequency of a number in an array

const numbers13 = [1, 2, 1, 3, 2, 1];
const target = 1;

let count = 0;

for (let i = 0; i < numbers13.length; i++) {
  if (numbers13[i] === target) {
    count++;
  }
}

console.log(count);

// =====================================
// 14. Use map() with the heros array

const heros = [
  { name: "Iron Man", power: "Tech" },
  { name: "Spider-Man", power: "Spider abilities" },
  { name: "Thor", power: "Godly powers" },
  { name: "Hulk", power: "Super strength" },
];

const newHeros = heros.map((hero, index) => {
  return {
    hero: hero.name,
    power: hero.power,
    id: index,
  };
});

console.log(newHeros);

// =====================================
// 15. Use filter() to get words longer than 7 characters

const inputWords = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

function filterWords(inputWords) {
  return inputWords.filter((word) => {
    return word.length > 7;
  });
}

const result15 = filterWords(inputWords);

console.log(result15);

// =====================================
// 16. Use reduce() to sum squares of numbers divisible by 5

const numbers16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSquaredDivisibleBy5 = numbers16.reduce((sum, number) => {
  if (number % 5 === 0) {
    return sum + number * number;
  }

  return sum;
}, 0);

console.log(sumSquaredDivisibleBy5);
