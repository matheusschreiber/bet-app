import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import calendarIcon from "../../../../assets/icons/calendar.png";
import ticketIcon from "../../../../assets/icons/ticket.png";
import clockIcon from "../../../../assets/icons/clock.png";
import { useNavigation } from "@react-navigation/native";
import { Bet, GameProps } from "../../../@types/navigation";
import { MyText } from "../../MyText";

interface GameCardProps {
  game: GameProps;
  bets: { bet: Bet }[];
}

export function leadingZeros(num: number) {
  if (num < 10) return "0" + num;
  else return num;
}

export function GameCard({ game, bets }: GameCardProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigation.navigate("gamebet", {
          game,
          bets,
        });
      }}
    >
      {game.desc != null && (
        <MyText style={styles.descText}>{game.desc}</MyText>
      )}

      <View style={styles.iconsContainer}>
        <View style={styles.teamContainer}>
          <MyText style={styles.iconText}>{game.team_1_icon}</MyText>
          <MyText>{game.team_1_name}</MyText>
          {game.team_1_score != null && game.team_2_score != null && (
            <MyText style={styles.teamScoreText}>{game.team_1_score}</MyText>
          )}
        </View>

        <MyText style={styles.vsText}>VS</MyText>

        <View style={styles.teamContainer}>
          <MyText style={styles.iconText}>{game.team_2_icon}</MyText>
          <MyText>{game.team_2_name}</MyText>
          {game.team_1_score != null && game.team_2_score != null && (
            <MyText style={styles.teamScoreText}>{game.team_2_score}</MyText>
          )}
        </View>
      </View>

      <View
        style={
          !game.team_1_score && !game.team_2_score
            ? {
                ...styles.infoContainer,
                borderBottomWidth: 1,
              }
            : {
                ...styles.infoContainer,
                borderBottomWidth: 0,
              }
        }
      >
        <Image source={calendarIcon} />
        <MyText style={styles.infoText}>
          {leadingZeros(new Date(game.date).getDay())}{" "}
          {new Date(game.date)
            .toLocaleString("default", { month: "long" })
            .charAt(0)
            .toUpperCase() +
            new Date(game.date)
              .toLocaleString("default", { month: "long" })
              .slice(1)}
        </MyText>
        {!game.team_1_score && !game.team_2_score && (
          <Image source={clockIcon} />
        )}
        {!game.team_1_score && !game.team_2_score && (
          <MyText style={styles.infoText}>
            {leadingZeros(new Date(game.date).getHours())}:
            {leadingZeros(new Date(game.date).getMinutes())}
          </MyText>
        )}
      </View>

      {!game.team_1_score && !game.team_2_score && (
        <View style={styles.amountContainer}>
          <Image source={ticketIcon} />
          <MyText style={styles.amountText}>
            {bets?.length} apostas para esse jogo
          </MyText>
        </View>
      )}
    </TouchableOpacity>
  );
}
