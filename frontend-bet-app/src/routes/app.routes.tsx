import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Games } from "../screens/Games";
import { Account } from "../screens/Account";
import { Home } from "../screens/Home";
import { Rankings } from "../screens/Rankings";
import { GameBet } from "../screens/GameBet";
import { Group } from "../screens/Group";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Screen name="home" component={Home} />
      <Screen name="rankings" component={Rankings} />
      <Screen name="games" component={Games} />
      <Screen name="account" component={Account} />
      <Screen name="gamebet" component={GameBet} />
      <Screen name="group" component={Group} />
    </Navigator>
  );
}
