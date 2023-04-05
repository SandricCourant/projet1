import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Cinema() {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>Avengers</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#d5e6ee',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        textAlign:'center'
    }
})

