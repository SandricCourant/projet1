import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Voiture from './components/Voiture';
import Maison from './components/Maison';
import Person from './components/Person';
import Player from './components/Player';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Voiture />
        <Maison />
        <Person />
        <Player />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});