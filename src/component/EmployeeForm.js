// src/components/EmployeeForm.js
import React, { useState } from "react";

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || position.trim() === "") return;

    addEmployee({ id: Date.now(), name, position });
    setName("");
    setPosition("");
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
