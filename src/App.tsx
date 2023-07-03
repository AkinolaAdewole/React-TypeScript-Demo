import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import { type } from "os";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./Heading";
import Oscar from "./Oscar";
import Button from "./components/Button";
import { log } from "console";
import Input from "./Input";
import Container from "./Container";

function App() {
  const personName = {
    firstname: "Stephen",
    lastname: "Adewole",
  };

  const namelist = [
    {
      firstname: "Edwin",
      lastname: "Clarke",
    },
    {
      firstname: "Tyson",
      lastname: "Fury",
    },
    {
      firstname: "Muhammad",
      lastname: "Ali",
    },
  ];

  return (
    <div className="App">
      <Greet name="Akinola" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={namelist} />

      <Status status="Loading" />
      <Heading>PlaceHolder Text</Heading>

      {/* Children Props */}
      <Oscar>
        <Heading>Oscar goes Leanardo Decaprio</Heading>
      </Oscar>

      {/*button with props  */}
      {/* <Button handleClick={()=>{
        console.log("Button Click");
       }}/> */}

      <Button
        handleClick={(event, id) => {
          console.log("Console", event, id);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{border:'1px solid black', padding:'1rem'}}/>
    </div>
  );
}

export default App;
