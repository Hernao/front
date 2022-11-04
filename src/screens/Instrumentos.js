import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// import Button from '../components/Button'
import Title from '../components/Title'
import Instrumento from '../components/Instrumento'
import NavBar from '../components/NavBar'
import Colors from '../constants/Colors'

export default function Instrumentos ({navigation, route}) {
  return (
    <View style={styles.container}>
      <NavBar/>
      <Text style={styles.Title}>Instrumentos</Text>
      <View style={styles.InstrumentosContainer}>
        <Title color={Colors.Naranja} text='Hace click en la imagen' />
        <View style={styles.Instrumentos}>
          <Instrumento navigation={navigation} text='Guitarra' image="https://www.soyvisual.org/sites/default/files/styles/facebook_og/public/images/photos/mus_0002.jpg?itok=sapo7_8J"/>
          <Instrumento navigation={navigation} text='Bajo' image="https://ar.xprostore.com/image/cache/data/imagenesweb/jazz-bass-s-650x650.jpg"/>
          <Instrumento navigation={navigation} text='Piano' image="https://theguitarhouse.com.my/image/theguitarhouse/image/cache/data/all_product_images/product-2004/484851899b870f7b23bfe87761e03f4c-630x630.jpg"/>
        </View>
          <Text style={styles.Volver} onPress={()=>navigation.goBack()}> Volver</Text>
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
