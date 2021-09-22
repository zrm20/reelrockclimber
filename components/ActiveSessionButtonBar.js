import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoundedButton from './RoundedButton';

export default function ActiveSessionButtonBar({ completePress }) {
  return (
    <View style={styles.container}>
      <RoundedButton 
        text='Complete Session'
        pressHandler={completePress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }
})
