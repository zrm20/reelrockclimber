import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import { globalHeaderStyle } from '../styles/gobalStyles';


export default function DashboardStack() {

  const DashboardStack = createStackNavigator();
  return (
    <DashboardStack.Navigator screenOptions={globalHeaderStyle}>
      <DashboardStack.Screen name='Dashboard' component={DashboardScreen}/>
    </DashboardStack.Navigator>
  )
};
