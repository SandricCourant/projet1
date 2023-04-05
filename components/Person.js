import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Hobbies from './hobbies/Hobbies';
import Fullname from './fullname/Fullname';


export default function Person(){
    return(
        <View style={styles.item}>
            <Text style={styles.title}>Person</Text>
            <Fullname firstname = "Anthoine" lastname = "Beauchamps" />
            <Hobbies/>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'pink',
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