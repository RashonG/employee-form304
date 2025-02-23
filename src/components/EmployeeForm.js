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
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={employee.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
  );
}

export default EmployeeForm;
