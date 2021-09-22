import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RoundedButton from '../components/RoundedButton';
import { colors } from '../styles/gobalStyles'

export default function NewSessionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.formBody}>

      </View>
      <RoundedButton 
        text='Start Session'
        pressHandler={() => navigation.navigate('Active Session')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    alignItems: 'center',
    padding: '2%'
  },
  formBody: {
    backgroundColor: colors.color3,
    flex: 1,
    width: '100%',
    margin: '2%'
  }
});
