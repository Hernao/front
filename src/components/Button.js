import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export default function Button({ color, text, cb }) {
  return (
      <Text onPress={cb} style={[styles.button, { backgroundColor: color }]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 15,
    minWidth: 200,
    textAlign: 'center',
    color: Colors.Negro,
    fontSize: 20,
  },
})