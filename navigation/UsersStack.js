import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Users } from '../screens/Users';
import { globalHeaderStyle } from '../styles/gobalStyles';
import NewClimber from '../screens/NewClimber';

export default function UsersStack() {

  const UsersStack = createStackNavigator();
  return (
    <UsersStack.Navigator screenOptions={globalHeaderStyle}>
      <UsersStack.Screen name="Users" component={Users}/>
      <UsersStack.Screen name="New Climber" component={NewClimber} />
    </UsersStack.Navigator>
  )
};
