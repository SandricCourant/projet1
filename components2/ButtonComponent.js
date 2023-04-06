import * as React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonComponent = () => {
  const handlePress = (buttonType) => {
    console.log(`Bouton ${buttonType} cliqué !`);
  };

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('gauche')}>
        <Text style={styles.buttonText}>Gauche</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Droite')}>
        <Text style={styles.buttonText}>Droite</Text>
      </TouchableOpacity>
    </View>
  );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection:  'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    button: {
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
    },

    buttonText:{
      color: 'whitesmoke',
      fontWeight: 'bold',
    }
  });

  export default ButtonComponent;