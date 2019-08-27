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

import Flexxing from './flexxing/App'

const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <Flexxing />
    </SafeAreaView>
  );
};


export default App;
