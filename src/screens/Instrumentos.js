import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// import Button from '../components/Button'
import Title from '../components/Title'
import Instrumento from '../components/Instrumento'
import NavBar from '../components/NavBar'
import Colors from '../constants/Colors'
import { Link } from 'react-router-native'

export default function Instrumentos () {
  return (
    <View style={styles.container}>
      <NavBar/>
      <Text style={styles.Title}>Instrumentos</Text>
      <View style={styles.InstrumentosContainer}>
        <Title color={Colors.Naranja} text='Hace click en la imagen' />
        <View style={styles.Instrumentos}>
          <Instrumento text='Violín' />
          <Instrumento text='Trompeta' />
          <Instrumento text='Flauta' />
        </View>
        <Link to="/">
          <Text style={styles.Volver}> Volver</Text>
        </Link>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxHeight: '100%',
    maxWidth: '100%',
    backgroundColor: Colors.Gris
  },
  Title: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    maxHeight: 50,
    color: Colors.Blanco,
    backgroundColor: Colors.Azul
  },
  InstrumentosContainer: {
    width: '100%',
    height: '80%',
    padding: 25
  },
  Instrumentos: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})
