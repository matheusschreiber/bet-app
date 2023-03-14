import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import bellIcon from "../../../assets/icons/bell.png";
import trophyIcon from "../../../assets/icons/trophy_profile.png";
import { useState } from "react";
import { MyText } from "../MyText";

export function Notifications() {
  const [isCollapsed, setNotficationCollapsed] = useState<boolean>(true);

  if (!isCollapsed)
    return (
      <TouchableOpacity
        style={styles.overlayContainer}
        onPress={() => setNotficationCollapsed(true)}
      >
        <View style={styles.mainContainer}>
          <View style={styles.itemContainer}>
            <View style={styles.iconWindowContainer}>
              <Image source={trophyIcon} />
            </View>
            <MyText style={styles.itemTitle}>4 jogos finalizados</MyText>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.iconWindowContainer}>
              <Image source={trophyIcon} />
            </View>
            <MyText style={styles.itemTitle}>2 novos jogos para apostar</MyText>
          </View>
        </View>
      </TouchableOpacity>
    );
  else
    return (
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            setNotficationCollapsed(!isCollapsed);
          }}
        >
          <Image source={bellIcon} style={styles.bellIcon} />
        </TouchableOpacity>
      </View>
    );
}
