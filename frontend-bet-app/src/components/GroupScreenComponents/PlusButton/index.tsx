import { Image, TouchableOpacity, View } from "react-native";
import { MyText } from "../../MyText";
import { styles } from "./style";

import plusIcon from "../../../../assets/icons/add_green.png";
import ticketIcon from "../../../../assets/icons/ticket_profile.png";
import inviteIcon from "../../../../assets/icons/invite.png";
import { useState } from "react";
import { NewBet } from "../../GameBetScreenComponents/NewBet";
import { useContextValue } from "../../../services/contextElement";
import { NewGroup } from "../NewGroup";

export function PlusButton() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const {
    isNewBetWindowCollapsed,
    setIsNewBetWindowCollapsed,
    isNewGroupWindowCollapsed,
    setIsNewGroupWindowCollapsed,
  } = useContextValue();

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
        onPress={() => {
          setIsCollapsed(true);
          setIsNewBetWindowCollapsed(true);
          setIsNewGroupWindowCollapsed(true);
        }}
        activeOpacity={1}
        style={styles.outsideClickContainer}
      >
        {!isNewBetWindowCollapsed && <NewBet />}
        {!isNewGroupWindowCollapsed && <NewGroup phase={2} />}
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setIsNewBetWindowCollapsed(false)}>
            <View style={styles.lineContainer}>
              <View style={styles.newBetIconContainer}>
                <Image style={styles.icon} source={ticketIcon} />
              </View>
              <MyText style={styles.lineText}>Nova aposta</MyText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsNewGroupWindowCollapsed(false)}>
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
  else return <></>;
}
