import React, {useState,} from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import{ globalStyles } from '../styles/gobalStyles'
import ImagePicker from '../components/ImgSelector';
import ImgSelector from '../components/ImgSelector';

export function NewClimber() {

  return(
    <View style={styles.container}>

      <Text style={globalStyles.h1}>ReelRock Climber</Text>
      <Text style={globalStyles.h2}>New Climber Profile</Text>
      <View style={styles.form}>
        <Text style={globalStyles.h3}>Climber Name</Text>
        <TextInput style={styles.textInput}/ >
        <Button style={styles.submitButton} title='Add Climber'/>
        <ImgSelector />
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
    width: '100%',
    padding: 30,
    justifyContent: 'center',

  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'ariel-rounded',
  },
  textInput: {
    backgroundColor: '#fff',
    width: '90%',
    height: 40,
    marginBottom: 60,
  },
  submitButton: {
    margin: 20,
  }
});