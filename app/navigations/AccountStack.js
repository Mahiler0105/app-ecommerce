import React from "react";
import { Image } from "react-native-elements";

import { createStackNavigator } from "react-navigation-stack";

import MyAccountScreen from "../screens/Account/MyAccount";
import LoginScreen from "../screens/Account/Login";
import RegisterScreen from "../screens/Account/Register";
import UserLoggedScreen from "../screens/Account/UserLogged";

const width = 155;
const height = 35;

const AccountScreenStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      //title: "My account",
      // headerTitleAlign: "center",
      //headerTransparent: false,
      headerShown: false
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      // headerTitleAlign: "center",
      headerShown: false
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  },
  UserLogged: {
    screen: UserLoggedScreen,
    navigationOptions: () => ({
      title: "My account",
      headerShown: true
    })
  }
});

export default AccountScreenStack;
