import React from 'react'
import { StatusBar } from 'expo-status-bar'
// import Login from './src/screens/Login'
// import Instrumentos from './src/screens/Instrumentos'
// import Ejercicio from './src/screens/Ejercicio'
import { NativeRouter } from 'react-router-native'
import Main from './src/Main'

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <NativeRouter><Main /></NativeRouter>
    </>
  )
}
