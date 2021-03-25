import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard'
import { NewClimber } from '../screens/NewClimber'

function HomeScreen() {
  return (
    <Dashboard />
  );
}

function SettingsScreen() {
  return (
    <NewClimber />
  );
}

const Tab = createBottomTabNavigator();

export function NavBar({ climber }) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={HomeScreen} initialParams={climber}/>
        <Tab.Screen name="New Climber" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}