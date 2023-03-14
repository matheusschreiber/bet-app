import { Image, TouchableOpacity, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";
import background from "../../../assets/simple_background.png";
import { styles } from "./style";
import { Notifications } from "../../components/Notifications";
import toolboxIcon from "../../../assets/icons/toolbox.png";
import bellIcon from "../../../assets/icons/bell2.png";
import versionIcon from "../../../assets/icons/version.png";
import androidIcon from "../../../assets/icons/android.png";
import lifeboatIcon from "../../../assets/icons/lifeboat.png";
import docsIcon from "../../../assets/icons/docs.png";
import { useState } from "react";
import { THEME } from "../../theme";

export function Account() {
  const [notificationsOn, setNotificationsOn] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={background} />

      <View style={styles.topContainer}>
        <View style={styles.toolboxIconContainer}>
          <Image style={styles.toolboxIcon} source={toolboxIcon} />
        </View>
        <View>
          <MyText style={styles.gamesTitle}>Configurações</MyText>
          <View style={styles.dateContainer}>
            <MyText>Informações e ferramentas</MyText>
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.blockContainer}>
          <MyText style={styles.blockTitle}>Notificações</MyText>
          <TouchableOpacity style={styles.lineContainer}>
            <Image source={bellIcon} />
            <MyText style={styles.propText}>Permitir notificações</MyText>
            <TouchableOpacity
              onPress={() => setNotificationsOn(!notificationsOn)}
              style={
                notificationsOn
                  ? {
                      ...styles.switchContainer,
                      backgroundColor: THEME.COLORS.LIGHT_BLUE,
                    }
                  : styles.switchContainer
              }
            >
              <View
                style={
                  notificationsOn
                    ? { ...styles.switch, marginLeft: 30 }
                    : styles.switch
                }
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.blockContainer}>
          <MyText style={styles.blockTitle}>Sobre</MyText>
          <TouchableOpacity style={styles.lineContainer}>
            <Image source={versionIcon} />
            <View>
              <MyText style={styles.propText}>Versão</MyText>
              <MyText style={styles.subtitle}>1.0.0</MyText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lineContainer}>
            <Image source={androidIcon} />
            <View>
              <MyText style={styles.propText}>Ambiente</MyText>
              <MyText style={styles.subtitle}>android</MyText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lineContainer}>
            <Image source={lifeboatIcon} />
            <MyText style={styles.propText}>Fale conosco</MyText>
          </TouchableOpacity>
        </View>

        <View style={styles.blockContainer}>
          <MyText style={styles.blockTitle}>Termos legais</MyText>
          <TouchableOpacity style={styles.lineContainer}>
            <Image source={docsIcon} />
            <MyText style={styles.propText}>Licença de código aberto</MyText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lineContainer}>
            <Image source={docsIcon} />
            <MyText style={styles.propText}>Privacidade</MyText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lineContainer}>
            <Image source={docsIcon} />
            <MyText style={styles.propText}>Termos de Uso</MyText>
          </TouchableOpacity>
        </View>
      </View>

      <HomeBar />
      <Notifications />
    </View>
  );
}
