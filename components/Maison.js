import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
const DATA = [
    {
        title: 'Chambre',
    },
    {
        title: 'Cuisine',
    },
    {
        title: 'Salon',
    },
];
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Maison() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >Maison</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        padding: 10,
        backgroundColor: 'pink'
    },                    
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});