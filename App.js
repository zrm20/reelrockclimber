import 'react-native-gesture-handler';
import React, { useState }from 'react';
import { View, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import Climber from './classes/Climber';
import { NavBar } from './components/NavBar';
import { globalStyles } from './styles/gobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';

const getFonts = () => {
  return Font.loadAsync({
    'lithos-pro': require('./assets/fonts/LithosPro-Regular.otf'),
    'arial-rounded': require('./assets/fonts/ArialRoundedBold.ttf')
  })
};



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // //testing
  // const pic = require('./assets/acr.jpeg');
  // let alyssa = new Climber(1, 'Alyssa Reel', pic);
  // alyssa.addSession(1, 'west', 5, 1);
  // alyssa.sessionList[0].addRoute('boulder', 'v2', 1, true);
  // alyssa.sessionList[0].addRoute('boulder', 'v3', 1, true);
  // alyssa.sessionList[0].addRoute('topRope', '5.10+', 2, true, 45);
  // alyssa.sessionList[0].addRoute('lead', '5.9', 5, false, 20);
  // alyssa.sessionList[0].addRoute('lead', '5.7', 1, true, 45);
  // alyssa.sessionList[0].addRoute('topRope', '5.10+', 1, true, 45);
  // alyssa.sessionList[0].addRoute('topRope', '5.11-', 3, true, 45);
  // alyssa.sessionList[0].addRoute('topRope', '5.11+', 8, false, 16);
  // alyssa.sessionList[0].addRoute('topRope', '5.11+', 8, false, 16);
  // alyssa.climberRouteList.forEach((r) =>{
  //   console.log("Hi");
  // });
  
  if(fontsLoaded){
    console.log("Fonts Done Loading");
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.mainBackground.backgroundColor
  }
});
