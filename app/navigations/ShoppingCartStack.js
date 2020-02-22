import { createStackNavigator } from "react-navigation-stack";
import ShoppingCartScreen from "../screens/MyAccount";

const ShoppingCartScreenStack = createStackNavigator({
  ShoppingCart: {
    screen: ShoppingCartScreen,
    navigationOptions: () => ({
      title: "Shopping Cart"
    })
  }
});

export default ShoppingCartScreenStack;
