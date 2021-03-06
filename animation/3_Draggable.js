import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, PanResponder } from 'react-native'

export default class App extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.ValueXY()
    this._value = {x: 0, y: 0}
    this.animatedValue.addListener(value => this._value = value)

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y
        })
        this.animatedValue.setValue({ x: 0, y: 0  })
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValue.x, dy: this.animatedValue.y }
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset();
        Animated.decay(this.animatedValue, {
          deceleration: 0.997,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start()
      }
    })
  }


  render() {
    const animatedStyle = { transform: [{ translateX: this.animatedValue.x }, { translateY: this.animatedValue.y }] }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} { ...this.panResponder.panHandlers}>
          <Text style={styles.text}>Drag Me</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: '#333',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  text: {
    color: '#FFF'
  }
})