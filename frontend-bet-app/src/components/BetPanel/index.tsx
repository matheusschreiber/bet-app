import { Image, TouchableOpacity, View } from "react-native";
import { GameProps } from "../../@types/navigation";

import { styles } from "./style";

import calendarIcon from "../../../assets/icons/calendar.png";
import ticketIcon from "../../../assets/icons/ticket.png";
import clockIcon from "../../../assets/icons/clock.png";
import closeIcon from "../../../assets/icons/close.png";
import { leadingZeros } from "../GameCard";
import { MyText } from "../MyText";

export function BetPanel({
  team1,
  team2,
  team1Icon,
  team2Icon,
  date,
  amount,
}: GameProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity style={styles.buttonClose}>
            <Image source={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <MyText style={styles.newBetTitle}>Nova aposta</MyText>

        <View style={styles.teamsContainer}>
          <View style={styles.teamContainer}>
            <MyText style={styles.iconContainer}>{team1Icon}</MyText>
            <MyText style={styles.teamName}>{team1}</MyText>
          </View>

          <MyText style={styles.vsText}>VS</MyText>

          <View style={styles.teamContainer}>
            <MyText style={styles.iconContainer}>{team2Icon}</MyText>
            <MyText style={styles.teamName}>{team2}</MyText>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.subtitleContainer}>
            <Image source={calendarIcon} />
            <MyText style={styles.subtitle}>
              {leadingZeros(new Date(date).getDay())}{" "}
              {new Date(date)
                .toLocaleString("default", { month: "long" })
                .charAt(0)
                .toUpperCase() +
                new Date(date)
                  .toLocaleString("default", { month: "long" })
                  .slice(1)}
            </MyText>
          </View>

          <View style={styles.subtitleContainer}>
            <Image source={clockIcon} />
            <MyText style={styles.subtitle}>
              {leadingZeros(new Date(date).getHours())}:
              {leadingZeros(new Date(date).getMinutes())}
            </MyText>
          </View>

          <View style={styles.subtitleContainer}>
            <Image source={ticketIcon} />
            <MyText style={styles.subtitle}>{amount}</MyText>
          </View>
        </View>
      </View>

      <MyText style={styles.titleBet}>Defina o placar final</MyText>

      <View style={styles.betContainer}>
        <View style={styles.betTeamContainer}>
          <MyText style={styles.betIconContainer}>{team1Icon}</MyText>
          <MyText style={styles.betTeamName}>{team1}</MyText>
        </View>

        <View style={styles.slidersContainer}>
          <TouchableOpacity>
            <MyText style={styles.sliderButton}>-</MyText>
          </TouchableOpacity>
          <MyText style={styles.goalsCounter}>0</MyText>
          <TouchableOpacity>
            <MyText style={styles.sliderButton}>+</MyText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.betContainer}>
        <View style={styles.betTeamContainer}>
          <MyText style={styles.betIconContainer}>{team2Icon}</MyText>
          <MyText style={styles.betTeamName}>{team2}</MyText>
        </View>

        <View style={styles.slidersContainer}>
          <TouchableOpacity>
            <MyText style={styles.sliderButton}>-</MyText>
          </TouchableOpacity>
          <MyText style={styles.goalsCounter}>0</MyText>
          <TouchableOpacity>
            <MyText style={styles.sliderButton}>+</MyText>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <MyText style={styles.concludeBet}>Concluir Aposta</MyText>
      </TouchableOpacity>
    </View>
  );
}
