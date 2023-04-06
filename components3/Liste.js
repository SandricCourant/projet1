import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function Liste() {
    const [list, setList] = useState(['Pomme', 'Banane', 'Fraise']);
    const [input, setInput] = useState('');

    const Add = () => {
        setList([...list, input]);
        setInput('');
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder='input value'></TextInput>
            <TouchableOpacity style={styles.button} onPress={Add}><Text style={styles.buttonText}>ADD</Text></TouchableOpacity>
            {list.map((element) => {
                return <Text style={styles.text}>{element}</Text>;
            })}
        </View>);
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    text: {
        backgroundColor: '#000000c0',
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },
    input: {
        backgroundColor: 'grey',
        height: 40,
        margin: 12,
        padding: 10,
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
    }
});