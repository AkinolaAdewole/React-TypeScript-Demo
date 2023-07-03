import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet'
import Person from './components/Person';
import { type } from 'os';
import PersonList from './components/PersonList';

function App() {

  const personName={
    firstname:'Stephen',
    lastname:'Adewole'
  }

  const namelist=[
    {
      firstname:'Edwin',
      lastname:'Clarke'
    },
    {
      firstname:'Tyson',
      lastname:'Fury'
    },
    {
      firstname:'Muhammad',
      lastname:'Ali'
    },
  ]

  return (
    <div className="App">
       <Greet name='Akinola' messageCount={20} isLoggedIn={false} />
       <Person name={personName}/>
       <PersonList names={namelist}/>
    </div>
  );
}

export default App;
