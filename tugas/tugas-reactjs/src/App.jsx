import { useState } from "react";
import "./App.css";
import { Form } from "./component/Form";
import { Title } from "./component/Title";
import { Time } from "./component/Time";

function App() {
  let thingsToDo = [
    "Belajar GIT & CLI",
    "Belajar HTML & CSS",
    "Belajar Javascript",
    "Belajar ReactJS Dasar",
    "Belajar ReactJS Advance",
  ];

  return (
    <>
    <Time />
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
