import React from 'react';
import { Text, View, ScrollView, StyleSheet, } from 'react-native';
import { NewClimberButton } from '../components/NewClimberButton';
import { globalStyles } from '../styles/gobalStyles';

export function Users( { navigation } ) {

    const pressHandler = () => navigation.navigate('New Climber');

    return(
      <View style={styles.container}>
        <ScrollView style={styles.body}>
          
        </ScrollView>
        <NewClimberButton pressHandler={pressHandler}/>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 3,
    backgroundColor: globalStyles.mainBackground.backgroundColor,
    alignItems: 'center',
  },
  body: {
    width: '100%',
    flex: 1,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  nav: {
    backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    width: '100%',
    height: 80,
    alignItems: 'center',
  }
});