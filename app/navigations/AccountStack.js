import React from "react";
import { Image } from "react-native-elements";

import { createStackNavigator } from "react-navigation-stack";

import MyAccountScreen from "../screens/Account/MyAccount";
import LoginScreen from "../screens/Account/Login";
import RegisterScreen from "../screens/Account/Register";
import UserLoggedScreen from "../screens/Account/UserLogged";
import AccountConfigScreen from "../screens/Account/AccountConfig";
import AppInfoScreen from "../screens/Account/AppInfo";

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
      headerShown: true,
      headerTransparent: false
    })
  },
  AccountConfig: {
    screen: AccountConfigScreen,
    navigationOptions: () => ({
      title: "Configuración",
      headerShown: true
    })
  },
  AppInfo: {
    screen: AppInfoScreen,
    navigationOptions: () => ({
      title: "Información de la App",
      headerShown: true
    })
  }
});

export default AccountScreenStack;
