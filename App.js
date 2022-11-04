import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Main'

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer><Main /></NavigationContainer>
    </>
  )
}
