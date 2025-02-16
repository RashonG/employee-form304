import './EmployeeForm.css';
import { useState } from 'react';

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.email && employee.phone) {
      addEmployee(employee);
      setEmployee({ name: '', email: '', phone: '' }); // Reset form after submission
    }
  };

  return (
    <div className="employee-form-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        </label>

        <label>
          Phone:
          <input type="text" name="phone" value={employee.phone} onChange={handleChange} required />
        </label>

        <button type="submit">Add</button>
      </form>

      <h2>Employee List</h2>
      {/* This is where the employee list will be displayed */}
    </div>
  );
}

export default EmployeeForm;
