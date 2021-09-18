import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../styles/gobalStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function SquareButton(
  { size=50, pressHandler, icon='plus-thick', color=colors.color5, text}) 
  {

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      {
        text ?
        <Text style={styles.text(size, color)}>{text}</Text> :
        null
      }
      <View style={styles.icon(size, color)}>
        <MaterialCommunityIcons name={icon} size={size*.9} color={color} />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: (size, color) => ({
    height: size,
    width: size,
    borderRadius: size/6,
    borderColor: color,
    borderWidth: size/16,
    margin: size/10,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  text: (size, color) => ({
    fontSize: size /3,
    color: color,
    fontFamily: fonts.bodyFont
  })
});