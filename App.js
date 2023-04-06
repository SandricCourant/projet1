import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Voiture from './components/Voiture';
import Maison from './components/Maison';
import Person from './components/Person';
import Player from './components/Player';
import ButtonComponent from './components2/ButtonComponent';

export default function App() {
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <ScrollView>
  //       <Voiture />
  //       <Maison />
  //       <Person />
  //       <Player />
  //     </ScrollView>

  //   </SafeAreaView>
  // );
  return (
      <View style={styles.container}>
        <ButtonComponent dir='gauche' />
        <ButtonComponent dir='droite' />
      </View>   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});