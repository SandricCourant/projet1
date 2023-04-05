import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Lastname(props) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{props.name}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        textAlign:'center'
    }
})
