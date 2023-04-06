import * as React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import ShoppingList from './components3/ShoppingList';

const image = {uri: 'https://www.pixelstalk.net/wp-content/uploads/images6/Aesthetic-HD-Wallpaper-Phone-Free-download.jpg'};

const myTab = ["Apple", "Banana", "Strawberry"];

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <ShoppingList title= "My shopping list" tab={myTab}/>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;