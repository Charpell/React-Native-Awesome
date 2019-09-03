import React, { Component } from 'react'
import { Text, View, Animated, StyleSheet, TouchableOpacity } from 'react-native'

const colorDefault = 'rgba(255, 255, 255, 1)',  // white
  colorSelected = 'rgba(103,58,183, 1)';        // purple

export default class option extends Component {
  state = {
    background: new Animated.Value(0)
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
