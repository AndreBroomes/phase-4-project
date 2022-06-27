import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewSignup from "./NewSignup";

function Employee() {
  const [{ data: employee, error, status }, setEmployee] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/employees/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((employee) =>
          setEmployee({ data: employee, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setEmployee({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  function handleAddPosition(newPosition) {
    setEmployee({
      error,
      status,
      data: {
        ...employee,
        positions: [...employee.positions, newPosition],
      },
    });
  }

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>{employee.name}'s Positions</h2>
      <ul>
        {employee.positions.map((position) => (
          <li key={position.id}>
            {position.name} | Full Time
          </li>
        ))}
      </ul>
      <hr />
      <NewSignup onAddPosition={handleAddPosition} employeeId={employee.id} />
    </div>
  );
}

export default Employee;