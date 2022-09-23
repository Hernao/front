import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import Button from '../components/Button'
import Title from '../components/Title'
import Colors from '../constants/Colors'
import { Link } from 'react-router-native'

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.img}></View>
      <Title color={Colors.Azul} text="Iniciar Sesion" />
      <View style={styles.form}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry></TextInput>
      </View>
      
      <Link to={"/Instrumentos"}>
        <Button
          color={Colors.Naranja}
          text={'Enviar'}
        /></Link>

      <Text style={styles.text}>
        En caso de no tener cuenta{' '}
        <Text style={styles.register}>Registrarse</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    backgroundColor: Colors.Gris,
    width: '100%',
    maxWidth: 200,
    height: '100%',
    maxHeight: 200,
    marginBottom: 20,
    borderRadius: 200,
  },
  form: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: Colors.Gris,
    padding: 25,
    paddingBottom: 80,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 5,
    minHeight: 40,
    maxWidth: '50%',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
  register: {
    fontWeight: 'bold',
    color: Colors.Naranja,
  },
})
