import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogBookScreen from '../screens/LogBookScreen';
import { globalHeaderStyle } from '../styles/gobalStyles';


export default function LogBookStack() {
  const LogBookStack = createStackNavigator();
  
  return (
    <LogBookStack.Navigator screenOptions={globalHeaderStyle}>
      <LogBookStack.Screen name='Log Book' component={LogBookScreen}/>
    </LogBookStack.Navigator>
  )
};
