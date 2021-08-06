import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button
} from "react-native";

export default function Card(props) {
  return (
    <TouchableOpacity onPress={() => console.log("Entramos")}>
      <View style={styles.viewContainer}>
        <View style={styles.viewContainerImage}>
          <Image
            resizeMode="cover"
            // source={{ uri: imageRestaurant }}
            style={styles.imageLiquor}
            PlaceholderContent={<ActivityIndicator color="#fff" />}
          />
        </View>
        <View style={{ padding: 1 }}>
          <Text style={styles.restaurantName}>Combo Nocturno</Text>
          <Text style={styles.restaurantAddress}>
            Fasldasldmlasmdlmasldmaslmdlasmldmaslmlml
          </Text>
          <View>
            <Text style={styles.restaurantDescripcion}>48.55</Text>
            <Button title="ADD cart"> </Button>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    padding: 5,
    flexDirection: "row",
    margin: 10,
    height: 120,
    backgroundColor: "#ff3",
    borderRadius: 15
  },
  viewContainerImage: {
    marginRight: 15
  },
  imageLiquor: {
    width: 80,
    height: 80
  },
  restaurantName: {
    fontWeight: "bold"
  },
  restaurantAddress: {
    paddingTop: 2,
    color: "grey"
  },
  restaurantDescripcion: {
    paddingTop: 2,
    color: "grey",
    width: 300
  }
});
