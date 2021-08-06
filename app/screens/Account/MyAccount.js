import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import Loading from "../../components/Loading";
import UserLogged from "./UserLogged";
import Login from "./Login";

import * as firebase from "firebase";

export default MyAccount = (props) => {
  const [login, setLogin] = useState(null);
  const { navigation } = props;
  // const { user } = navigation.state.params;
  console.log(navigation);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="cargando" />;
  }

  return login ? <UserLogged navigation={navigation} /> : <Login />;
};
