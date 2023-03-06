import { Image, Text, View } from "react-native";

import { styles } from "./style";

import calendarIcon from "../../../assets/icons/calendar.png";
import clockIcon from "../../../assets/icons/clock.png";
import ticketIcon from "../../../assets/icons/ticket.png";

interface GameProps {
  team1: string;
  team1Icon: string;
  team2: string;
  team2Icon: string;
  date: Date;
  amount: string;
  desc: string;
}

export function GameCard({
  team1,
  team1Icon,
  team2,
  team2Icon,
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
      <View style={styles.iconsContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.iconText}>{team1Icon}</Text>
          <Text>{team1}</Text>
        </View>

        <Text style={styles.vsText}>VS</Text>

        <View style={styles.teamContainer}>
          <Text style={styles.iconText}>{team2Icon}</Text>
          <Text>{team2}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Image source={calendarIcon} />
        <Text style={styles.infoText}>
          {leadingZeros(date.getDay())}{" "}
          {date
            .toLocaleString("default", { month: "long" })
            .charAt(0)
            .toUpperCase() +
            date.toLocaleString("default", { month: "long" }).slice(1)}
        </Text>
        <Image source={clockIcon} />
        <Text style={styles.infoText}>
          {leadingZeros(date.getHours())}:{leadingZeros(date.getMinutes())}
        </Text>
      </View>

      <View style={styles.amountContainer}>
        <Image source={ticketIcon} />
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  );
}
