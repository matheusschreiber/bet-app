import { Image, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";
import { styles } from "./style";
import background from "../../../assets/home_background.png";
import starLarge from "../../../assets/icons/star_large.png";
import starIcon from "../../../assets/icons/star_profile.png";
import ticketIcon from "../../../assets/icons/ticket_profile.png";

import { PlayerList } from "../../components/GroupScreenComponents/PlayersList";
import { Notifications } from "../../components/Notifications";
import { useContextValue } from "../../services/contextElement";

export function Rankings() {
  const { user, globalUsers } = useContextValue();
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={background} />

      <View style={styles.topContainer}>
        <View style={styles.starIconContainerLarge}>
          <Image style={styles.starIconLarge} source={starLarge} />
        </View>

        <View style={styles.rightContainer}>
          <MyText style={styles.rankingTitle}>RANKING GLOBAL</MyText>
          <View style={styles.infoContainer}>
            <MyText>#{user.rank}</MyText>
            <Image
              style={styles.userProfilePicture}
              source={{ uri: user.picture }}
            />
            <View style={styles.infoIconContainer}>
              <Image source={ticketIcon} />
              <MyText>{user.wins}</MyText>
            </View>
            <View style={styles.infoIconContainer}>
              <Image source={starIcon} />
              <MyText>{user.points.toLocaleString("pt-BR")}</MyText>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.listContainer}>
        <PlayerList participants={globalUsers} highlight={user} />
      </View>

      <HomeBar />
      <Notifications />
    </View>
  );
}
