import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [personsState, setPersonsState] = useState({

    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" },
      { name: "Eli", age: "30" }
    ],
    otherState: "some state"
  })

  console.log(personsState)

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    //Dont do this personsState.persons[0].name="Maximilian";
    setPersonsState({
      persons: [
        { name: "Maximilian", age: "28" },
        { name: "Manu", age: "29" },
        { name: "Eli", age: "27" }
      ],
      otherState: personsState.otherState
    })
  }


  return (
    <div className="App">
      <h1>Hi, this is my react app</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobies : racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

    </div>
  );
}

export default app;

