import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  Image
} from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import Colors from "../constants/Colors";
import Data from "../constants/Data";

export default function Ejercicios({ navigation, route }) {
  const Ejercicios = Data[route.params.Tipo];
  const RenderItem = ({ item }) => {
    return (
      <View style={style.Ejercicio}>
        <TouchableHighlight
          styles={style.EjercicioContainer}
          onPress={() =>
            navigation.navigate("Ejercicio", {
              Tipo: route.params.Tipo,
              Id: item.Id,
            })
          }
        >
          <View>
            <Image 
              style={style.EjercicioImage}
              source={typeof item.Imagen == "object" ? {uri:item.Imagen.url} : undefined}
            />
            <Text style={style.EjercicioTitle}>{item.Nombre}</Text>
          </View>
        </TouchableHighlight>
        <Text style={style.EjercicioDescription}>{abreviar(item.Descripcion)}</Text>
      </View>
    );
  };
  return (
    <View style={style.container}>
      <NavBar />
      <Text style={style.Title}>{route.params.Tipo}</Text>
      <View style={style.content}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ fontSize: 20, padding: 10 }}
            onPress={() => navigation.goBack()}
          >
            Volver
          </Text>
        </View>
        <FlatList data={Ejercicios} renderItem={RenderItem} />
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
    marginRight: 20,
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
    maxWidth: 150,
  },
});

function abreviar(str){
  let maxLetras = 100;
  if(str.length > maxLetras){
    return str.substring(0,maxLetras-3)+"...";
  }else{
    return str;
  }
}