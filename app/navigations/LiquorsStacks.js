import React from "react";
import { Image } from "react-native-elements";

import { createStackNavigator } from "react-navigation-stack";
import LiquorsScreen from "../screens/Liquors";

const LiquorsScreenStacks = createStackNavigator({
  Liquors: {
    screen: LiquorsScreen,
    navigationOptions: () => ({
      title: "Liquors",
      headerTitleAlign: "center",
      headerTransparent: false,
      headerTitle: (
        <Image
          source={require("../../assets/header.png")}
          style={{ width: 155, height: 35 }}
        />
      )
    })
  }
});

export default LiquorsScreenStacks;
