import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { colors } from '../styles/gobalStyles';


export default function DashboardScreen() {
    return(
      <View style={styles.container}>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    alignItems: 'center',
    padding: '2%'
  },
});