import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Dashboard } from '../screens/Dashboard'
import { NewClimber } from '../screens/NewClimber'
import { Users } from '../screens/Users';
import { LogBook } from '../screens/LogBook';
import { Graphs } from '../screens/Graphs';
import { colors, fonts, globalStyles } from '../styles/gobalStyles';


function NewSessionScreen() {
  return(
    <View>
      <Text>New Session</Text>
    </View>
  )
}

const DashboardStack = createStackNavigator();
const LogBookStack = createStackNavigator();
const NewSessionStack = createStackNavigator();
const UsersStack = createStackNavigator();

function DashboardStackScreen(){
  return(
    <DashboardStack.Navigator screenOptions={globalHeaderStyle}>
      <DashboardStack.Screen name='Dashboard' component={Dashboard}/>
    </DashboardStack.Navigator>
  )
}

function LogBookStackScreen() {
  return(
    <LogBookStack.Navigator screenOptions={globalHeaderStyle}>
      <LogBookStack.Screen name="Log Book" component={LogBook}/>
    </LogBookStack.Navigator>
  )
}

function usersStackScreen(){
  return(
    <UsersStack.Navigator
      screenOptions={globalHeaderStyle}
        >
      <UsersStack.Screen 
        name="Users" 
        component={Users}
        />
      <UsersStack.Screen 
        name="New Climber" 
        component={NewClimber} 
        />
    </UsersStack.Navigator>
  )
}


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
          activeTintColor: colors.color5,
          inactiveTintColor: colors.color3,
          activeBackgroundColor: colors.color1,
          inactiveBackgroundColor: colors.color1,
          style: { borderTopWidth: 0, backgroundColor: colors.color1},
      
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
        <Tab.Screen name="Log Book" component={LogBookStackScreen} />
        <Tab.Screen 
          name="New Session" 
          component={NewSessionScreen} 
          />
        <Tab.Screen name="Graphs" component={Graphs} />
        <Tab.Screen name="Users" component={usersStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const globalHeaderStyle = {
  headerStyle: {
    backgroundColor: globalStyles.mainBackground.backgroundColor,
  },
  headerTintColor: globalStyles.titleFont.color,
  headerTitleStyle: {
    fontFamily: fonts.headlineFont,
    fontSize: 38
  },
  headerTransparent: true,
}
