import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import calendarIcon from "../../../../assets/icons/calendar.png";
import ticketIcon from "../../../../assets/icons/ticket.png";
import clockIcon from "../../../../assets/icons/clock.png";
import { useNavigation } from "@react-navigation/native";
import { GameProps } from "../../../@types/navigation";
import { MyText } from "../../MyText";

export function leadingZeros(num: number) {
  if (num < 10) return "0" + num;
  else return num;
}

export function GameCard({
  id,
  team1,
  team1Icon,
  team1Score,
  team2,
  team2Icon,
  team2Score,
  date,
  desc,
  bets,
}: GameProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigation.navigate("gamebet", {
          id,
          team1,
          team1Icon,
          team1Score,
          team2,
          team2Icon,
          team2Score,
          date,
          bets,
          desc,
        });
      }}
    >
      {desc != null && <MyText style={styles.descText}>{desc}</MyText>}

      <View style={styles.iconsContainer}>
        <View style={styles.teamContainer}>
          <MyText style={styles.iconText}>{team1Icon}</MyText>
          <MyText>{team1}</MyText>
          {team1Score != null && team2Score != null && (
            <MyText style={styles.teamScoreText}>{team1Score}</MyText>
          )}
        </View>

        <MyText style={styles.vsText}>VS</MyText>

        <View style={styles.teamContainer}>
          <MyText style={styles.iconText}>{team2Icon}</MyText>
          <MyText>{team2}</MyText>
          {team1Score != null && team2Score != null && (
            <MyText style={styles.teamScoreText}>{team2Score}</MyText>
          )}
        </View>
      </View>

      <View
        style={
          !team1Score && !team2Score
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
          {leadingZeros(new Date(date).getDay())}{" "}
          {new Date(date)
            .toLocaleString("default", { month: "long" })
            .charAt(0)
            .toUpperCase() +
            new Date(date)
              .toLocaleString("default", { month: "long" })
              .slice(1)}
        </MyText>
        {!team1Score && !team2Score && <Image source={clockIcon} />}
        {!team1Score && !team2Score && (
          <MyText style={styles.infoText}>
            {leadingZeros(new Date(date).getHours())}:
            {leadingZeros(new Date(date).getMinutes())}
          </MyText>
        )}
      </View>

      {!team1Score && !team2Score && (
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
