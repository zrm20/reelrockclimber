import React, { useState }from 'react';
import { Text, View, ScrollView } from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { NavBar } from './components/NavBar'
import { Dashboard } from './screens/Dashboard'
import { NewClimber } from './screens/NewClimber'
import * as SQLite from 'expo-sqlite';
import Session from './classes/Session'
import { RouteCard } from './components/RouteCard';

const getFonts = () => {
  return Font.loadAsync({
    'lithos-pro': require('./assets/fonts/LithosPro-Regular.otf'),
    'arial-rounded': require('./assets/fonts/ArialRoundedBold.ttf')
  })
};



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  //testing
  let mySession = new Session(1, 1, 'west', 5, 1);
  mySession.addRoute('boulder', 'v2', 1, true);
  mySession.addRoute('topRope', '5.10+', 2, true, 45);
  mySession.addRoute('lead', '5.9', 5, false, 20);
  mySession.addRoute('lead', '5.7', 1, true, 45);
  mySession.addRoute('topRope', '5.10+', 1, true, 45);
  mySession.addRoute('topRope', '5.11-', 3, true, 45);
  mySession.addRoute('topRope', '5.11+', 8, false, 16);
  
  if(fontsLoaded){
    console.log("Fonts Done Loading");
    return (
      //<Dashboard climber={alyssa} />
      <ScrollView>
        {mySession.routeList.map(item => <RouteCard key={item.id} route={item}/>)}
      </ScrollView>
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
  pic: require('./assets/acr.jpeg'),
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
    {key: 2, goalName: 'Long Term Goal', daysToGo: 204, progress: .75},
  ]
}