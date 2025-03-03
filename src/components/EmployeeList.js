import "./EmployeeList.css";

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={employee.id}>
          <strong>
  <a href={`#`} onClick={() => alert(`Clicked on Employee ID: ${employee.employeeId}`)}>
    {employee.employeeId}
  </a>
</strong> - {employee.name} ({employee.state.toUpperCase()})

        </li>        
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
