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

const games = [
  {
    id: 1,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "SEMI-FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team2: "Argentina",
    team2Icon: "🇦🇷",
  },
  {
    id: 2,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "SEMI-FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team2: "Argentina",
    team2Icon: "🇦🇷",
  },
  {
    id: 3,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "SEMI-FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team2: "Argentina",
    team2Icon: "🇦🇷",
  },
  {
    id: 4,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "SEMI-FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team2: "Argentina",
    team2Icon: "🇦🇷",
  },
];

export function NewBet() {
  const [gameSelected, setGameSelected] = useState<number>(1);
  const { isNewBetWindowCollapsed, setIsNewBetWindowCollapsed } =
    useContextValue();
  const navigation = useNavigation();

  function handleNewBet() {
    const game = games.find((game) => game.id == gameSelected);

    if (!game) return;

    navigation.navigate("gamebet", {
      team1: game.team1,
      team1Icon: game.team1Icon,
      team2: game.team2,
      team2Icon: game.team2Icon,
      date: game.date,
      amount: game.amount,
      desc: game.desc,
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
          data={games}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<View style={{ height: 200 }} />}
          contentContainerStyle={{
            alignItems: "center",
            width: "100%",
            gap: 40,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setGameSelected(item.id)}
              activeOpacity={0.9}
            >
              <GameCardLarge
                gameProps={item}
                parentStyle={
                  gameSelected === item.id ? styles.gameCardSelected : undefined
                }
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
