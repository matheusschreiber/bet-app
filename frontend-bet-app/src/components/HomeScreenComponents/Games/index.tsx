import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import rightArrow from "../../../../assets/icons/right_arrow.png";
import { GamesFinished, IncomingGames } from "../../../services/provisoryData";
import { MyText } from "../../MyText";
import { GameCard } from "../GameCard";
import { styles } from "./style";

export function Games() {
  const navigation = useNavigation();
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
        data={IncomingGames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameCard {...item} />}
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
        data={GamesFinished}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameCard {...item} />}
        ListFooterComponent={<View style={{ width: 50 }} />}
      />
    </View>
  );
}
