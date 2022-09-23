import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Link } from "react-router-native";
import React from "react";
import NavBar from "../components/NavBar";
import Colors from "../constants/Colors";

export default function Ejercicios({ Tipo }) {
  const Data = [
    {
      Nombre: "Notas",
      Descripcion:
        "Aprende las notas en una guitarra",
    },
    {
      Nombre: "Notas",
      Descripcion:
        "Acordes básicos",
    },
    {
      Nombre: "Notas",
      Descripcion:
        "Las escalas para principiantes",
    },
    {
      Nombre: "Notas",
      Descripcion:
        "Como leer música",
    },
  ];
  const RenderItem = ({ item }) => {
    return (
      <View style={style.Ejercicio}>
        <Link to="/Ejercicio">
          <View styles={style.EjercicioContainer}>
            <View style={style.EjercicioImage}></View>

            <Text style={style.EjercicioTitle}>{item.Nombre}</Text>
          </View>
        </Link>
        <Text style={style.EjercicioDescription}>{item.Descripcion}</Text>
      </View>
    );
  };
  return (
    <View style={style.container}>
      <NavBar />
      <Text style={style.Title}>{Tipo}</Text>
      <View style={style.content}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../img/Arrow.png")}
          />
          <Link to="/TeoricoOPractico">
            <Text style={{ fontSize: 20, padding: 10 }}>Volver</Text>
          </Link>
        </View>
        <FlatList data={Data} renderItem={RenderItem} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    width: "100%",
    height: "20%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    maxHeight: 50,
    color: Colors.Blanco,
    backgroundColor: Colors.Azul,
  },
  content: {
    backgroundColor: Colors.Gris,
    flex: 1,
  },
  Ejercicio: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  EjercicioContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  EjercicioImage: {
    width: 150,
    height: 150,
    backgroundColor: Colors.Negro,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 10,
    marginLeft: 50,
  },
  EjercicioDescription: {
    maxWidth: "40%",
    color: Colors.Negro,
    fontSize: 20,
  },
  EjercicioTitle: {
    backgroundColor: Colors.Naranja,
    color: Colors.Negro,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    marginRight: 10,
    marginLeft: 50,
  },
});
