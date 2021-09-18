import 'react-native-gesture-handler';
import React, { useState }from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { NavBar } from './navigation/NavBar';
import { Provider } from 'react-redux';
import store from './redux/store';

const getFonts = () => {
  return Font.loadAsync({
    'lithos-pro': require('./assets/fonts/LithosPro-Regular.otf'),
    'arial-rounded': require('./assets/fonts/ArialRoundedBold.ttf')
  })
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    console.log("Fonts Done Loading");
    return (
      <Provider store={store}>
        <NavBar />
      </Provider>
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
};