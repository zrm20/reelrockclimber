import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/gobalStyles';
import { AntDesign } from '@expo/vector-icons';

export default function NumberChanger({ text, state, setState }) {
  function increment(){
    setState(state + 1);
  };

  function decrement(){
    if(state > 1){
      setState(state - 1);
    }
  };

  return (
    <View>
      <Text style={styles.title}>{text}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={decrement}>
          <AntDesign name="minuscircleo" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.number}>{state}</Text>
        <TouchableOpacity onPress={increment}>
          <AntDesign name="pluscircleo" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: colors.white,
    fontSize: 18,
  },
  number: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 10
  }
})
