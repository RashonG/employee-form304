import "./EmployeeForm.css";
import { Link } from "react-router-dom"; 

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <Link to={`/employees/${index}`}>{employee.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
