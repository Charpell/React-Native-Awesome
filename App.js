/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView
} from 'react-native';
console.disableYellowBox = true;

import Flexxing from './flexxing/App'
import MovieList from './movielist/App'
import Animating from './animation/App'
import Drag from './dragdrop/App'

const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      {/* <Flexxing /> */}
      {/* <MovieList /> */}
      {/* <Animating /> */}
      <Drag />
    </SafeAreaView>
  );
};


export default App;
