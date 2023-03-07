import { Image, Text, TouchableOpacity, View } from "react-native";
import { GameProps } from "../../@types/navigation";

import { styles } from "./style";

import calendarIcon from "../../../assets/icons/calendar.png";
import ticketIcon from "../../../assets/icons/ticket.png";
import clockIcon from "../../../assets/icons/clock.png";
import closeIcon from "../../../assets/icons/close.png";
import { leadingZeros } from "../GameCard";

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
        <Text style={styles.newBetTitle}>Nova aposta</Text>

        <View style={styles.teamsContainer}>
          <View style={styles.teamContainer}>
            <Text style={styles.iconContainer}>{team1Icon}</Text>
            <Text style={styles.teamName}>{team1}</Text>
          </View>

          <Text style={styles.vsText}>VS</Text>

          <View style={styles.teamContainer}>
            <Text style={styles.iconContainer}>{team2Icon}</Text>
            <Text style={styles.teamName}>{team2}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.subtitleContainer}>
            <Image source={calendarIcon} />
            <Text style={styles.subtitle}>
              {leadingZeros(new Date(date).getDay())}{" "}
              {new Date(date)
                .toLocaleString("default", { month: "long" })
                .charAt(0)
                .toUpperCase() +
                new Date(date)
                  .toLocaleString("default", { month: "long" })
                  .slice(1)}
            </Text>
          </View>

          <View style={styles.subtitleContainer}>
            <Image source={clockIcon} />
            <Text style={styles.subtitle}>
              {leadingZeros(new Date(date).getHours())}:
              {leadingZeros(new Date(date).getMinutes())}
            </Text>
          </View>

          <View style={styles.subtitleContainer}>
            <Image source={ticketIcon} />
            <Text style={styles.subtitle}>{amount}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.titleBet}>Defina o placar final</Text>

      <View style={styles.betContainer}>
        <View style={styles.betTeamContainer}>
          <Text style={styles.betIconContainer}>{team1Icon}</Text>
          <Text style={styles.betTeamName}>{team1}</Text>
        </View>

        <View style={styles.slidersContainer}>
          <TouchableOpacity>
            <Text style={styles.sliderButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.goalsCounter}>0</Text>
          <TouchableOpacity>
            <Text style={styles.sliderButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.betContainer}>
        <View style={styles.betTeamContainer}>
          <Text style={styles.betIconContainer}>{team2Icon}</Text>
          <Text style={styles.betTeamName}>{team2}</Text>
        </View>

        <View style={styles.slidersContainer}>
          <TouchableOpacity>
            <Text style={styles.sliderButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.goalsCounter}>0</Text>
          <TouchableOpacity>
            <Text style={styles.sliderButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.concludeBet}>Concluir Aposta</Text>
      </TouchableOpacity>
    </View>
  );
}
