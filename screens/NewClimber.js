import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Platform } from 'react-native';
import{ globalStyles } from '../styles/gobalStyles'
import { ExpoImagePicker } from '../components/ExpoImagePicker'

export function NewClimber() {
  return(
    <View style={styles.container}>

      <Text style={globalStyles.h1}>ReelRock Climber</Text>

      <View style={styles.form}>
        <ExpoImagePicker style={styles.imagePicker} />
        <Text style={globalStyles.h3}>Climber Name</Text>
        <TextInput style={styles.textInput}/ >
        <Button title='Add Climber'/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 3,
    backgroundColor: '#360568',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    width: '100%',
    padding: 30,
    justifyContent: 'flex-start',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'ariel-rounded'
  },
  textInput: {
    backgroundColor: '#fff',
    width: '90%',
  },
  imagePicker: {
    margin: 0,
  }
});