import { Image, TouchableOpacity, View } from "react-native";
import { MyText } from "../../MyText";
import { styles } from "./style";

import plusIcon from "../../../../assets/icons/add_green.png";
import ticketIcon from "../../../../assets/icons/ticket_profile.png";
import inviteIcon from "../../../../assets/icons/invite.png";
import { useState } from "react";

export function PlusButton() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  if (isCollapsed)
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={1}
        onPress={() => setIsCollapsed(false)}
      >
        <Image source={plusIcon} />
      </TouchableOpacity>
    );

  if (!isCollapsed)
    return (
      <TouchableOpacity
        onPress={() => setIsCollapsed(true)}
        activeOpacity={1}
        style={styles.outsideClickContainer}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity>
            <View style={styles.lineContainer}>
              <View style={styles.newBetIconContainer}>
                <Image style={styles.icon} source={ticketIcon} />
              </View>
              <MyText style={styles.lineText}>Nova aposta</MyText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.lineContainer}>
              <View style={styles.inviteIconContainer}>
                <Image style={styles.icon} source={inviteIcon} />
              </View>
              <MyText style={styles.lineText}>Convidar pessoas</MyText>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
}
