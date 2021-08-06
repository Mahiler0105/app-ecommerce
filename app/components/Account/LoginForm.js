import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

import Loading from "../../components/Loading";

import * as firebase from "firebase";

export default function LoginForm(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const inputEmail = React.createRef();

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const inputPassword = React.createRef();

  const [hidePassword, setHidePassword] = useState(false);
  const [visibleLoading, setVisibleLoading] = useState(false);

  useEffect(() => {
    if (errorEmail !== "") {
      inputEmail.current.shake();
    }
    if (errorPassword !== "") {
      inputPassword.current.shake();
    }
  }, [errorEmail, errorPassword]);

  const setStateError = () => {
    setErrorEmail("");
    setErrorPassword("");
  };
  const handleLogin = async () => {
    setVisibleLoading(true);
    setStateError();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("MyAccount"))
      .catch((error) => {
        switch (error.code) {
          case "auth/network-request-failed":
            Alert.alert(
              "Conexión no encontrada, vuelva a intentarlo o intentelo más tarde."
            );
            break;
          case "auth/invalid-email":
            setErrorEmail("Correo electronico invalido");
            break;
          case "auth/user-not-found":
            setErrorEmail("Usuario o contraseña incorrecto");
            setErrorPassword("Usuario o contraseña incorrecto");
            break;
          case "auth/wrong-password":
            setErrorEmail("Usuario o contraseña incorrecto");
            setErrorPassword("Usuario o contraseña incorrecto");
            break;
          default:
            break;
        }
      });
    setVisibleLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      <Input
        ref={inputEmail}
        placeholder="Correo electronico"
        placeholderTextColor="#190976"
        containerStyle={styles.inputForm}
        inputContainerStyle={styles.inputContainer}
        selectionColor="#190976"
        onChange={(e) => setEmail(e.nativeEvent.text)}
        leftplaceholderTextColor="#190976"
        leftIconContainerStyle={styles.leftIconContainer}
        errorMessage={errorEmail}
        errorStyle={styles.error}
        leftIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        ref={inputPassword}
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        inputContainerStyle={styles.inputContainer}
        selectionColor="#190976"
        placeholderTextColor="#190976"
        onChange={(e) => setPassword(e.nativeEvent.text)}
        leftIconContainerStyle={styles.leftIconContainer}
        errorMessage={errorPassword}
        errorStyle={styles.error}
        leftIcon={
          <Icon
            type="material-community"
            name="lock"
            iconStyle={styles.iconRight}
          />
        }
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />

      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={handleLogin}
        disabled={email && password ? false : true}
      />
      <Loading text="Iniciando Sesión" isVisible={visibleLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  inputForm: {
    width: "100%",
    marginTop: 15
  },
  inputContainer: {
    borderColor: "#190976",
    borderBottomWidth: 2,
    borderWidth: 2,
    borderRadius: 20,
    paddingRight: 10
  },
  iconRight: {
    color: "#190976"
  },
  leftIconContainer: {
    backgroundColor: "#f0615a",
    marginRight: 5,
    borderRightWidth: 2,
    borderRightColor: "#190976",
    marginLeft: 0,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    padding: 4
  },
  btnContainerLogin: {
    marginTop: 15,
    width: "95%"
  },
  btnLogin: {
    backgroundColor: "#190976",
    borderRadius: 20
  },

  error: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0
  }
});
