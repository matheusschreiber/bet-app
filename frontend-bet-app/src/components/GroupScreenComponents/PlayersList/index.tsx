import { FlatList, Image, ScrollView, View } from "react-native";
import { User } from "../../../@types/navigation";
import { MyText } from "../../MyText";

import { styles } from "./style";

import ticketIcon from "../../../../assets/icons/ticket_profile.png";
import starIcon from "../../../../assets/icons/star_profile.png";
import { useContextValue } from "../../../services/contextElement";
import { leadingZeros } from "../../HomeScreenComponents/GameCard";

interface PlayerListProps {
  participants: User[];
  highlight?: User;
}

export function PlayerList({ participants, highlight }: PlayerListProps) {
  const { isNewBetWindowCollapsed } = useContextValue();
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.headerContainer}>
        <MyText style={styles.nameHeader}>NOME</MyText>
        <MyText style={styles.headerText}>ACERTOS</MyText>
        <MyText style={styles.headerText}>PONTOS</MyText>
      </View>

      {isNewBetWindowCollapsed && (
        <FlatList
          data={participants.sort((a, b) => (a.rank > b.rank ? 1 : -1))}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: "100%" }}
          style={styles.flatListContainer}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<View style={{ height: 500 }} />}
          renderItem={({ item }) => (
            <View
              style={
                highlight && highlight.id == item.id
                  ? { ...styles.playerContainer, ...styles.highlighted }
                  : { ...styles.playerContainer }
              }
            >
              <View style={styles.namePlayer}>
                <MyText style={styles.indexPlayer}>
                  {leadingZeros(item.rank)}
                </MyText>
                <Image style={styles.playerPhoto} source={item.picture} />
                <MyText style={styles.playerName}>{item.name}</MyText>
              </View>
              <View style={styles.simpleContainer}>
                <Image source={ticketIcon} />
                <MyText style={styles.boldText}>{item.wins}</MyText>
              </View>

              <View style={styles.simpleContainer}>
                <Image source={starIcon} />
                <MyText style={styles.boldText}>
                  {item.points.toLocaleString("pt-BR")}
                </MyText>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
