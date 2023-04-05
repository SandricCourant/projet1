import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Cinema from './Cinema';
import Sport from './Sport';


export default function Hobbies(){
    return(
        <View style={styles.item}>
            <Text style={styles.title}>Hobbies</Text>
            <Cinema/>
            <Sport/>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#eff6ee',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        textAlign:'center',
        fontWeight: 'bold',
        marginBottom: 10
    }
})