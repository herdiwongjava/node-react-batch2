import { useState } from "react";
import "./App.css";
import { Form } from "./component/Form";
import { Title } from "./component/Title";

function App() {
  let thingsToDo = [
    "Belajar GIT & CLI",
    "Belajar HTML & CSS",
    "Belajar Javascript",
    "Belajar ReactJS Dasar",
    "Belajar ReactJS Advance",
  ];


  const [time, setTime] = useState("");

  return (
    <>
    <div className="time">
    <h1>Now At - </h1>
    </div>
      <div className="container">
        <img src="/logo.png" alt="" />
        <div className="container_list">
          <Title />
          <Form data={thingsToDo} />
        </div>
      </div>
    </>
  );
}

export default App;
