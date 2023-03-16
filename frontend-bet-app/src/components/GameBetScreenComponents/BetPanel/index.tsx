import { Image, TouchableOpacity, View, ActivityIndicator } from "react-native";

import { styles } from "./style";

import calendarIcon from "../../../../assets/icons/calendar.png";
import ticketIcon from "../../../../assets/icons/ticket.png";
import clockIcon from "../../../../assets/icons/clock.png";
import closeIcon from "../../../../assets/icons/close.png";
import { useState } from "react";
import { GameProps } from "../../../@types/navigation";
import { useContextValue } from "../../../services/contextElement";
import { MyText } from "../../MyText";
import { leadingZeros } from "../../HomeScreenComponents/GameCard";
import api from "../../../services/api";

export function BetPanel({
  id,
  team_1_name,
  team_2_name,
  team_1_icon,
  team_2_icon,
  date,
}: GameProps) {
  const { setIsBetting, bets, user } = useContextValue();
  const [team1Score, setTeam1Score] = useState<number>(0);
  const [team2Score, setTeam2Score] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSubtract(value: number, setFunc: Function) {
    if (value > 0) setFunc(value - 1);
  }

  function handleAdd(value: number, setFunc: Function) {
    setFunc(value + 1);
  }

  async function handleSubmit() {
    setIsLoading(true);
    const data = {
      userId: user.id,
      matchId: id,
      status: "ongoing",
      score_1: team1Score,
      score_2: team2Score,
      date: new Date(),
      score_win: false,
      result_win: false,
      points: 0,
    };
    await api.post("/bet", data);
    setTimeout(() => {
      setIsLoading(false);
      setIsBetting(false);
    }, 3000);
  }

  return (
    <View style={{ ...styles.mainContainer }}>
      <View style={styles.upperContainer}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setIsBetting(false)}
          >
            <Image source={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <MyText style={styles.newBetTitle}>Nova aposta</MyText>

        <View style={styles.teamsContainer}>
          <View style={styles.teamContainer}>
            <MyText style={styles.iconContainer}>{team_1_icon}</MyText>
            <MyText style={styles.teamName}>{team_1_name}</MyText>
          </View>

          <MyText style={styles.vsText}>VS</MyText>

          <View style={styles.teamContainer}>
            <MyText style={styles.iconContainer}>{team_2_icon}</MyText>
            <MyText style={styles.teamName}>{team_2_name}</MyText>
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
            <MyText style={styles.subtitle}>
              {bets.filter(({ bet }) => bet.id_match == id).length} apostas para
              esse jogo
            </MyText>
          </View>
        </View>
      </View>

      <MyText style={styles.titleBet}>Defina o placar final</MyText>

      <View style={styles.betContainer}>
        <View style={styles.betTeamContainer}>
          <MyText style={styles.betIconContainer}>{team_1_icon}</MyText>
          <MyText style={styles.betTeamName}>{team_1_name}</MyText>
        </View>

        <View style={styles.slidersContainer}>
          <TouchableOpacity
            onPress={() => handleSubtract(team1Score, setTeam1Score)}
          >
            <MyText style={styles.sliderButton}>-</MyText>
          </TouchableOpacity>
          <MyText style={styles.goalsCounter}>{team1Score}</MyText>
          <TouchableOpacity
            onPress={() => handleAdd(team1Score, setTeam1Score)}
          >
            <MyText style={styles.sliderButton}>+</MyText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.betContainer}>
        <View style={styles.betTeamContainer}>
          <MyText style={styles.betIconContainer}>{team_2_icon}</MyText>
          <MyText style={styles.betTeamName}>{team_2_name}</MyText>
        </View>

        <View style={styles.slidersContainer}>
          <TouchableOpacity
            onPress={() => handleSubtract(team2Score, setTeam2Score)}
          >
            <MyText style={styles.sliderButton}>-</MyText>
          </TouchableOpacity>
          <MyText style={styles.goalsCounter}>{team2Score}</MyText>
          <TouchableOpacity
            onPress={() => handleAdd(team2Score, setTeam2Score)}
          >
            <MyText style={styles.sliderButton}>+</MyText>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => handleSubmit()}
        disabled={isLoading}
        style={isLoading ? { opacity: 0.4 } : {}}
      >
        <MyText style={styles.concludeBet}>Concluir Aposta</MyText>
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={isLoading}
          size="large"
        />
      </TouchableOpacity>
    </View>
  );
}
