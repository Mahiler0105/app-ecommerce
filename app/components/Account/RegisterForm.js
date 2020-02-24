import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import * as firebase from "firebase";

export default function RegisterForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRePassword, setHideRePassword] = useState(true);

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const inputEmail = React.createRef();

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const inputPassword = React.createRef();

  const [rePassword, setRePassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");
  const inputRePassword = React.createRef();

  const handleRegister = async () => {
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // .signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === "auth/network-request-failed") {
        Alert.alert(
          "Conexión no encontrada, vuelva a intentarlo o intentelo más tarde."
        );
      } else if (error.code === "auth/invalid-email") {
        setErrorEmail("Correo electronico invalido");
        inputEmail.current.shake();
      } else if (error.code === "auth/email-already-in-use") {
        setErrorEmail("El correo ya esta en uso");
        await inputEmail.current.shake();
      } else if (error.code === "auth/weak-password") {
        setErrorEmail("");
        setErrorPassword("Debe tener más de 6 caracteres");
        await inputPassword.current.shake();
        if (password !== rePassword) {
          setErrorRePassword("No coincide con la contraseña");
          await inputRePassword.current.shake();
        } else {
          setErrorRePassword("");
        }
      }
      console.log(error.code, "---", error);
    }
  };

  //   console.log(email);
  console.log(password);
  console.log(rePassword);

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
      <Input
        ref={inputRePassword}
        placeholder="Repetir Contraseña"
        password={true}
        secureTextEntry={hideRePassword}
        containerStyle={styles.inputForm}
        inputContainerStyle={styles.inputContainer}
        selectionColor="#190976"
        placeholderTextColor="#190976"
        onChange={(e) => setRePassword(e.nativeEvent.text)}
        leftIconContainerStyle={styles.leftIconContainer}
        errorMessage={errorRePassword}
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
            name={hideRePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHideRePassword(!hideRePassword)}
          />
        }
      />
      <Button
        title="Crear Cuenta"
        containerStyle={styles.btnContainerRegister}
        disabled={email && password && rePassword ? false : true}
        buttonStyle={styles.btnRegister}
        onPress={handleRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
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
  btnContainerRegister: {
    marginTop: 15,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#190976",
    borderRadius: 20
  },
  error: {
    fontSize: 15,
    fontWeight: "bold",
    //backgroundColor: "#c2c2c2",
    textAlign: "center",
    marginBottom: 0
  }
});
