import React from "react";

const EmployeeList = ({ employees, removeEmployee }) => {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added.</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.position} 
              <button style={{ marginLeft: "10px" }} onClick={() => removeEmployee(employee.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
