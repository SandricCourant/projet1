import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Voiture() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peugeot</Text>
      <Text style={styles.subtitle}>308</Text>
      <Text style={styles.description}>Couleur: Grise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },

  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  }
});