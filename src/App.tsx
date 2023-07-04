import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./Heading";
import Oscar from "./Oscar";
import Button from "./components/Button";
import Input from "./Input";
import Container from "./Container";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import Uzer from "./components/context/Uzer";
import { UserContextProvider } from "./components/context/Uzercontext";
import Counter from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

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
      {/* <Greet name="Akinola" messageCount={20} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={namelist} /> */}

      {/* <Status status="Loading" /> */}
      {/* <Heading>PlaceHolder Text</Heading> */}

      {/* Children Props */}
      {/* <Oscar>
        <Heading>Oscar goes Leanardo Decaprio</Heading>
      </Oscar> */}

      {/*button with props  */}
      {/* <Button handleClick={()=>{
        console.log("Button Click");
       }}/> */}

      {/* <Button
        handleClick={(event, id) => {
          console.log("Console", event, id);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{border:'1px solid black', padding:'1rem'}}/> */}


       {/* useContext */}
       <ThemeContextProvider>
          <Box />
       </ThemeContextProvider>


      < UserContextProvider>
                <Uzer/>
      </UserContextProvider>

      {/* Class-based componenet */}
      <Counter message=""/>

      <Private isLoggedIn={true} Component={Profile}/>
    </div>
  );
}

export default App;
