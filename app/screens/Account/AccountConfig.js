import React from "react";
import { View, Text, Button } from "react-native";
import {ListItem} from 'react-native-elements'
import * as firebase from "firebase";

export default function AccountConfig(props) {
  const { navigation } = props;

  const menuOptions = [
    {
      title: "Nombres",
      iconType: "material-community",
      iconNameLeft: "heart-outline",
      iconColorLeft: "#f0615a",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => console.log("JEJEJJE")
    }
  ]
  console.log(props);
  return (
    <View>
      <Text>Estas en la configuracion</Text>
      {/* <Button
        title="Cerrar"
        onPress={() => {
          firebase.auth().signOut();
          navigation.navigate("MyAccount");
        }}
      /> */}
    </View>
  );
}
