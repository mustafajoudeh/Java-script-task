// Get HTML elements
const employeeForm = document.getElementById("employeeForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const departmentInput = document.getElementById("department");
const employeeTableBody = document.getElementById("employeeTableBody");
const totalSalaryElement = document.getElementById("totalSalary");

// Employee Constructor Function
function Employee(name, email, department) {
  this.name = name;
  this.email = email;
  this.department = department;

  // Random salary between 100 and 1000
  this.salary = Math.floor(Math.random() * 901) + 100;
}

// Retrieve employees from Local Storage
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Add Employee
employeeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const department = departmentInput.value;

  // Create new employee object
  const employee = new Employee(name, email, department);

  // Add employee to array
  employees.push(employee);

  // Save employees to Local Storage
  localStorage.setItem("employees", JSON.stringify(employees));

  // Render employees
  renderEmployees();

  // Clear form
  employeeForm.reset();
});

// Render Employees
function renderEmployees() {
  // Clear table
  employeeTableBody.innerHTML = "";

  let totalSalary = 0;

  // Loop through employees
  employees.forEach(function (employee) {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td>$${employee.salary}</td>
        `;

    employeeTableBody.appendChild(row);

    // Calculate total salary
    totalSalary += employee.salary;
  });

  // Display total salary
  totalSalaryElement.textContent = `Total Salary: $${totalSalary}`;
}

// Render stored employees when page loads
renderEmployees();
