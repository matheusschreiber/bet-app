import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { MyText } from "../../MyText";

import closeIcon from "../../../../assets/icons/close.png";
import { GameCardLarge } from "../../GameCardLarge";
import { styles } from "./style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useContextValue } from "../../../services/contextElement";

export function NewBet() {
  const [gameSelected, setGameSelected] = useState<string>("1");
  const { setIsNewBetWindowCollapsed, incomingGames, bets } = useContextValue();
  const navigation = useNavigation();

  function handleNewBet() {
    const game = incomingGames.find((game) => game.match.id == gameSelected);

    if (!game) return;

    navigation.navigate("gamebet", {
      game: game.match,
      bets: bets.filter((bet) => bet.bet.id_match == game.match.id),
    });
  }

  return (
    <View style={styles.overlayContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <MyText style={styles.titleCard}>Escolha o jogo</MyText>
          <TouchableOpacity
            style={styles.closeIconContainer}
            onPress={() => setIsNewBetWindowCollapsed(true)}
          >
            <Image style={styles.closeIcon} source={closeIcon} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={incomingGames}
          keyExtractor={(item) => item.match.id.toString()}
          ListFooterComponent={<View style={{ height: 200 }} />}
          contentContainerStyle={{
            alignItems: "center",
            width: "100%",
            gap: 40,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setGameSelected(item.match.id)}
              activeOpacity={0.9}
            >
              <GameCardLarge
                gameProps={item.match}
                parentStyle={
                  gameSelected === item.match.id
                    ? styles.gameCardSelected
                    : undefined
                }
                betsResults={bets.filter(
                  ({ bet }) => bet.id_match == item.match.id
                )}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => handleNewBet()}
      >
        <MyText style={styles.buttonText}>Escolher jogo</MyText>
      </TouchableOpacity>
    </View>
  );
}
