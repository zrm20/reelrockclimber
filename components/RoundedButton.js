import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../styles/gobalStyles';

export default function RoundedButton({ text='Button', size=20, pressHandler }) {
  return (
    <TouchableOpacity style={styles.container(size)} onPress={pressHandler}>
      <Text numberOfLines={2} adjustsFontSizeToFit={true} style={styles.text(size)}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: size => (
    {
      borderWidth: size/10,
      borderColor: colors.color5,
      padding: size/3,
      borderRadius: size,
      alignItems: 'center',
      margin: size/5
    }
  ),
  text: size => (
    {
      fontSize: size,
      color: colors.white,
      textAlign: 'center'
    }
  )
});
