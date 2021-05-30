import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, } from 'react-native';
import { NewClimberButton } from '../components/NewClimberButton';
import { globalStyles } from '../styles/gobalStyles';
import Climber from '../classes/Climber'
import { ClimberWidget } from '../components/ClimberWidget';

export function Users( { navigation } ) {

  const [climberList, setClimberList] = useState([])

  function addClimber(name) {
    const nextId = climberList.length > 0 ? climberList[climberList.length - 1].id + 1 : 1;
    setClimberList([...climberList, new Climber(nextId, name)]);
    console.log(`${name} added to climber list`);
  }

  const pressHandler = () => navigation.navigate('New Climber', {submitHandler: addClimber});

  return(
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        {climberList.map((item) => (<ClimberWidget key={item.id} climber={item}/>))}
      </ScrollView>
      <NewClimberButton pressHandler={pressHandler}/>
    </View>
  );
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