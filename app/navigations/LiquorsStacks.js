import { createStackNavigator } from "react-navigation-stack";
import LiquorsScreen from "../screens/Liquors";

const LiquorsScreenStacks = createStackNavigator({
  Liquors: {
    screen: LiquorsScreen,
    navigationOptions: () => ({
      title: "Liquors"
    })
  }
});

export default LiquorsScreenStacks;
