import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { colors } from '../styles/gobalStyles';

export function Graphs() {
  return(
    <View style={styles.container}>
      <Text>Graphs</Text>
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
});