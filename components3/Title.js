import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title(props) {
  return (
    <View style={styles.fontText}>
      <Text style={[styles.title, styles.text]}>{props.title}</Text>
      <Text style={[styles.subtitle, styles.text]}>{props.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fontText: {
    backgroundColor: '#000000c0',
  },
  text: {
    paddingBottom: 15,
    color: 'white',
    textAlign: 'center',
  },
  title: {
    paddingTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    textDecorationLine: 'underline'
  },

});