import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Add } from "../screens/Add";
import { Games } from "../screens/Games";
import { Home } from "../screens/Home";
import { Account } from "../screens/Account";
import { Rankings } from "../screens/Rankings";
import { GameBet } from "../screens/GameBet";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Screen name="home" component={Home} />
      <Screen name="rankings" component={Rankings} />
      <Screen name="games" component={Games} />
      <Screen name="account" component={Account} />
      <Screen name="add" component={Add} />
      <Screen name="gamebet" component={GameBet} />
    </Navigator>
  );
}
