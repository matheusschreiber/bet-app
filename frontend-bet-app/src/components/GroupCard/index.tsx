import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import rightArrow from "../../../assets/icons/right_arrow.png";

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
            <Text style={styles.groupTitle}>{name}</Text>
            <View style={styles.groupImages}>
              {participants?.map((imagedata) => (
                <Image source={imagedata} style={styles.groupImage} />
              ))}
            </View>
            <Text style={styles.groupSubTitle}>{amount}</Text>
          </View>
          <Image source={rightArrow} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
