import React from 'react'
import { Text, StyleSheet, View, TouchableHighlight, Image } from 'react-native'
import Colors from '../constants/Colors'

export default function Instrumento({ text, navigation, image }) {
  return (
    <TouchableHighlight onPress={()=>navigation.navigate("TeoricoOPractico", {
      Tipo: text
    })}>
      <View style={styles.container}>
        <Image
        style={styles.img}
        source={{uri:image}}
        />
        <Text style={styles.title}>{text}</Text>
      </View>
    </TouchableHighlight>
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
