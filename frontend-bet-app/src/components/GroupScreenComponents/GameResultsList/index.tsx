import { FlatList, ScrollView, View } from "react-native";
import { GameCardLarge } from "../../GameCardLarge";
import { MyText } from "../../MyText";
import { styles } from "./style";

import teste2 from "../../../../assets/teste2.jpg";
import teste3 from "../../../../assets/teste3.jpg";
import teste4 from "../../../../assets/teste4.jpg";
import teste5 from "../../../../assets/teste5.jpg";
import teste6 from "../../../../assets/teste6.jpg";

const games = [
  {
    id: 1,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "SEMI-FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    // team1Score: 2,
    team2: "Argentina",
    team2Icon: "🇦🇷",
    // team2Score: 1,
  },
  {
    id: 2,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team1Score: 3,
    team2: "Argentina",
    team2Icon: "🇦🇷",
    team2Score: 2,
  },
  {
    id: 3,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team1Score: 3,
    team2: "Argentina",
    team2Icon: "🇦🇷",
    team2Score: 2,
  },
  {
    id: 4,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team1Score: 3,
    team2: "Argentina",
    team2Icon: "🇦🇷",
    team2Score: 2,
  },
  {
    id: 5,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team1Score: 3,
    team2: "Argentina",
    team2Icon: "🇦🇷",
    team2Score: 2,
  },
  {
    id: 6,
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team1Score: 3,
    team2: "Argentina",
    team2Icon: "🇦🇷",
    team2Score: 2,
  },
];

const users = [
  { id: 1, name: "João", picture: teste2, wins: 15, points: 25 },
  { id: 2, name: "Karla", picture: teste3, wins: 15, points: 15 },
  { id: 3, name: "Jonas", picture: teste4, wins: 15, points: 10 },
  { id: 4, name: "Jorge", picture: teste5, wins: 15, points: 7 },
  { id: 5, name: "Elisa", picture: teste6, wins: 15, points: 7 },
];

export function GameResultsList() {
  return (
    <FlatList
      data={games}
      contentContainerStyle={{
        gap: 20,
        width: "90%",
        marginLeft: "5%",
      }}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View style={{ height: 400 }} />}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <GameCardLarge gameProps={item} betsResults={users} />
      )}
    />
  );
}
