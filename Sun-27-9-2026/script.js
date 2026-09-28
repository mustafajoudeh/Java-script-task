/*
===========================================================
=====================ES5 Fundamentals====================== 
Strict Mode · Hoisting · Scoping · Functions · Prototypes
===========================================================
 */

//Exercise 1 — Hoisting & Scoping Challenge

// Hoisting with var:
// The variable declaration is moved to the top,
// but the value is assigned later.

console.log(username); // Output: undefined
var username = "Jone";

function test() {
  var x = 10;

  // var has function scope,
  // so y can be accessed outside the if block.
  if (true) {
    var y = 20;
  }

  console.log(y); // Output: 20
}

test();

// x cannot be accessed outside the function.
//console.log(x); // ReferenceError: x is not defined

// --------------------------------------
// Function Scope vs Block Scope
// --------------------------------------

// var -> Function Scope
// let  -> Block Scope
// const -> Block Scope

// Using let:

function testWithLet() {
  let x = 10;

  if (true) {
    let y = 20;
    console.log(y); // Output: 20
  }

  // y cannot be accessed here
  // because let has block scope.
}

testWithLet();

//Exercise 2 — Constructor Functions & Prototypal Inheritance

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

function Employee(name, age, employeeId, position) {
  // Call Person constructor
  Person.call(this, name, age);

  this.employeeId = employeeId;
  this.position = position;
}

// Employee inherits from Person
Employee.prototype = Object.create(Person.prototype);

// Fix the constructor reference
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function () {
  console.log(
    "Hello, my name is " +
      this.name +
      ". I am a " +
      this.position +
      " and my ID is " +
      this.employeeId,
  );
};

var employee1 = new Employee("Ahmad", 25, 101, "Backend Developer");

var employee2 = new Employee("Sara", 28, 102, "Frontend Developer");

var employee3 = new Employee("Omar", 30, 103, "Software Engineer");

employee1.greet();
employee2.greet();
employee3.greet();

console.log(employee1.name);
console.log(employee1.age);

/*
==============================================================================
================================  Arrays & JSON  =============================
==== concat · sort · splice · slice · reverse · includes · forEach · JSON ====
==============================================================================
 */

//Exercise 3 — Array Methods Playground

var students1 = [
  "Ahmad",
  "Sara",
  "Omar",
  "Lina",
  "Khaled",
  "Noor",
  "Yazan",
  "Dana",
  "Mohammad",
  "Rana",
  "Ali",
  "Hala",
  "Othman",
  "Aya",
  "Zaid",
  "Maya",
  "Tareq",
  "Salma",
  "Laith",
  "Farah",
  "Sami",
  "Reem",
  "Fadi",
  "Dina",
  "Hamza",
];

var students2 = [
  "Adam",
  "Lama",
  "Ibrahim",
  "Jana",
  "Anas",
  "Razan",
  "Mahmoud",
  "Leen",
  "Bashar",
  "Mariam",
  "Samer",
  "Nour",
  "Alaa",
  "Rami",
  "Yara",
  "Mustafa",
  "Rawan",
  "Bassam",
  "Saja",
  "Amer",
  "Dalia",
  "Hussein",
  "Malak",
  "Wael",
  "Sahar",
];

var students = students1.concat(students2);

console.log(students);

students.sort();

console.log(students);

students.reverse();

console.log(students);

console.log(students.includes("Ahmad"));

students.forEach(function (student, index) {
  console.log(index + ": " + student);
});

//Exercise 4 — Student Records Manager

// ==========================================
// Exercise 4 — Student Records Manager
// ==========================================

// Create an array containing 50 students
var students = [
  { id: 1, name: "Ahmad", grade: 85 },
  { id: 2, name: "Sara", grade: 92 },
  { id: 3, name: "Omar", grade: 76 },
  { id: 4, name: "Lina", grade: 88 },
  { id: 5, name: "Khaled", grade: 69 },
  { id: 6, name: "Noor", grade: 95 },
  { id: 7, name: "Yazan", grade: 81 },
  { id: 8, name: "Dana", grade: 73 },
  { id: 9, name: "Ali", grade: 90 },
  { id: 10, name: "Rana", grade: 87 },

  { id: 11, name: "Mohammad", grade: 79 },
  { id: 12, name: "Hala", grade: 91 },
  { id: 13, name: "Othman", grade: 65 },
  { id: 14, name: "Aya", grade: 84 },
  { id: 15, name: "Zaid", grade: 77 },
  { id: 16, name: "Maya", grade: 93 },
  { id: 17, name: "Tareq", grade: 72 },
  { id: 18, name: "Salma", grade: 89 },
  { id: 19, name: "Laith", grade: 80 },
  { id: 20, name: "Farah", grade: 96 },

  { id: 21, name: "Sami", grade: 68 },
  { id: 22, name: "Reem", grade: 86 },
  { id: 23, name: "Fadi", grade: 74 },
  { id: 24, name: "Dina", grade: 82 },
  { id: 25, name: "Hamza", grade: 94 },
  { id: 26, name: "Adam", grade: 78 },
  { id: 27, name: "Lama", grade: 71 },
  { id: 28, name: "Ibrahim", grade: 88 },
  { id: 29, name: "Jana", grade: 97 },
  { id: 30, name: "Anas", grade: 83 },

  { id: 31, name: "Razan", grade: 70 },
  { id: 32, name: "Mahmoud", grade: 75 },
  { id: 33, name: "Leen", grade: 90 },
  { id: 34, name: "Bashar", grade: 67 },
  { id: 35, name: "Mariam", grade: 85 },
  { id: 36, name: "Samer", grade: 79 },
  { id: 37, name: "Nour", grade: 92 },
  { id: 38, name: "Alaa", grade: 81 },
  { id: 39, name: "Rami", grade: 87 },
  { id: 40, name: "Yara", grade: 98 },

  { id: 41, name: "Mustafa", grade: 89 },
  { id: 42, name: "Rawan", grade: 73 },
  { id: 43, name: "Bassam", grade: 66 },
  { id: 44, name: "Saja", grade: 84 },
  { id: 45, name: "Amer", grade: 76 },
  { id: 46, name: "Dalia", grade: 91 },
  { id: 47, name: "Hussein", grade: 80 },
  { id: 48, name: "Malak", grade: 93 },
  { id: 49, name: "Wael", grade: 69 },
  { id: 50, name: "Sahar", grade: 86 },
];

// ==========================================
// 1. Use splice() to ADD a student
// ==========================================

students.splice(5, 0, {
  id: 51,
  name: "Kareem",
  grade: 88,
});

// ==========================================
// 2. Use splice() to REMOVE a student
// ==========================================

students.splice(10, 1);

// ==========================================
// 3. Use splice() to REPLACE a student
// ==========================================

students.splice(15, 1, {
  id: 52,
  name: "Omar Ali",
  grade: 95,
});

// ==========================================
// 4. Use slice() to create a copy
// ==========================================

var studentsCopy = students.slice(0, 10);

console.log("Copy of first 10 students:");
console.log(studentsCopy);

// ==========================================
// 5. Sort students by grade
// ==========================================

students.sort(function (a, b) {
  return b.grade - a.grade;
});

// ==========================================
// 6. Print the final list using forEach()
// ==========================================

console.log("Final Student List:");

students.forEach(function (student, index) {
  console.log(index + 1 + ". " + student.name + " - Grade: " + student.grade);
});

// ==========================================
// Exercise 5 — JSON Converter
// ==========================================

// Create a product object
var product = {
  id: 1,
  name: "Laptop",
  price: 750,
  category: "Electronics",
  available: true,
};

// Convert JavaScript object to JSON string
var jsonProduct = JSON.stringify(product);

console.log("JSON String:");
console.log(jsonProduct);

// Convert JSON string back to JavaScript object
var convertedProduct = JSON.parse(jsonProduct);

console.log("Converted Object:");
console.log(convertedProduct);

// Display the original object
console.log("Original Object:");
console.log(product);

// ==========================================
// Handle invalid JSON
// ==========================================

try {
  var invalidJSON = '{"name": "Laptop", "price": 750';

  var result = JSON.parse(invalidJSON);

  console.log(result);
} catch (error) {
  console.log("Invalid JSON!");
}

// ==========================================
// Exercise 6 — Product Inventory Analyzer
// ==========================================

// First inventory
var inventory1 = [
  {
    id: 1,
    name: "Laptop",
    price: 750,
    category: "Electronics",
    quantity: 10,
  },
  {
    id: 2,
    name: "Mouse",
    price: 25,
    category: "Electronics",
    quantity: 30,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 50,
    category: "Electronics",
    quantity: 20,
  },
  {
    id: 4,
    name: "Desk",
    price: 200,
    category: "Furniture",
    quantity: 5,
  },
  {
    id: 5,
    name: "Chair",
    price: 150,
    category: "Furniture",
    quantity: 8,
  },
];

// Second inventory
var inventory2 = [
  {
    id: 6,
    name: "Phone",
    price: 600,
    category: "Electronics",
    quantity: 15,
  },
  {
    id: 7,
    name: "Headphones",
    price: 80,
    category: "Accessories",
    quantity: 12,
  },
  {
    id: 8,
    name: "Monitor",
    price: 300,
    category: "Electronics",
    quantity: 7,
  },
  {
    id: 9,
    name: "Printer",
    price: 250,
    category: "Electronics",
    quantity: 4,
  },
  {
    id: 10,
    name: "Table",
    price: 180,
    category: "Furniture",
    quantity: 6,
  },
];

// ==========================================
// 1. Merge two inventories using concat()
// ==========================================

var inventory = inventory1.concat(inventory2);

console.log("Merged Inventory:");
console.log(inventory);

// ==========================================
// 2. Check available categories using includes()
// ==========================================

var availableCategories = ["Electronics", "Furniture", "Accessories"];

console.log(availableCategories.includes("Electronics"));

// Output: true

// ==========================================
// 3. Remove a discontinued product using splice()
// ==========================================

// Remove the product at index 2
inventory.splice(2, 1);

console.log("After removing discontinued product:");
console.log(inventory);

// ==========================================
// 4. Sort products by price
// ==========================================

inventory.sort(function (a, b) {
  return a.price - b.price;
});

console.log("Products sorted by price:");
console.log(inventory);

// ==========================================
// 5. Display the first five products using slice()
// ==========================================

var firstFiveProducts = inventory.slice(0, 5);

console.log("First five products:");
console.log(firstFiveProducts);

/*
=======================================================================================
===================== Modern JavaScript ===============================================
let · const · Arrow Functions · Destructuring · Defaults · Spread · Rest · Map · Set 
=======================================================================================
 */

// ==========================================
// Exercise 7 — Arrow Functions
// ==========================================

// Calculate the square of a number
const square = (number) => number * number;

console.log(square(5));
// Output: 25

// Check if a number is even
const isEven = (number) => number % 2 === 0;

console.log(isEven(10));
// Output: true

// Products
const products = [
  { name: "Laptop", price: 700 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 50 },
];

// map()
// Create a new array containing only product prices
const prices = products.map((product) => product.price);

console.log(prices);
// Output: [700, 30, 50]

// filter()
// Get products with price greater than 40
const expensiveProducts = products.filter((product) => product.price > 40);

console.log(expensiveProducts);

// reduce()
// Calculate the total price
const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);

console.log(totalPrice);
// Output: 780

// ==========================================
// Exercise 8
// Destructuring & Default Parameters
// ==========================================

const user = {
  name: "Ahmad",
  email: "ahmad@gmail.com",
  age: 25,
  address: "Amman",
};

// Object Destructuring
const { name, email, age, address: userAddress } = user;

// "address" was renamed to "userAddress"

console.log(name);
console.log(email);
console.log(age);
console.log(userAddress);

// ==========================================
// Array Destructuring
// ==========================================

const skills = ["JavaScript", "C#", "SQL"];

const [skill1, skill2, skill3] = skills;

console.log(skill1);
console.log(skill2);
console.log(skill3);

// ==========================================
// Default Parameters
// ==========================================

function createUser(name, email = "No email", age = 18) {
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Age: " + age);
}

// All parameters are provided
createUser("Ahmad", "ahmad@gmail.com", 25);

// Email and age are omitted
createUser("Omar");

// ==========================================
// Exercise 9
// ==========================================

// Two arrays of enrolled students
const students_1 = [101, 102, 103, 104];

const students_2 = [103, 104, 105, 106];

// ==========================================
// 1. Spread Operator
// ==========================================

// Combine two arrays
const allStudents = [...students_1, ...students_2];

console.log(allStudents);

// ==========================================
// 2. Set
// ==========================================

// Remove duplicate student IDs
const uniqueStudents = [...new Set(allStudents)];

console.log(uniqueStudents);

// Output:
// [101, 102, 103, 104, 105, 106]

// ==========================================
// 3. Rest Parameter
// ==========================================

// Accept any number of grades
function calculateAverage(...grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);

  return total / grades.length;
}

console.log(calculateAverage(80, 90, 70));
// Output: 80

// ==========================================
// 4. Map
// ==========================================

// Associate student IDs with grades
const studentGrades = new Map();

// Add entries
studentGrades.set(101, 85);
studentGrades.set(102, 90);
studentGrades.set(103, 75);

console.log(studentGrades);

// Update an entry
studentGrades.set(101, 95);

// Retrieve an entry
console.log(studentGrades.get(101));
// Output: 95

// Delete an entry
studentGrades.delete(103);

// Check if an entry exists
console.log(studentGrades.has(103));
// Output: false

// ==========================================
// 5. Convert Map to regular array
// ==========================================

const finalStudentData = [...studentGrades];

console.log(finalStudentData);

// ==========================================
// Exercise 10 — Dynamic Student Report
// ==========================================

const allStudents1 = [
  {
    id: 1,
    name: "Ahmad",
    grade: 85,
  },
  {
    id: 2,
    name: "Sara",
    grade: 92,
  },
  {
    id: 3,
    name: "Omar",
    grade: 45,
  },
  {
    id: 4,
    name: "Lina",
    grade: 78,
  },
  {
    id: 5,
    name: "Khaled",
    grade: 55,
  },
];

// Select the reports container
const reportsContainer = document.getElementById("reports");

// Generate a report for each student
allStudents1.forEach((student) => {
  const status = student.grade >= 50 ? "Pass" : "Fail";

  // Template Literal
  const report = `
        <div>
            <h2>${student.name}</h2>
            <p>ID: ${student.id}</p>
            <p>Grade: ${student.grade}</p>
            <p>Status: ${status}</p>
        </div>
        <hr>
    `;

  // Display the report in the browser
  reportsContainer.innerHTML += report;
});

// ==========================================
// Exercise 11 — Classes & Inheritance
// ==========================================

class Person1 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `${this.name} - ${this.email}`;
  }
}

class Student extends Person1 {
  constructor(name, email, studentId) {
    // Call Person1 constructor
    super(name, email);

    this.studentId = studentId;
  }

  // Override getInfo()
  getInfo() {
    return `Student: ${this.name}, ID: ${this.studentId}`;
  }
}

class Instructor extends Person1 {
  constructor(name, email, subject) {
    super(name, email);

    this.subject = subject;
  }

  // Override getInfo()
  getInfo() {
    return `Instructor: ${this.name}, Subject: ${this.subject}`;
  }
}

const person1 = new Person1("Ahmad", "ahmad@gmail.com");

const student = new Student("Omar", "omar@gmail.com", 101);

const instructor = new Instructor("Sara", "sara@gmail.com", "JavaScript");

console.log(person1.getInfo());

console.log(student.getInfo());

console.log(instructor.getInfo());

/*
==========================================================
=================== Web Storage & Cookies================= 
Web Storage · localStorage · sessionStorage · Cookies===== 
==========================================================

*/
