import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import{ colors, fonts, globalStyles } from '../styles/gobalStyles'
import { useDispatch, useSelector } from 'react-redux';
import { addClimber } from '../store/store';
import Climber from '../classes/Climber'
import * as ImagePicker from 'expo-image-picker';

export function NewClimber({ route, navigation }) {
  const [nameField, setNameField] = useState("Hello");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const nextId = useSelector((state) => (state.climberList.length + 1));
  
  //check for camera permissions
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  //pressing 'Add climber' creates a new Climber object and adds to the climberList state in store
  const pressHandler = () => {
    const newClimber = new Climber(nextId, nameField, image);
    dispatch(addClimber(newClimber));
    navigation.navigate('Users');
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <Button title="Select Profile Pic" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100}} />}  
        <Text style={globalStyles.h3}>Climber Name</Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={setNameField}
          />
        <Button style={styles.submitButton} title='Add Climber' onPress={pressHandler}/>
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