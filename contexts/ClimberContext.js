import React, { createContext, useState, useEffect} from 'react';
import Climber from '../classes/Climber'


export const ClimberContext = createContext();

export default function ClimberContextProvider(props) {

  const zach = new Climber(1, 'zach')

  const [climbers, setClimbers] = useState([zach]);

  const [activeClimber, setActiveClimber] = useState({name: '', id: -1})

  const addClimber = (name, pic) => {
    const maxID = Math.max(...climbers.map(item => item.id));
    const nextID = maxID + 1;
    setClimbers([...climbers, new Climber(nextID, name, pic)]);
    console.log(`${name} added as climber`);
  }

  const removeClimber = (id) => {
    setClimbers(climbers.filter(climber => climber.id !== id));
    console.log(`Climber ${id} removed`);
    if(activeClimber.id === id){
      setActiveClimber({name: '', id: -1})
    }
  }

  const makeClimberActive = (id) => {
    setActiveClimber(climbers.find(climber => climber.id === id));
    console.log(`${activeClimber.name} is now the active climber`);
  }

  return(
    <ClimberContext.Provider value={{climbers, setClimbers, activeClimber, addClimber, removeClimber, makeClimberActive}}>
      {props.children}
    </ClimberContext.Provider>
  )
}