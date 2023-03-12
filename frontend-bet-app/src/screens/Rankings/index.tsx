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

import teste2 from "../../../assets/teste2.jpg";
import teste3 from "../../../assets/teste3.jpg";
import teste4 from "../../../assets/teste4.jpg";
import teste5 from "../../../assets/teste5.jpg";
import teste6 from "../../../assets/teste6.jpg";

let participants = [
  { id: 1, name: "João", picture: teste2, wins: 15, points: 25 },
  { id: 2, name: "Karla", picture: teste3, wins: 15, points: 15 },
  { id: 3, name: "Jonas", picture: teste4, wins: 15, points: 10 },
  { id: 4, name: "Jorge", picture: teste5, wins: 15, points: 7 },
  { id: 5, name: "Elisa", picture: teste6, wins: 15, points: 7 },
];

for (let i = 0; i < 50; i++) {
  let aux = { ...participants[0] };
  aux.id = i * 100;
  participants.push(aux);
}

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
            <MyText>#2</MyText>
            <Image style={styles.userProfilePicture} source={userPhoto} />
            <View style={styles.infoIconContainer}>
              <Image source={ticketIcon} />
              <MyText>15</MyText>
            </View>
            <View style={styles.infoIconContainer}>
              <Image source={starIcon} />
              <MyText>250</MyText>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.listContainer}>
        <PlayerList participants={participants} />
      </View>

      <HomeBar />
    </View>
  );
}
