import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

export default function AppInfo() {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../../assets/ucsmIcon.png")}
          resizeMode="contain"
          style={styles.logo}
          containerStyle={{ marginRight: 90 }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 15 }}>
          Universidad Católica de Santa Mariá {"\n"}
        </Text>
        <Text>Desarrollado por:{"\n"}</Text>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          Fernando Mahiler Chullo Mamani{"\n"}
          Benjamin Andre Valdivia Navarrete {"\n"}
          Gianella Nahomi Alvarez Tinajeros{"\n"}
          Gabriel Alejandro Catacora Llerena{"\n"}
        </Text>
        <Text> Arequipa - Perú </Text>
        <Text> 2020</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          margin: 10
        }}
      >
        <Text style={{ color: "#c2c2c2" }}>Versión de la App: 1.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "35%",
    height: 150
  }
});
