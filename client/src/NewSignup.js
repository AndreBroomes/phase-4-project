import { useEffect, useState } from "react";

function NewSignup({ employeeId, onAddPosition }) {
  const [year, setYear] = useState("");
  const [positionId, setPositionId] = useState("");
  const [positions, setPositions] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/positions")
      .then((r) => r.json())
      .then(setPositions);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      position_id: Number(positionId),
      employee_id: employeeId,
      year: Number(year),
    };
    fetch("/signups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((position) => {
          setYear("");
          setPositionId("");
          setErrors([]);
          onAddPosition(position);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Signup</h2>
      <div>
        <label htmlFor="activity">Positions</label>
        <select
          id="activity"
          value={positionId}
          onChange={(e) => setPositionId(e.target.value)}
        >
          <option value="">Select position...</option>
          {positions.map((position) => (
            <option key={position.id} value={position.id}>
              {position.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="time">Year</label>
        <input
          type="number"
          id="time"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      {errors.map((err) => (
        <p key={err} style={{ color: "red" }}>
          {err}
        </p>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewSignup;