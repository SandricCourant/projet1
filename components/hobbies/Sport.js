import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Sport() {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>Natation</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#a5f6ee',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        textAlign:'center'
    }
})

