import React from 'react';
import { Text, View, ScrollView, StyleSheet, } from 'react-native';
import { globalStyles } from '../styles/gobalStyles';

//accepts a climber object to pass down data
export function Graphs( { climber } ) {
  const activeClimber = climber;

  if(activeClimber){
    return(
      <View style={styles.container}>
        <Text style={globalStyles.h1}>ReelRock Climber</Text>
        <Text style={globalStyles.h1}>Graphs</Text>
        <ScrollView style={styles.body}>
          
        </ScrollView>
      </View>
    );
  }else{
    return(
      <View style={styles.container}>
        <Text style={globalStyles.h1}>Graphs</Text>
        <Text>No Active Climber!</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 3,
    backgroundColor: globalStyles.mainBackground.backgroundColor,
    alignItems: 'center',
  },
  body: {
    width: '100%',
    flex: 1,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  nav: {
    backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    width: '100%',
    height: 80,
    alignItems: 'center',
  }
});