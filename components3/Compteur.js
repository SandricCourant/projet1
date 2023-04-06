import * as React from 'react';
import { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

export default function Compteur() {
    const [compte, setCompte] = useState(10);

    const increment = () => {
        setCompte(compte + 1);
    };
    const decrement = () => {
        setCompte(compte - 1);
    };

    return (
        <View>
            <View style={styles.container} >
                <Text style={[styles.text, styles.title]}>{compte}</Text>
            </View>
            <View style={styles.col}>
                <Button title='-' onPress={decrement}></Button>
                <Button title='+' onPress={increment}></Button>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
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
    col: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        padding: 10
    },
});