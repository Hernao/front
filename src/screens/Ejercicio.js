import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Title from '../components/Title'
import Colors from '../constants/Colors'
import Data from "../constants/Data"

export default function Ejercicio ({navigation, route}) {
  const Ejercicio = Data[route.params.Tipo].filter(e=> e.Id === route.params.Id)[0];
  return (
    <View style={{flex:1}}>
      <Text style={styles.NavBar}>Ejercicio</Text>
      <View style={styles.container}>
        <Title color={Colors.Naranja} text={Ejercicio.Nombre} />
        <Image
          style={{width: "50%", aspectRatio: Ejercicio.Imagen.width/Ejercicio.Imagen.height, marginTop:5}}
          source={{uri:Ejercicio.Imagen.url}}
        />
        <Text>
          {Ejercicio.Descripcion}
        </Text>
        <View style={styles.Buttons}>
          <Text style={{ fontSize: 20, padding: 10 }} onPress={()=>navigation.goBack()}>Volver</Text>
          <Text style={styles.Button}>Ver Reviews</Text>
        </View>
      </View>
    </View>
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
    marginTop: 40,
    position: "absolute",
    bottom: 10,
    flexDirection: 'row'
  },
  Button: {
    color: Colors.Blanco,
    backgroundColor: Colors.Azul,
    padding: 5,
    marginLeft: '60%'
  }
})
