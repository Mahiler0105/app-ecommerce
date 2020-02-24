import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { withNavigation } from "react-navigation";
import { Divider } from "react-native-elements";

const Login = (props) => {
  const { navigation } = props;

  return (
    <ScrollView style={styles.contenedor}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <Image
          source={require("../../../assets/login.png")}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.viewContainer}>
          <Text>Form Login</Text>
          <CreateAccount navigation={navigation} />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.viewContainer}>
          <Text>lOGIN facebook</Text>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

const CreateAccount = (props) => {
  const { navigation } = props;
  console.log(navigation);

  return (
    <View style={styles.containerCreate}>
      <Text> ¿Aún no tienes cuenta? </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.btnRegister}>Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Login);

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logo: {
    width: "100%",
    height: 250,
    marginTop: 30
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  divider: {
    backgroundColor: "#FF5733",
    margin: 50,
    height: 1
  },
  btnRegister: {
    color: "#FF5733",
    fontWeight: "bold"
  },
  containerCreate: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  }
});
