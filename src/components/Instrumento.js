import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import Colors from '../constants/Colors'

export default function Instrumento({ text }) {
  return (
    <Link to="/TeoricoOPractico">
      <View style={styles.container}>
        <View style={styles.img}></View>
        <Text style={styles.title}>{text}</Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    marginTop: 20,
  },
  img: {
    width: '100%',
    height: '80%',
    backgroundColor: Colors.Negro,
  },
  title: {
    width: '100%',
    height: '20%',
    backgroundColor: Colors.Azul,
    color: Colors.Blanco,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
