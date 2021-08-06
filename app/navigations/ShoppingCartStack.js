import React from "react";
import { Image } from "react-native-elements";

import { createStackNavigator } from "react-navigation-stack";
import ShoppingCartScreen from "../screens/ShoppingCart";

const ShoppingCartScreenStack = createStackNavigator({
  ShoppingCart: {
    screen: ShoppingCartScreen,
    navigationOptions: () => ({
      title: "Shopping Cart",
      headerTitleAlign: "center",
      headerTransparent: false,
      headerTitle: () => (
        <Image
          source={require("../../assets/header.png")}
          style={{ width: 155, height: 35 }}
        />
      )
    })
  }
});

export default ShoppingCartScreenStack;
