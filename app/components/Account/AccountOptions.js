import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";

export default function AccountOptions(props) {
  const { userInfo, navigation } = props;
  const { displayName, email, phoneNumber } = userInfo;
  console.log("JJAJAJAJA", navigation);

  const menuOptions = [
    {
      title: "Tus Favoritos",
      iconType: "material-community",
      iconNameLeft: "heart-outline",
      iconColorLeft: "#f0615a",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => console.log("JEJEJJE")
    },
    {
      title: "Pago",
      iconType: "material-community",
      iconNameLeft: "credit-card",
      iconColorLeft: "#f0615a",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => console.log("JEJEJJE")
    },
    {
      title: "Ayuda",
      iconType: "material-community",
      iconNameLeft: "lifebuoy",
      iconColorLeft: "#f0615a",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => console.log("JEJEJJE")
    },
    {
      title: "Configuración",
      iconType: "material-community",
      iconNameLeft: "cogs",
      iconColorLeft: "#f0615a", // "#190976",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => {
        navigation.navigate("AccountConfig");
      }
    },
    {
      title: "Acerca de la App",
      iconType: "material-community",
      iconNameLeft: "information-outline",
      iconColorLeft: "#f0615a", // "#190976",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => {
        navigation.navigate("AppInfo");
      }
    }
  ];

  return (
    <View>
      {menuOptions.map((menu, index) => (
        <ListItem
          key={index}
          title={menu.title}
          leftIcon={{
            type: menu.iconType,
            name: menu.iconNameLeft,
            color: menu.iconColorLeft
          }}
          rightIcon={{
            type: menu.iconType,
            name: menu.iconNameRight,
            color: menu.iconColorRight
          }}
          onPress={menu.onPress}
          containerStyle={styles.menuItem}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3"
  }
});
