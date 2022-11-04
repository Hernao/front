import { Text, View, Image, StyleSheet } from 'react-native'
import React from 'react'
import User from '../img/User.png'
import Search from '../img/Search.png'

export default function NavBar() {
    return (
      <View style={styles.NavBar}>
        <Image source={User} />
        <Text style={styles.NavBarText}>DoReMi</Text>
        <Image source={Search} />
      </View>
    )
}
const styles = StyleSheet.create({
    NavBar: {
      flex: 1,
      justifyContent: 'space-around',
      width: '100%',
      maxHeight: 120,
      padding: 20,
      flexDirection: 'row',
      backgroundColor: Colors.Blanco
    },
    NavBarText: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 50
    },
  })
  