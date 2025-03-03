import './EmployeeForm.css';
import { useState } from "react";
function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({ 
    employeeId: '', 
    name: '', 
    email: '', 
    phone: '', 
    city: '', 
    state: '' 
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.employeeId && employee.name && employee.email && employee.phone && employee.city && employee.state) {
      addEmployee(employee);
      setEmployee({ employeeId: '', name: '', email: '', phone: '', city: '', state: '' }); // Reset form
    }
  };

  return (
    <div className="employee-form-container">
      <h2>Add Employee</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee ID:</label>
          <input type="text" name="employeeId" value={employee.employeeId} onChange={handleChange} required />
        </div>

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
          <label>City:</label>
          <input type="text" name="city" value={employee.city} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input type="text" name="state" value={employee.state} onChange={handleChange} required />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
