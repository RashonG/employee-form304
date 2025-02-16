import { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';

function App() {
  // State to store employees
  const [employees, setEmployees] = useState([]);

  // Load saved employees from local storage when the app starts
  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, []);

  // Function to save data to local storage
  const saveData = (employees) => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  // Function to add a new employee
  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <h2>Saved Employees</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <strong>{employee.name}</strong> - {employee.jobTitle} ({employee.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

