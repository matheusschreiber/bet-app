import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import rightArrow from "../../../assets/icons/right_arrow.png";
import { MyText } from "../MyText";

interface GroupProps {
  name: string;
  participants: ImageData[];
  amount: string;
}

export function GroupCard({ name, participants, amount }: GroupProps) {
  return (
    <TouchableOpacity>
      <View style={styles.groupContainer}>
        <View style={styles.groupCard}>
          <View>
            <MyText style={styles.groupTitle}>{name}</MyText>
            <View style={styles.groupImages}>
              {participants?.map((imagedata, idx) => (
                <Image key={idx} source={imagedata} style={styles.groupImage} />
              ))}
            </View>
            <MyText style={styles.groupSubTitle}>{amount}</MyText>
          </View>
          <Image source={rightArrow} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
