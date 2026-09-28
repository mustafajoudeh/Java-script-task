// Calculate student grade information

// Named export
export function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);

  return total / grades.length;
}

// Named export
export function isPassed(grade) {
  return grade >= 50;
}

// Default export
export default isPassed;
