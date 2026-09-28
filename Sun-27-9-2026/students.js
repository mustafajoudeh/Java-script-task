// Student data

const students = [
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
];

// Named export
export function getStudents() {
  return students;
}

// Named export
export function getStudentById(id) {
  return students.find((student) => student.id === id);
}

// Default export
export default students;
