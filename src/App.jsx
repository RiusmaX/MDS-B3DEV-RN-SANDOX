/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {
  StatusBar,
  useColorScheme
} from 'react-native'
import MainNavigator from './navigation/Navigator'
import BootSplash from 'react-native-bootsplash'

function App () {
  const isDarkMode = useColorScheme() === 'dark'
  useEffect(() => {
    BootSplash.hide({ fade: true })
  }, [])
  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
