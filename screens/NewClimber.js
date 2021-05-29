import React, {useState,} from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import{ globalStyles } from '../styles/gobalStyles'
import ImagePicker from '../components/ImgSelector';
import ImgSelector from '../components/ImgSelector';

export function NewClimber({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('Users')
  }
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={globalStyles.h3}>Climber Name</Text>
        <TextInput style={styles.textInput}/ >
        <Button style={styles.submitButton} title='Add Climber' onPress={pressHandler}/>
        <ImgSelector />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
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