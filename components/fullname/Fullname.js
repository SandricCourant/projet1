import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Firstname from './Firstname';
import Lastname from './Lastname';


export default function Fullname(props){
    return(
        <View style={styles.item}>
            <Text style={styles.title}>Fullname</Text>
            <Firstname name = {props.firstname} />
            <Lastname name = {props.lastname}/>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#d1c2ea',
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