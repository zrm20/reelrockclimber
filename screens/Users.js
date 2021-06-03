import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, } from 'react-native';
import { NewClimberButton } from '../components/NewClimberButton';
import { globalStyles } from '../styles/gobalStyles';
import { ClimberWidget } from '../components/ClimberWidget';
import { useSelector } from 'react-redux';

export function Users( { navigation } ) {

  const [isEditing, setIsEditing] = useState(false);
  const climberList = useSelector((state)=> (state.climberList));

  const pressHandler = () => navigation.navigate('New Climber');

  if(!isEditing){
    return(
      <View style={styles.container}>
        <Button 
          title="Edit"
          onPress={()=> setIsEditing(true)}
          />
        <ScrollView style={styles.body}>
          {climberList.map((item) => (<ClimberWidget key={item.id} climber={item}/>))}
        </ScrollView>
        <NewClimberButton pressHandler={pressHandler}/>
      </View>
    );
  }else{
    return(
      <View style={styles.container}>
        <Button 
          title="Done"
          onPress={() => setIsEditing(false)}
          />
        <ScrollView style={styles.body}>
          {climberList.map((item) => (<ClimberWidget key={item.id} climber={item}/>))}
        </ScrollView>
        <NewClimberButton pressHandler={pressHandler}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 10,
    backgroundColor: globalStyles.mainBackground.backgroundColor,
    alignItems: 'center',
  },
  body: {
    width: '100%',
    flex: 1,
    alignContent: 'center'
  }
});