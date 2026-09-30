// =====================================
// JavaScript Functions Exercises
// =====================================

// 1. Find the smallest value in an array

function findSmallest(array) {
  let smallest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }

  return smallest;
}

console.log(findSmallest([30, 45, 60, 7]));

// =====================================
// 2. Return a string in alphabetical order

function AlphabeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log(AlphabeticalOrder("hello"));

// =====================================
// 3. Factorial

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(8));

// =====================================
// 4. Check if a number is Even or Odd

function oddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(oddOrEven(9));

// =====================================
// 5. Add Up numbers going back to 0

function addUp(number) {
  let sum = 0;

  for (let i = number; i >= 0; i--) {
    sum += i;
  }

  return sum;
}

console.log(addUp(8));

// =====================================
// 6. Min, Max, Length, Average

function minMaxLengthAverage(array) {
  let min = array[0];
  let max = array[0];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }

    sum += array[i];
  }

  let length = array.length;
  let average = sum / length;

  return [min, max, length, average];
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

// =====================================
// 7. Count how many words were given

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

console.log(countWords("hello from CodingAcademy!"));

// =====================================
// 8. Multiply all elements by array length

function MultiplyByLength(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * array.length);
  }

  return result;
}

console.log(MultiplyByLength([4, 2, 5]));

// =====================================
// 9. Check if str1 ends with str2

function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}

console.log(checkEnding("CodingSchool", "Ac"));

// =====================================
// 10. Repeat each character two times

function doubleChar(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }

  return result;
}

console.log(doubleChar("Coding"));

// =====================================
// 11. Return the index location of an element

function findIndex(array, element) {
  return array.indexOf(element);
}

console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));
