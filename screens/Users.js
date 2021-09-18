import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, } from 'react-native';
import { colors, fonts } from '../styles/gobalStyles';
import CircleButton from '../components/CircleButton';

export function Users( { navigation } ) {
  return(
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
        <Text style={styles.emptyText}>No Climbers Saved</Text>
        <Text style={styles.emptyText}>Press + to add a climber</Text>
      </ScrollView>
      <CircleButton 
        pressHandler={() => navigation.navigate('New Climber')}
        text='New Climber'
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
  scrollView: {
    flex: 1,
    backgroundColor: colors.color3,
    padding: '2%',
    width: '95%',
    borderRadius: 8,
    marginBottom: 3
  },
  scrollContent: {
    alignItems: 'center'
  },
  emptyText: {
    color: colors.white,
    fontFamily: fonts.bodyFont,
    fontSize: 24
  }
});