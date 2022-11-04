import React from "react";
import { View } from "react-native";
import Login from "./screens/Login";
import Ejercicio from "./screens/Ejercicio";
import Instrumentos from "./screens/Instrumentos";
import TeoricoOPractico from "./screens/TeoricoOPractico";
import Ejercicios from "./screens/Ejercicios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
      initialRouteName="Instrumentos"
          screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="Ejercicios" component={Ejercicios} />
        <Stack.Screen name="Ejercicio" component={Ejercicio} />
        <Stack.Screen name="Instrumentos" component={Instrumentos} />
        <Stack.Screen name="TeoricoOPractico" component={TeoricoOPractico} />
      </Stack.Navigator>
    </View>
  );
}
