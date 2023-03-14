import { Image, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";
import { styles } from "./style";
import background from "../../../assets/home_background.png";
import starLarge from "../../../assets/icons/star_large.png";
import starIcon from "../../../assets/icons/star_profile.png";
import ticketIcon from "../../../assets/icons/ticket_profile.png";

import userPhoto from "../../../assets/teste.jpg";
import { PlayerList } from "../../components/GroupScreenComponents/PlayersList";
import { globalUsers, User } from "../../services/provisoryData";
import { Notifications } from "../../components/Notifications";

export function Rankings() {
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
            <MyText>#{User.rank}</MyText>
            <Image style={styles.userProfilePicture} source={userPhoto} />
            <View style={styles.infoIconContainer}>
              <Image source={ticketIcon} />
              <MyText>{User.wins}</MyText>
            </View>
            <View style={styles.infoIconContainer}>
              <Image source={starIcon} />
              <MyText>{User.points.toLocaleString("pt-BR")}</MyText>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.listContainer}>
        <PlayerList participants={globalUsers} highlight={User} />
      </View>

      <HomeBar />
      <Notifications />
    </View>
  );
}
