import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import { defaultStyles } from './styles'

const { width, height } = Dimensions.get('window')
const cols = 3, rows = 3

const MoviePoster = (props) => {
  const { movie, movie: { title, genre, poster }, onOpen } = props

  return (
    <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: poster }} style={styles.image} />
      </View>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <Text style={styles.genre} numberOfLines={1}>{genre}</Text>
    </TouchableOpacity>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  genre: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});