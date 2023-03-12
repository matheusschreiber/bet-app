import { Image, TouchableOpacity, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";
import background from "../../../assets/simple_background.png";
import trophyIcon from "../../../assets/icons/trophy_large.png";
import calendarIcon from "../../../assets/icons/calendar.png";
import { styles } from "./style";
import { leadingZeros } from "../../components/HomeScreenComponents/GameCard";
import { useState } from "react";
import { GameResultsList } from "../../components/GroupScreenComponents/GameResultsList";

export function Games() {
  const [listSelected, setListSelected] = useState<number>(1);

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={background} />

      <View style={styles.topContainer}>
        <View style={styles.trophyIconContainer}>
          <Image style={styles.trophyIcon} source={trophyIcon} />
        </View>
        <View>
          <MyText style={styles.gamesTitle}>JOGOS</MyText>
          <View style={styles.dateContainer}>
            <Image source={calendarIcon} />
            <MyText>
              {leadingZeros(new Date().getDate())}{" "}
              {new Date()
                .toLocaleString("default", { month: "long" })
                .charAt(0)
                .toUpperCase() +
                new Date()
                  .toLocaleString("default", { month: "long" })
                  .slice(1)}
            </MyText>
          </View>
        </View>
      </View>

      <View style={styles.listSelector}>
        <TouchableOpacity onPress={() => setListSelected(1)}>
          <MyText
            style={
              listSelected == 1
                ? styles.listSelectorTitle
                : { ...styles.listSelectorTitle, opacity: 0.2 }
            }
          >
            Próximos
          </MyText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setListSelected(2)}>
          <MyText
            style={
              listSelected == 2
                ? styles.listSelectorTitle
                : { ...styles.listSelectorTitle, opacity: 0.2 }
            }
          >
            Resultados
          </MyText>
        </TouchableOpacity>
      </View>

      {listSelected == 1 && <GameResultsList />}

      {listSelected == 2 && <GameResultsList />}

      <HomeBar />
    </View>
  );
}
