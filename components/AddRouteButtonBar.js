import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../styles/gobalStyles';
import SquareButton from './SquareButton';

export default function AddRouteButtonBar({ navigator }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SquareButton 
          size={30} 
          text='Boulder'
          pressHandler={()=>navigator.navigate('Add Route', 'boulder')}
        />
        <SquareButton 
          size={30} 
          text='Tope-Rope'
          pressHandler={()=>navigator.navigate('Add Route', 'topRope')}
        />
        <SquareButton 
          size={30} 
          text='Lead'
          pressHandler={()=>navigator.navigate('Add Route', 'lead')}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%'
  },
  title: {
    color: colors.white,
    fontFamily: fonts.bodyFont,
    fontSize: 14,
    marginBottom: 5
  }
});
