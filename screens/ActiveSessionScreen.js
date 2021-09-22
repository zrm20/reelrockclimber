import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActiveSessionButtonBar from '../components/ActiveSessionButtonBar';
import AddRouteButtonBar from '../components/AddRouteButtonBar';
import SquareButton from '../components/SquareButton';
import { colors } from '../styles/gobalStyles';
import CurrentSessionInfo from '../widgets/CurrentSessionInfo';
import RoutesScroller from '../widgets/RoutesScroller';

export default function ActiveSessionScreen({ navigation }) {

  function completeSession(){
    navigation.goBack();
  };


  return (
    <View style={styles.container}>
      <CurrentSessionInfo />
      <AddRouteButtonBar navigator={navigation}/>
      <RoutesScroller />
      <ActiveSessionButtonBar 
        completePress={completeSession}
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
  }
});
