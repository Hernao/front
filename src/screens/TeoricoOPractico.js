import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Link } from 'react-router-native'
import React from 'react'
import NavBar from '../components/NavBar'
import Colors from '../constants/Colors'

export default function TeoricoOPractico() {
  return (
    <View style={styles.Container}>
      <NavBar />
      <Text style={styles.Title}>Ejercicio</Text>
      <View style={styles.Main}>
        <View style={styles.Ejercicio}>
          <Link to="/Teorico">
            <View styles={styles.EjercicioContainer}>
              <View style={styles.EjercicioImage}></View>
              <Text style={styles.EjercicioTitle}>Teóricos</Text>
            </View>
          </Link>
          <Text style={styles.EjercicioDescription}>
            En los ejercicios teóricos vas a encontrar material como partituras,
            técnicas y textos explicativos.
          </Text>
        </View>
        <View style={[styles.Ejercicio, styles.Reverse]}>
          <Link to="/Practico">
            <View styles={styles.EjercicioContainer}>
              <View style={styles.EjercicioImage}></View>
              <Text style={styles.EjercicioTitle}>Prácticos</Text>
            </View>
          </Link>
          <Text style={styles.EjercicioDescription}>
            En los ejercicios prácticos vas a encontrar material como acordes y
            melodías junto con explicaciones para llevalos a cabo vos mismo.
          </Text>
        </View>
        <Link to="/Instrumentos">
          <Text style={styles.Volver}> Volver</Text>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Title: {
    fontSize: 30,
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontWeight: 'bold',
    color: Colors.Blanco,
    backgroundColor: Colors.Azul,
  },
  Main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Celeste,
  },
  Ejercicio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  EjercicioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  EjercicioImage: {
    width: 150,
    height: 150,
    backgroundColor: Colors.Negro,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 30,
    marginLeft: 30,
  },
  EjercicioDescription: {
    maxWidth: '40%',
    color: Colors.Blanco,
    fontSize: 16,
  },
  EjercicioTitle: {
    backgroundColor: Colors.Naranja,
    color: Colors.Blanco,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    marginRight: 30,
    marginLeft: 30,
  },
  Volver: {
    fontSize: 20,
    width: '100%',
    padding: 10,
    fontWeight: 'bold',
    color: Colors.Blanco,
    alignSelf: 'flex-start',
  },
  Reverse: {
    flexDirection: 'row-reverse',
  },
})
