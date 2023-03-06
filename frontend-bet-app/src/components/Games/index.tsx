import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import rightArrow from "../../../assets/icons/right_arrow.png";
import { GameCard } from "../GameCard";
import { styles } from "./style";

export function Games() {
  const [games, setGames] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let teste = [
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

    for (let i = 0; i < 5; i++) teste.push(teste[0]);

    setGames(teste);
  }, []);

  return (
    <View style={styles.gamesContainer}>
      <View style={styles.upperContainer}>
        <Text style={styles.gamesTitle}>Próximos jogos</Text>
        <TouchableOpacity style={styles.detailsContainer}>
          <Text>ver todos</Text>
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
    </View>
  );
}
