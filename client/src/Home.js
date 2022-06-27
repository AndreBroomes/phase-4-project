import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewEmployee from "./NewEmployee";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("/positions")
      .then((r) => r.json())
      .then(setPositions);
  }, []);

  useEffect(() => {
    fetch("/employees")
      .then((r) => r.json())
      .then(setEmployees);
  }, []);

  function handleAddEmployee(newEmployee) {
    setEmployees((employees) => [...employees, newEmployee]);
  }

  function handleDeletePosition(id) {
    fetch(`/positions/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setPositions((positions) =>
          positions.filter((position) => position.id !== id)
        );
      }
    });
  }

  return (
    <div>
      <h2>Positions</h2>
      <ul>
        {positions.map((position) => (
          <li key={position.id}>
            <span>
              {position.name} | Full Time
            </span>
            <button onClick={() => handleDeletePosition(position.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <span>
              {employee.name}, age {employee.age}
            </span>
            <Link to={`/employees/${employee.id}`}>View Positions</Link>
          </li>
        ))}
      </ul>
      <hr />
      <NewEmployee onAddEmployee={handleAddEmployee} />
    </div>
  );
}

export default Home;