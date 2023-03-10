import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GroupProps } from "../../@types/navigation";
import backArrow from "../../../assets/icons/left_arrow.png";
import prizeIcon from "../../../assets/icons/prize.png";
import editIcon from "../../../assets/icons/edit.png";
import { styles } from "./style";
import { PlayerList } from "../../components/PlayersList";

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
        <Text style={styles.titleGroup}>{group.name}</Text>
      </View>

      <View style={styles.prizeFlexBox}>
        <View style={styles.prizeContainer}>
          <Image source={prizeIcon} />
          <View>
            <Text style={styles.prizeTitle}>Prêmio estabelecido</Text>
            <Text style={styles.descPrize}>{group.prize}</Text>
          </View>

          <TouchableOpacity style={styles.editContainer}>
            <Image source={editIcon} />
            <Text>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <PlayerList participants={group.participants} />
    </View>
  );
}
