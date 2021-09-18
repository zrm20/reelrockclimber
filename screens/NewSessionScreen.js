import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/gobalStyles'

export default function NewSessionScreen() {
  return (
    <View style={styles.container}>
      <Text>New Session</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    alignItems: 'center',
    padding: '2%'
  }
});
