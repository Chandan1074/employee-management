// src/App.js
// Correct imports in src/App.js
import React, { useState } from "react";
import EmployeeForm from "./component/EmployeeForm";
import EmployeeList from "./component/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} removeEmployee={removeEmployee} />
    </div>
  );
}

export default App;
