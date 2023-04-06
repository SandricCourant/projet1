import * as React from 'react';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

export default function Chronometre() {
    const [time, setTime] = useState(0);
    const [enCours, setEnCours] = useState(false);
    useEffect(() => {
        let intervalId;
        if (enCours) {
            intervalId = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        }
        return () =>
            clearInterval(intervalId);
    }, [enCours]);

    const Demarrer = () => {
        setEnCours(true);
    };
    const Arreter = () => {
        setEnCours(false);
    };
    const Reinitialiser = () => {
        setTime(0);
        setEnCours(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{time}</Text>
            <View style={styles.col}>
                <TouchableOpacity style={styles.button} disabled={enCours} onPress={Demarrer}><Text style={styles.buttonText}>START</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} disabled={!enCours} onPress={Arreter}><Text style={styles.buttonText}>STOP</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} disabled={enCours} onPress={Reinitialiser}><Text style={styles.buttonText}>RESET</Text></TouchableOpacity>

            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
    timer: {
        backgroundColor: '#000000c0',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'whitesmoke',
        fontWeight: 'bold',
    },
    col: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});