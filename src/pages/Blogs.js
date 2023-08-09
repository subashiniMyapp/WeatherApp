// import { useState } from "react";
import React, { useState } from "react";

// function Calculator() {
//   const [click, setClick] = useState(0);
//   const [color, setColor] = useState("");
//   return (
//     <div>
//       <p>Click count {click}</p>
//       <h2>my them color was {color}</h2>
//       <button onClick={() => setColor("blue")}>change color</button>
//       <p>the click was {click % 2 === 0 ? "even" : "odd"}</p>
//       <button onClick={() => setClick((click) => click + 1)}>Click me</button>
//     </div>
//   );
// }
// function Car() {
//   const [car, setCar] = useState({
//     brand: "audi",
//     year: "2012",
//     color: "white",
//   });

//   return (
//     <div>
//       <h1>Car model {car.brand}</h1>
//       <p>
//         it an {car.brand} and it's {car.color} color from {car.year}
//       </p>
//     </div>
//   );
// }

function App() {
  const [click, setClick] = useState([]);

  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10,
      },
    ]);
  };

  return (
    <div>
      <ul>
        {click.map((val) => (
          <li key={val.id}>{val.value}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Click me</button>
    </div>
  );
}
export default App;
