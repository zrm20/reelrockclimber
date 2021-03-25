import React, { useState }from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { NavBar } from './components/NavBar'
import { Dashboard } from './screens/Dashboard'
import { NewClimber } from './screens/NewClimber'
import * as SQLite from 'expo-sqlite';
import * as Seeder from './utils/dbSeeder'

const getFonts = () => {
  return Font.loadAsync({
    'lithos-pro': require('./assets/fonts/LithosPro-Regular.otf'),
    'arial-rounded': require('./assets/fonts/ArialRoundedBold.ttf')
  })
};



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [dbOpen, setDbOpen]= useState(false);

  if(fontsLoaded){
    console.log("Fonts Done Loading");
    return (
      <Dashboard climber={alyssa} />
      // <NewClimber />
      // <NavBar climber={alyssa}/>
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


const alyssa = {
  name: 'Alyssa Reel',
  pic: '../assets/acr.jpeg',
  totalPoints: 12490,
  totalFeet: 5280,
  dashStats: [
    {key: 1, name: 'Boulder', avg: 'V3', max: 'V4'},
    {key: 2, name: 'Top-Rope', avg: '5.10-', max: '5.11'},
    {key: 3, name: 'Lead', avg: '5.9', max: '5.10'},
    {key: 4, name: 'Session', avg: '167', max: '220'}
  ],
  goalList: [
    {key: 1, goalName: 'Short Term Goal', daysToGo: 94, progress: .8},
    {key: 2, goalName: 'Long Term Goal', daysToGo: 204, progress: .4},
  ]
}