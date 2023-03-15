import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

import rightArrow from "../../../../assets/icons/right_arrow.png";
import blankProfile from "../../../../assets/icons/blank_profile.png";

import { useNavigation } from "@react-navigation/native";
import { User } from "../../../@types/navigation";
import { MyText } from "../../MyText";

interface GroupCard {
  id: string;
  idAdmin: string;
  name: string;
  participants: { user: User }[];
  amount: string;
  prize: string;
}

export function GroupCard({
  id,
  idAdmin,
  name,
  participants,
  amount,
  prize,
}: GroupCard) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("group", {
          id,
          id_admin: idAdmin,
          name,
          participants,
          prize,
        });
      }}
    >
      <View style={styles.groupContainer}>
        <View style={styles.groupCard}>
          <View>
            <MyText style={styles.groupTitle}>{name}</MyText>
            <View style={styles.groupImages}>
              {participants?.map((user, idx) => {
                if (idx > 5) return <View key={idx} />;
                else if (idx == 5)
                  return (
                    <Image
                      key={idx}
                      source={blankProfile}
                      style={styles.groupImage}
                    />
                  );

                return (
                  <Image
                    key={idx}
                    source={{ uri: user.user.picture }}
                    style={styles.groupImage}
                  />
                );
              })}
            </View>
            <MyText style={styles.groupSubTitle}>{amount}</MyText>
          </View>
          <Image source={rightArrow} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
