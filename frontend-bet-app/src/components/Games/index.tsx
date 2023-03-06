import { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";

import rightArrow from "../../../assets/icons/right_arrow.png";
import { GameCard } from "../GameCard";
import { MyText } from "../MyText";
import { styles } from "./style";

export function Games() {
  const [games, setGames] = useState<JSX.Element[]>([]);
  const [results, setResults] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let teste1 = [
      <GameCard
        amount="250 apostas para este jogo"
        date={new Date("2023-06-06T12:00:00.000Z")}
        desc="SEMI-FINAL"
        team1="Brasil"
        team1Icon="🇧🇷"
        team2="Argentina"
        team2Icon="🇦🇷"
      />,
    ];

    for (let i = 0; i < 5; i++) {
      teste1[0].key = i;
      teste1.push(teste1[0]);
    }

    let teste2 = [
      <GameCard
        amount="250 apostas para este jogo"
        date={new Date("2023-06-06T12:00:00.000Z")}
        desc="SEMI-FINAL"
        team1="Brasil"
        team1Icon="🇧🇷"
        team1Score={3}
        team2="Argentina"
        team2Icon="🇦🇷"
        team2Score={1}
      />,
    ];

    for (let i = 0; i < 5; i++) {
      teste2[0].key = i;
      teste2.push(teste2[0]);
    }

    setGames(teste1);
    setResults(teste2);
  }, []);

  return (
    <View style={styles.gamesContainer}>
      <View style={styles.upperContainer}>
        <MyText style={styles.gamesTitle}>Próximos jogos</MyText>
        <TouchableOpacity style={styles.detailsContainer}>
          <MyText>ver todos</MyText>
          <View style={styles.backArrowContainer}>
            <Image source={rightArrow} style={styles.backArrow} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        {games.map((game, idx) => {
          game.key = idx;
          return game;
        })}
      </ScrollView>

      <View style={styles.upperContainer}>
        <MyText style={styles.gamesTitle}>Resultados dos jogos</MyText>
        <TouchableOpacity style={styles.detailsContainer}>
          <MyText>ver todos</MyText>
          <View style={styles.backArrowContainer}>
            <Image source={rightArrow} style={styles.backArrow} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        {results.map((game, idx) => {
          game.key = idx;
          return game;
        })}
      </ScrollView>
    </View>
  );
}
