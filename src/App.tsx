import { useState, useEffect } from "react";
import "./App.css";

const sampleEmployee = {
  name: {
    first: "",
    last: "",
  },
  email: "",
  picture: {
    medium: "",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data.results[0]);
      });
  };

  useEffect(getEmployee, []);

  return (
    <div className="App">
      <figure className="DisplayEmployee">
      <img src={employee.picture.medium} alt={employee.name.first} />
      <figcaption>
        <strong>
          {employee.name.first} {employee.name.last}
        </strong>
        {employee.email}
      </figcaption>
    </figure>
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
