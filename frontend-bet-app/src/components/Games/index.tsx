import { View, Text, Image } from "react-native";

import { styles } from "./style";
import rightArrow from "../../../assets/icons/right_arrow.png";
import { GameCard } from "../GameCard";

export function Games() {
  return (
    <View style={styles.gamesContainer}>
      <View>
        <Text>Próximos jogos</Text>
        <View>
          <Text>ver todos</Text>
          <Image source={rightArrow} />
        </View>
      </View>

      <GameCard />
    </View>
  );
}
