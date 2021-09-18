import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import{ colors, fonts } from '../styles/gobalStyles'
import ImgSelector from '../components/ImgSelector';

export default function NewClimber({ route, navigation }) {

  return(
    <View style={styles.container}>
      <ImgSelector />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    alignItems: 'center',
    padding: '2%'
  },
});