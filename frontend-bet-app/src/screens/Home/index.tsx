import { Image, View, ScrollView } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { Groups } from "../../components/HomeScreenComponents/Groups";
import background from "../../../assets/home_background.png";
import { styles } from "./style";
import { MyText } from "../../components/MyText";
import { Statistics } from "../../components/HomeScreenComponents/Statistics";
import { Games } from "../../components/HomeScreenComponents/Games";
import { Notifications } from "../../components/Notifications";
import { useContextValue } from "../../services/contextElement";

export function Home() {
  const { user } = useContextValue();

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image source={background} style={styles.backgroundContainer} />

          <View style={styles.profileContainer}>
            <Image
              source={{ uri: user.picture }}
              style={styles.profilePicture}
            />
            <MyText style={styles.profileName}>{user.name}</MyText>
          </View>

          <Statistics />

          <Groups />

          <Games />

          <View style={{ width: "100%", height: 150 }}></View>
        </View>
        <Notifications />
      </ScrollView>
      <HomeBar />
    </>
  );
}
