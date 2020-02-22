import { createStackNavigator } from "react-navigation-stack";
import DealsScreen from "../screens/Deals";

const DealsScreenStack = createStackNavigator({
  Deals: {
    screen: DealsScreen,
    navigationOptions: () => ({
      title: "Deals"
    })
  }
});

export default DealsScreenStack;
