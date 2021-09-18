import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewSessionScreen from '../screens/NewSessionScreen';
import { globalHeaderStyle } from '../styles/gobalStyles';
import ActiveSessionScreen from '../screens/ActiveSessionScreen';


export default function NewSessionStack() {

  const NewSessionStack = createStackNavigator();
  return (
    <NewSessionStack.Navigator screenOptions={globalHeaderStyle}>
      {/* <NewSessionStack.Screen name='New Session' component={NewSessionScreen}/> */}
      <NewSessionStack.Screen name='Active Session' component={ActiveSessionScreen}/>
    </NewSessionStack.Navigator>
  )
};
