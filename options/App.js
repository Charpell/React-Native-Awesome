import React from 'react'
import { View, Text } from 'react-native'

import Options from './options'
import { days, times } from './data'

const App = () => {
  return (
    <Options 
      values={days}
      chosen={0}
    />
  )
}

export default App
