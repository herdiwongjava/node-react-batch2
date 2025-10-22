import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Welcome } from "./component/Welcome";

function App() {
  const [count, setCount] = useState(0);

  const people = [
    { name: "arif", job: "CEO", color: "green" },
    { name: "maulana", job: "COO", color: "orange" },
    { name: "dedek", job: "CMO", color: "red" },
  ];

  return (
    <>
      {people.map((person,index) => (
        <Welcome color={person.color} job={person.job} name={person.name} key={index}/>
      ))}
    </>
  );
}

export default App;
