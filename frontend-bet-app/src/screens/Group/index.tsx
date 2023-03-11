import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { GroupProps } from "../../@types/navigation";
import backArrow from "../../../assets/icons/left_arrow.png";
import prizeIcon from "../../../assets/icons/prize.png";
import editIcon from "../../../assets/icons/edit.png";
import { styles } from "./style";
import { PlayerList } from "../../components/PlayersList";
import { MyText } from "../../components/MyText";

export function Group() {
  const router = useRoute();
  const group = router.params as GroupProps;
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backIcon} source={backArrow} />
        </TouchableOpacity>
        <MyText style={styles.titleGroup}>{group.name}</MyText>
      </View>

      <View style={styles.prizeFlexBox}>
        <View style={styles.prizeContainer}>
          <Image source={prizeIcon} />
          <View>
            <MyText style={styles.prizeTitle}>Prêmio estabelecido</MyText>
            <MyText style={styles.descPrize}>{group.prize}</MyText>
          </View>

          <TouchableOpacity style={styles.editContainer}>
            <Image source={editIcon} />
            <MyText>Alterar</MyText>
          </TouchableOpacity>
        </View>
      </View>

      <PlayerList participants={group.participants} />
    </View>
  );
}
