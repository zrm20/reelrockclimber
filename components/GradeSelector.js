import React, { useState }from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../styles/gobalStyles';
import { wallRatings } from '../wallRatings';

function GradeButton({ grade, pressHandler, isActive }){
  return(
    <TouchableOpacity style={styles.gradeButton(isActive)} onPress={()=> pressHandler(grade.value)}>
      <Text>{grade.value}</Text>
    </TouchableOpacity>
  )
}

export default function GradeSelector({ type, state, setState }) {
  const scale = wallRatings[type].scale;

  return (
    <View style={styles.container}>
      {
        scale.map(grade =>(
          <GradeButton 
            key={grade.value} 
            grade={grade}
            isActive={state === grade.value}
            pressHandler={setState}
          />))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.color3,
    padding: '1%',
    borderRadius: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  gradeButton: active => ({
    width: '22%',
    height: 40,
    borderWidth: 2,
    borderColor: !active ? colors.color2 : colors.color5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    backgroundColor: !active ? colors.white : colors.color5,
    borderRadius: 5
  })
})
