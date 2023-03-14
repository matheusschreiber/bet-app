import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { GroupProps } from "../../@types/navigation";
import backArrow from "../../../assets/icons/left_arrow.png";
import prizeIcon from "../../../assets/icons/prize.png";
import editIcon from "../../../assets/icons/edit.png";
import { styles } from "./style";
import { PlayerList } from "../../components/GroupScreenComponents/PlayersList";
import { MyText } from "../../components/MyText";
import { useState } from "react";
import { GameResultsList } from "../../components/GroupScreenComponents/GameResultsList";
import { PlusButton } from "../../components/GroupScreenComponents/PlusButton";
import { GamesFinished } from "../../services/provisoryData";

export function Group() {
  const router = useRoute();
  const group = router.params as GroupProps;
  const navigation = useNavigation();

  const [listSelected, setListSelected] = useState<number>(1);
  return (
    <View style={styles.mainContainer}>
      <PlusButton />
      <View style={styles.headerContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => navigation.goBack()}
          >
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
            Ranking
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

      <View style={{ width: "90%" }}>
        {listSelected == 1 && <PlayerList participants={group.participants} />}
      </View>

      {listSelected == 2 && <GameResultsList games={GamesFinished} />}
    </View>
  );
}
