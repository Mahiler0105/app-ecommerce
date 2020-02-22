import React from "react";
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import LiquorsScreenStacks from "../navigations/LiquorsStacks";
import AccountScreenStack from "../navigations/AccountStack";
import DealsScreenStacks from "../navigations/DealsStack";
import ShoppingCartScreenStack from "../navigations/ShoppingCartStack";

const size = 23;

const NavigationStacks = createMaterialBottomTabNavigator(
  {
    Liquors: {
      screen: LiquorsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Liquors",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={size}
            color={tintColor}
          />
        )
      })
    },
    Deals: {
      screen: DealsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Deals",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="tag-text-outline"
            size={size}
            color={tintColor}
          />
        )
      })
    },
    ShoppingCart: {
      screen: ShoppingCartScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Cart",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="cart-outline"
            size={size}
            color={tintColor}
          />
        )
      })
    },
    Account: {
      screen: AccountScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="account-outline"
            size={size}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    //initialRouteName: "Liquors",
    order: ["Liquors", "Deals", "ShoppingCart", "Account"],
    activeColor: "#f2f2f2",
    barStyle: { backgroundColor: "#00a680" }
  }
);

export default createAppContainer(NavigationStacks);
