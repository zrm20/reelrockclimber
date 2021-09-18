import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Graphs } from '../screens/Graphs';
import { globalHeaderStyle } from '../styles/gobalStyles';


export default function GraphsStack() {

  const GraphsStack = createStackNavigator();
  return (
    <GraphsStack.Navigator screenOptions={globalHeaderStyle}>
      <GraphsStack.Screen name='Graphs' component={Graphs}/>
    </GraphsStack.Navigator>
  )
};
