import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import rightArrow from "../../../../assets/icons/right_arrow.png";
import { useContextValue } from "../../../services/contextElement";
import { MyText } from "../../MyText";
import { GameCard } from "../GameCard";
import { styles } from "./style";

export function Games() {
  const navigation = useNavigation();

  const { incomingGames, gamesFinished, bets } = useContextValue();
  return (
    <View style={styles.gamesContainer}>
      <View style={styles.upperContainer}>
        <MyText style={styles.gamesTitle}>Próximos jogos</MyText>
        <TouchableOpacity
          style={styles.detailsContainer}
          onPress={() => navigation.navigate("games")}
        >
          <MyText>ver todos</MyText>
          <View style={styles.backArrowContainer}>
            <Image source={rightArrow} style={styles.backArrow} />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={incomingGames}
        keyExtractor={(item) => item.match.id}
        renderItem={({ item }) => (
          <GameCard
            game={item.match}
            bets={bets.filter(({ bet }) => bet.id_match === item.match.id)}
          />
        )}
        ListFooterComponent={<View style={{ width: 50 }} />}
      />

      <View style={styles.upperContainer}>
        <MyText style={styles.gamesTitle}>Resultados dos jogos</MyText>
        <TouchableOpacity
          style={styles.detailsContainer}
          onPress={() => navigation.navigate("games")}
        >
          <MyText>ver todos</MyText>
          <View style={styles.backArrowContainer}>
            <Image source={rightArrow} style={styles.backArrow} />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={gamesFinished}
        keyExtractor={(item) => item.match.id}
        renderItem={({ item }) => (
          <GameCard
            game={item.match}
            bets={bets.filter(({ bet }) => bet.id_match === item.match.id)}
          />
        )}
        ListFooterComponent={<View style={{ width: 50 }} />}
      />
    </View>
  );
}
