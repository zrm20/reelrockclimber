import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GradeSelector from '../components/GradeSelector';
import NumberChanger from '../components/NumberChanger';
import TogglingButton from '../components/TogglingButton';
import RoundedButton from '../components/RoundedButton';
import { colors } from '../styles/gobalStyles';
import { wallRatings } from '../wallRatings';
import { Navigation } from 'react-native-navigation';

export default function AddRouteScreen({ navigation, route }) {
  const [routeType, setRouteType] = useState(route.params);
  const [attempts, setAttempts] = useState(1);
  const [grade, setGrade] = useState();
  const [isSent, setIsSent] = useState(true);
  const [isFlashed, setIsFlashed] = useState(false);

  function toggleFlash(){
    if(!isFlashed){
      //user has set isFlashed to true, therefore attempts must be 1 and isSent must be true
      setAttempts(1);
      setIsSent(true);
      setIsFlashed(true);
    }else{
      //user has set isFlashed to false
      setIsFlashed(false);
    }
  };

  function changeAttempts(value){
    setAttempts(value);
    if(value > 1){
      //if attempts is greater than 1, then a flash is not possible
      setIsFlashed(false);
    }
  };

  function toggleSent(){
    if(isSent){
      //user is setting isSent to false, therefore, isFlash must be false
      setIsSent(false);
      setIsFlashed(false);
    }else{
      //user is setting isSent to true
      setIsSent(true);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New {wallRatings[routeType].name} Route</Text>
      <GradeSelector type={routeType} state={grade} setState={setGrade}/>
      <NumberChanger text='Attempts' state={attempts} setState={changeAttempts}/>
      <View style={styles.row}>
        <TogglingButton text='Sent' state={isSent} pressHandler={toggleSent}/>
        <TogglingButton text='Flashed' state={isFlashed} pressHandler={toggleFlash}/>
      </View>
      <RoundedButton text='Add Route' size={25} pressHandler={() => navigation.goBack()}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    alignItems: 'center',
    padding: '2%',
    justifyContent: 'space-between'
  },
  title: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 5
  },
  row: {
    flexDirection: 'row'
  }

});
