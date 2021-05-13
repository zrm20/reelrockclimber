import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Dashboard } from '../screens/Dashboard'
import { NewClimber } from '../screens/NewClimber'

function HomeScreen({climber}) {
  return (
    <Dashboard climber ={climber}/>
  );
}

function LogBookScreen() {
  return (
    <View>
      <Text>LogBook</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function NavBar({ climber }) {
  return (
    <NavigationContainer>
     <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused
                ? 'dashboard'
                : 'dashboard';
            } else if (route.name === 'LogBook') {
              iconName = focused ? 'book' : 'book';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#a5e6ba',
          inactiveTintColor: '#7785ac',
          activeBackgroundColor: '#360568',
          inactiveBackgroundColor: '#360568'
        }}
      >
        <Tab.Screen name="Dashboard" component={HomeScreen(climber)} />
        <Tab.Screen name="LogBook" component={LogBookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}