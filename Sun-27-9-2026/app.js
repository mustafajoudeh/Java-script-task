// Import from students.js
import students, { getStudents, getStudentById } from "./students.js";

// Import from grades.js
import isPassed, { calculateAverage } from "./grades.js";

// Get students
const allStudents = getStudents();

// Display students
allStudents.forEach((student) => {
  console.log(
    student.name +
      " - Grade: " +
      student.grade +
      " - " +
      (isPassed(student.grade) ? "Pass" : "Fail"),
  );
});

// Test getStudentById()
console.log(getStudentById(2));

// Test average
console.log(calculateAverage([80, 90, 70]));
