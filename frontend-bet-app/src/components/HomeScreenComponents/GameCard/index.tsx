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
  team1,
  team1Icon,
  team1Score,
  team2,
  team2Icon,
  team2Score,
  date,
  amount,
  desc,
}: GameProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigation.navigate("gamebet", {
          team1,
          team1Icon,
          team1Score,
          team2,
          team2Icon,
          team2Score,
          date,
          amount,
          desc,
        });
      }}
    >
      {desc && <MyText style={styles.descText}>{desc}</MyText>}

      <View style={styles.iconsContainer}>
        <View style={styles.teamContainer}>
          <MyText style={styles.iconText}>{team1Icon}</MyText>
          <MyText>{team1}</MyText>
          {team1Score && team2Score && (
            <MyText style={styles.teamScoreText}>{team1Score}</MyText>
          )}
        </View>

        <MyText style={styles.vsText}>VS</MyText>

        <View style={styles.teamContainer}>
          <MyText style={styles.iconText}>{team2Icon}</MyText>
          <MyText>{team2}</MyText>
          {team1Score && team2Score && (
            <MyText style={styles.teamScoreText}>{team2Score}</MyText>
          )}
        </View>
      </View>

      <View style={styles.infoContainer}>
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
          <MyText style={styles.amountText}>{amount}</MyText>
        </View>
      )}
    </TouchableOpacity>
  );
}
