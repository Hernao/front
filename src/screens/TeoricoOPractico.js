import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image
} from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import Colors from "../constants/Colors";

export default function TeoricoOPractico({ navigation, route }) {
  const Data = [
    {
      Nombre: "Teorico",
      Descripcion:
        "En los ejercicios teóricos vas a encontrar material como partituras técnicas y textos explicativos.",
      Imagen: "https://www.kindpng.com/picc/m/6-68498_cmo-identificar-la-clave-de-sol-en-la.png"
    },
    {
      Nombre: "Practico",
      Descripcion:
        "En los ejercicios prácticos vas a encontrar material como acordes y melodías junto con explicaciones para llevalos a cabo vos mismo.",
      Imagen: "https://www.kindpng.com/picc/m/6-68498_cmo-identificar-la-clave-de-sol-en-la.png"
    },
  ];
  const RenderItem = ({ item }) => {
    return (
      <View style={styles.Ejercicio}>
        <TouchableHighlight
          styles={styles.EjercicioContainer}
          onPress={() => {
            navigation.navigate("Ejercicios", {
              Tipo: route.params.Tipo,
            });
          }}
        >
          <View>
            <Image
            style={styles.EjercicioImage}
            source={{uri: item.Imagen}}
            />
            <Text style={styles.EjercicioTitle}>{item.Nombre}</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.EjercicioDescription}>{item.Descripcion}</Text>
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <NavBar />
      <Text style={styles.Title}>Ejercicio</Text>
      <View style={styles.Main}>
        <FlatList data={Data} renderItem={RenderItem} />
        <Text style={styles.Volver} onPress={() => navigation.goBack()}>
          Volver
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Title: {
    fontSize: 30,
    textAlign: "center",
    width: "100%",
    padding: 10,
    fontWeight: "bold",
    color: Colors.Blanco,
    backgroundColor: Colors.Azul,
  },
  Main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Celeste,
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
    marginRight: 30,
    marginLeft: 30,
  },
  EjercicioDescription: {
    maxWidth: "40%",
    color: Colors.Blanco,
    fontSize: 18,
  },
  EjercicioTitle: {
    backgroundColor: Colors.Naranja,
    color: Colors.Blanco,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 22,
    textAlign: "center",
    padding: 10,
    marginRight: 30,
    marginLeft: 30,
  },
  Volver: {
    fontSize: 20,
    width: "100%",
    padding: 10,
    fontWeight: "bold",
    color: Colors.Blanco,
    alignSelf: "flex-start",
  },
  Reverse: {
    flexDirection: "row-reverse",
  },
});
