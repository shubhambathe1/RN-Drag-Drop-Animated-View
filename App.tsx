/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DragDrop} from './src/DragDrop';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.screen}>
        <DragDrop>
          <View style={styles.ball} />
        </DragDrop>
        <View style={styles.pit}>
          <Text style={styles.text}>PIT</Text>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
  },
  pit: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default App;
