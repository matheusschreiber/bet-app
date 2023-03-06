import { Image, View } from "react-native";
import { styles } from "./style";

import calendarIcon from "../../../assets/icons/calendar.png";
import clockIcon from "../../../assets/icons/clock.png";
import ticketIcon from "../../../assets/icons/ticket.png";
import { MyText } from "../MyText";

interface GameProps {
  team1: string;
  team1Icon: string;
  team1Score?: number;
  team2: string;
  team2Icon: string;
  team2Score?: number;
  date: Date;
  amount: string;
  desc?: string;
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
  function leadingZeros(num: number) {
    if (num < 10) return "0" + num;
    else return num;
  }

  return (
    <View style={styles.mainContainer}>
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
          {leadingZeros(date.getDay())}{" "}
          {date
            .toLocaleString("default", { month: "long" })
            .charAt(0)
            .toUpperCase() +
            date.toLocaleString("default", { month: "long" }).slice(1)}
        </MyText>
        {!team1Score && !team2Score && <Image source={clockIcon} />}
        {!team1Score && !team2Score && (
          <MyText style={styles.infoText}>
            {leadingZeros(date.getHours())}:{leadingZeros(date.getMinutes())}
          </MyText>
        )}
      </View>

      {!team1Score && !team2Score && (
        <View style={styles.amountContainer}>
          <Image source={ticketIcon} />
          <MyText style={styles.amountText}>{amount}</MyText>
        </View>
      )}
    </View>
  );
}
