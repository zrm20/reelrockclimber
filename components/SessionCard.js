import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {globalStyles} from '../styles/gobalStyles'
import Session from '../classes/Session';

export function SessionCard( {session}) {

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return(
    <View style={styles.container}>
      <Text style={styles.titleText}>Session #{session.id} - {session.locationName}</Text>
      <Text style={styles.titleText}>{session.date.toLocaleDateString('en-US', dateOptions)}</Text>
      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.bgColor3.backgroundColor,
    flex: 1,
    padding: 35
  },
  titleText: {
    color: globalStyles.headerFont.color,
    fontFamily: globalStyles.headerFont.fontFamily,
    textAlign: 'center',
    fontSize: 24
  }
});