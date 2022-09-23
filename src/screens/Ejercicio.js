import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Link } from 'react-router-native'
import Title from '../components/Title'
import Colors from '../constants/Colors'

export default function Ejercicio () {
  return (
    <>
      <Text style={styles.NavBar}>Ejercicio</Text>
      <View style={styles.container}>
        <Title color={Colors.Naranja} text='Acordes' />
        <Text style={styles.img}> Foto </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisis quam eu semper cursus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </Text>
        <Text>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Donec bibendum et libero semper imperdiet.
          Nulla id nulla ac massa tincidunt eleifend sed et est. Nunc tempor
          dolor vel leo pretium pharetra non consectetur augue. Integer magna
          nibh, molestie vitae enim eget, egestas porttitor justo
        </Text>
        <Text>
          Integer in purus erat. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Praesent sed velit at erat
          elementum ultricies non non nulla. Etiam non egestas lectus, non
          vehicula est. Aliquam elementum hendrerit risus iaculis tincidunt.
          Vestibulum sed sapien ultricies erat vulputate ultrices at nec mauris.
          Sed lacinia eros eu orci vehicula, eu interdum quam rhoncus.
        </Text>
        <View style={styles.Buttons}>
        <Link to="/Ejercicios">
            <Text style={{ fontSize: 20, padding: 10 }}>Volver</Text>
          </Link>
          <Text style={styles.Button}>Ver Reviews</Text>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.Gris,
    padding: 20
  },
  NavBar: {
    flex: 1,
    width: '100%',
    maxHeight: 70,
    padding: 20,
    backgroundColor: Colors.Azul,
    color: Colors.Blanco,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: Colors.Negro,
    color: Colors.Blanco,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },
  Buttons: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row'
  },
  Button: {
    color: Colors.Blanco,
    backgroundColor: Colors.Azul,
    padding: 5,
    marginLeft: '60%'
  }
})
