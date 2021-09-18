import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../styles/gobalStyles';
import DashboardStack from './DashboardStack';
import LogBookStack from './LogBookStack';
import NewSessionStack from './NewSessionStack';
import UsersStack from './UsersStack';
import GraphsStack from './GraphsStack';

const Tab = createBottomTabNavigator();

export function NavBar() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'dashboard' : 'dashboard';
            } else if (route.name === 'Log Book') {
              iconName = focused ? 'book' : 'book';
            }else if (route.name === 'New Session'){
              iconName = focused ? 'plus-square-o' : 'plus-square-o';
            }else if (route.name === 'Graphs'){
              iconName = focused ? 'line-chart' : 'line-chart';
            }else if (route.name === 'Users'){
              iconName = focused ? 'user-circle' : 'user-circle';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.color4,
          inactiveTintColor: colors.color4,
          activeBackgroundColor: colors.color1,
          inactiveBackgroundColor: colors.color1,
          style: { borderTopWidth: 0, backgroundColor: colors.color1},
      
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardStack} />
        <Tab.Screen name="Log Book" component={LogBookStack} />
        <Tab.Screen name="New Session" component={NewSessionStack} />
        <Tab.Screen name="Graphs" component={GraphsStack} />
        <Tab.Screen name="Users" component={UsersStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

