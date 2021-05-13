import React from 'react';
import { Text, Image, TouchableOpacity, View, StyleSheet, } from 'react-native';
import { globalStyles } from '../styles/gobalStyles'

//accpets a climber object that contains name, pic, totalPoints, and totalFeet
export function ClimberWidget( { climber }) {
  return (
    <View style={globalStyles.widget}>
      <TouchableOpacity style={styles.container}>
        <Image style={styles.img} source={climber.picUri ? climber.picUri : require('../assets/climbs.png')}/>
        <View style={styles.name}>
          <Text style={globalStyles.h2}>{climber.name}</Text>
          <View style={styles.info}>
            <Text style={styles.text}>{climber.totalPoints} Total Points</Text>
            <Text style={styles.text}>{climber.totalHeight}' Climbed</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 3,
  },
  name: {
    flex: 1,
    margin: 5,
  },
  info: {
    flexDirection: 'row',
  },
  text:{
    marginTop: 3,
    marginRight: 15,
    color: 'white',
    fontFamily: 'arial-rounded'
  }
});