import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ShoppingList = (props) => {
    return (
        <View style={styles.fontText}>
            <Text style={[styles.title, styles.text]}>{props.title}</Text>
            <View style={styles.tab}>
                {props.tab.map((element) => {
                    return <Text style={[styles.subtitle, styles.text]}>{element}</Text>
                })}
            </View>
        </View>
    );
};

export default ShoppingList;

const styles = StyleSheet.create({
    fontText: {
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
    subtitle: {
        fontSize: 20,
        fontStyle: "italic"
    },
    tab: {
        flexDirection:'column'
    },
});