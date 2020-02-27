import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Header, Avatar, Button } from "react-native-elements";
import * as firebase from "firebase";
import AccountOptions from "../../components/Account/AccountOptions";

export default function UserLogged(props) {
  const [userInfo, setUserInfo] = useState({});
  const { email } = userInfo;
  const { navigation } = props;

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user.providerData[0]);
    })();
  }, []);
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header
        placement="left"
        leftComponent={
          <Avatar
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            // containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
          />
        }
        centerComponent={{
          text: email,
          style: { color: "black", fontWeight: "bold", fontSize: 18 }
        }}
        containerStyle={{
          backgroundColor: "#fff",
          shadowOffset: { width: 0, height: 2 },
          shadowColor: "red",
          // shadowOpacity: 0.75, IOS
          elevation: 5 // ANDROID
        }}
      />
      <View style={styles.container}>
        <AccountOptions userInfo={userInfo} navigation={navigation} />
        <Button
          title="Cerrar Sesión"
          onPress={() => firebase.auth().signOut()}
          buttonStyle={styles.btnSignOut}
          containerStyle={styles.containerBtnSO}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  btnSignOut: {
    backgroundColor: "#190976"
  },
  containerBtnSO: {
    marginTop: 30
  }
});
