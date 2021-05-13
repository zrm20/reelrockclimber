import React, { useState }from 'react';
import { Text, View, ScrollView } from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { NavBar } from './components/NavBar'
import { Dashboard } from './screens/Dashboard'
import { NewClimber } from './screens/NewClimber'
import * as SQLite from 'expo-sqlite';
import Climber from './classes/Climber';
import { SessionCard } from './components/SessionCard';

const getFonts = () => {
  return Font.loadAsync({
    'lithos-pro': require('./assets/fonts/LithosPro-Regular.otf'),
    'arial-rounded': require('./assets/fonts/ArialRoundedBold.ttf')
  })
};



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  //testing
  const pic = require('./assets/acr.jpeg');
  let alyssa = new Climber(1, 'Alyssa Reel', pic);
  alyssa.addSession(1, 'west', 5, 1);
  alyssa.sessionList[0].addRoute('boulder', 'v2', 1, true);
  alyssa.sessionList[0].addRoute('topRope', '5.10+', 2, true, 45);
  alyssa.sessionList[0].addRoute('lead', '5.9', 5, false, 20);
  alyssa.sessionList[0].addRoute('lead', '5.7', 1, true, 45);
  alyssa.sessionList[0].addRoute('topRope', '5.10+', 1, true, 45);
  alyssa.sessionList[0].addRoute('topRope', '5.11-', 3, true, 45);
  alyssa.sessionList[0].addRoute('topRope', '5.11+', 8, false, 16);
  
  if(fontsLoaded){
    console.log("Fonts Done Loading");
    return (
      //<SessionCard session={alyssa.sessionList[0]}/>
      //<Dashboard climber={alyssa} />
      // <NewClimber />
      <NavBar climber={alyssa}/>

    );
  } else {
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log("Error")}
      />
    )
  }
} 
