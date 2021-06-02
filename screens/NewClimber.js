import React, {useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import{ colors, fonts, globalStyles } from '../styles/gobalStyles'
import ImagePicker from '../components/ImgSelector';
import ImgSelector from '../components/ImgSelector';
import { ExpoImagePicker } from '../components/ExpoImagePicker';

export function NewClimber({ route, navigation }) {

  const [nameField, setNameField] = useState("Hello");
  const { submitHandler } = route.params;

  const pressHandler = () => {
    submitHandler(nameField);
    navigation.navigate('Users');
  }
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={globalStyles.h3}>Climber Name</Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={setNameField}
          />
        <Button style={styles.submitButton} title='Add Climber' onPress={pressHandler}/>
        <ExpoImagePicker />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 3,
    backgroundColor: colors.color1,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    padding: 30,
    justifyContent: 'center',

  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.bodyFont,
  },
  textInput: {
    backgroundColor: colors.white,
    width: '90%',
    height: 40,
    marginBottom: 60,
  },
  submitButton: {
    margin: 20,
  }
});