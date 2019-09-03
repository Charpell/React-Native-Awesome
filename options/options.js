import React from 'react'
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native'

import Option from './option';

const { width } = Dimensions.get('window');

const options = (props) => {
  const { values, chosen } = props 
  return (
    <View style={styles.container}>
      <ScrollView>
        {values.map((value, map) => {
          <View>
            <Option 
              value={value}
            />
          </View>
        })}
      </ScrollView>
    </View>
  )
}

export default options

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    marginRight: -10,
  },
});