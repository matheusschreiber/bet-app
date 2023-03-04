import { View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import homeImg from "../../assets/icons/home.png";
import rankingImg from "../../assets/icons/ranking.png";
import addImg from "../../assets/icons/add.png";
import gamesImg from "../../assets/icons/games.png";
import accountImg from "../../assets/icons/account.png";
import { useContextValue } from "../../services/contextElement";

export function HomeBar() {
  const { setSelected } = useContextValue();

  const icons = [homeImg, rankingImg, addImg, gamesImg, accountImg];

  return (
    <View style={styles.container}>
      {icons?.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.imageContainer}
          onPress={() => setSelected(idx)}
        >
          <Image source={item} style={styles.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
