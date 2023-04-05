import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        margin: 8
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 10,
    },
});

const ButtonComponent = (props) => {
    const handlePress = (buttonType) => {
        console.log('Bouton ' + buttonType + ' cliqué !');
    };

    return (
        <TouchableOpacity onPress={() => handlePress(props.dir)}>
            <View style={styles.container}>
                <Ionicons name="md-add-circle" size={24} color="blue" style={styles.icon} />
                <Text style={styles.title}>{props.dir}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonComponent;