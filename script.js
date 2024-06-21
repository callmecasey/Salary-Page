// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  var employees = [];
  var addAnother = true;

  while (addAnother) {
    var e = {};
    e.firstName = prompt("First Name");
    e.lastName = prompt("Last Name");
    e.salary = prompt("Salary");
    if (isNaN(e.salary)) {
      salary = 0;
    }
    const employee = {
      firstName: e.firstName,
      lastName: e.lastName,
      salary: parseFloat(e.salary),
    };
    employees.push(employee);
    addAnother = confirm("Add Another Employee?");
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  const totalEmployees = employeesArray.length;
  for (let i = 0; i < totalEmployees; i++) {
    totalSalary = totalSalary + employeesArray[i].salary;
  }
  const averageSalary = totalSalary / totalEmployees;
  console.log(`the average employee is ${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomNumber = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomNumber];
  console.log(randomEmployee);
  console.log(`congrats to ${randomEmployee}!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
