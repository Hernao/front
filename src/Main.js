import React from 'react'
import { View } from 'react-native'
import { Redirect, Route, Switch } from 'react-router-native'
import Login from './screens/Login'
import Ejercicio from './screens/Ejercicio'
import Instrumentos from './screens/Instrumentos'
import TeoricoOPractico from './screens/TeoricoOPractico'
import Ejercicios from './screens/Ejercicios'

export default function Main () {
  return (
    <View style={{ flex: 1 }}>
      <Switch>
      <Route path='/Ejercicios' exact>
          <Ejercicios />
        </Route>
        <Route path='/Ejercicio' exact>
          <Ejercicio />
        </Route>
        <Route path='/Instrumentos' exact>
          <Instrumentos />
        </Route>
        <Route path='/TeoricoOPractico' exact>
          <TeoricoOPractico />
        </Route>
        <Route path='/Teorico' exact>
          <Ejercicios Tipo="Teorico" />
        </Route>
        <Route path='/Practico' exact>
          <Ejercicios Tipo="Practico" />
        </Route>
        <Route path='/' exact>
          <Login />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}
