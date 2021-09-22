import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../styles/gobalStyles';
import { AntDesign } from '@expo/vector-icons';

export default function TogglingButton({ state, pressHandler, text, size=100 }) {
  return (
    <TouchableOpacity 
      style={styles.container(state, size)} 
      onPress={pressHandler}
    >
      {
        state ? 
        <AntDesign name="checkcircleo" size={size/4} color={colors.green} /> :
        <AntDesign name="closecircleo" size={size/4} color={colors.red} />
      }
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.text(state, size)}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: (isActive, size) => ({
    flexDirection: 'row',
    width: size * 1.5,
    borderWidth: size / 30,
    borderColor: isActive ? colors.green : colors.red,
    borderRadius: size / 10,
    padding: size /10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: (isActive, size) => ({
    color: colors.white,
    fontSize: size/4,
    marginLeft: 5
  })
})
