import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function checkWin(value) {
  if (value >= 100) {
    return true;
  }
  return false;
}

export default function Player() {
  let name = 'sandric';
  let score = 105;
  if (checkWin(score)) {
    return (
      <View>
        <Text style={styles.win}>{name} votre score est de {score}, vous avez gagné !</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.lose}>{name} votre score est de {score}, vous avez perdu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  win: {
    color: 'green'
  },
  lose: {
    color: 'red'
  }
})