import React from "react";
import { Image } from "react-native-elements";

import { createStackNavigator } from "react-navigation-stack";
import DealsScreen from "../screens/Deals";

const DealsScreenStack = createStackNavigator({
  Deals: {
    screen: DealsScreen,
    navigationOptions: () => ({
      title: "Deals",
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

export default DealsScreenStack;
