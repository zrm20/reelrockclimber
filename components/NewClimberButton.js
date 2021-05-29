import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/gobalStyles';
import { FontAwesome } from '@expo/vector-icons';

export function NewClimberButton({ pressHandler }) {
  return(
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>New Climber</Text>
      <FontAwesome name="plus-circle" size={35} color={globalStyles.headerFont.color} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 100,
    borderColor: globalStyles.primaryBorder.borderColor,
    borderWidth: 3,
    borderRadius: 30,
    backgroundColor: globalStyles.mainBackground.backgroundColor,
    margin: 20,
    padding: 3,
    alignItems: 'center'
  },
  text: {
    color: globalStyles.headerFont.color,
    fontFamily: globalStyles.headerFont.fontFamily,
    textAlign: 'center',
    margin: 5,
    fontSize: 30
  }
});