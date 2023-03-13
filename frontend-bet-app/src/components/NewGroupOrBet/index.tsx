import { Image, TouchableOpacity, View } from "react-native";
import { MyText } from "../MyText";
import { styles } from "./style";

import newGroupIcon from "../../../assets/icons/group.png";
import ticketIcon from "../../../assets/icons/ticket_profile.png";
import { useContextValue } from "../../services/contextElement";

export function NewGroupOrBet() {
  const { setIsNewBetOrGroupWindowCollapsed } = useContextValue();

  return (
    <View
      style={styles.overlayContainer}
      // onPress={() => setIsNewBetOrGroupWindowCollapsed(true)}
    >
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={newGroupIcon} />
          </View>
          <MyText style={styles.itemTitle}>Criar novo Grupo de Apostas</MyText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={ticketIcon} />
          </View>
          <MyText style={styles.itemTitle}>Nova aposta</MyText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
