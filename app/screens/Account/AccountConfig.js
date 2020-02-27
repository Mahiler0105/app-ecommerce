import React from "react";
import { View, Text, Button } from "react-native";
import * as firebase from "firebase";

export default function AccountConfig(props) {
  const { navigation } = props;
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
