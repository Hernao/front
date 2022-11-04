import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export default function Title({ color, text }) {
  return <Text style={[styles.Title, { backgroundColor: color }]}>{text}</Text>
}

const styles = StyleSheet.create({
  Title: {
    padding: 15,
    borderRadius: 30,
    minWidth: 300,
    textAlign: 'center',
    fontSize: 30,
    color: Colors.Blanco,
  },
})
