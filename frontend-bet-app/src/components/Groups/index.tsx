import { Image, Text, View } from "react-native";

import { styles } from "./style";

import rightArrow from "../../../assets/icons/right_arrow.png";
import teste2 from "../../../assets/teste2.jpg";
import teste3 from "../../../assets/teste3.jpg";
import teste4 from "../../../assets/teste4.jpg";
import teste5 from "../../../assets/teste5.jpg";
import teste6 from "../../../assets/teste6.jpg";

export function Groups() {
  return (
    <View style={styles.groupsContainer}>
      <Text style={styles.title}>Meus grupos de aposta</Text>

      <View style={styles.groupContainer}>
        <View style={styles.groupCard}>
          <View>
            <Text style={styles.groupTitle}>Amigos do trabalho</Text>
            <View style={styles.groupImages}>
              <Image source={teste2} style={styles.groupImage} />
              <Image source={teste3} style={styles.groupImage} />
              <Image source={teste4} style={styles.groupImage} />
              <Image source={teste5} style={styles.groupImage} />
              <Image source={teste6} style={styles.groupImage} />
            </View>
            <Text>5 pessoas</Text>
          </View>
          <Image source={rightArrow} />
        </View>
      </View>

      <View style={styles.groupContainer}>
        <View style={styles.groupCard}>
          <View>
            <Text style={styles.groupTitle}>Família</Text>
            <View style={styles.groupImages}>
              <Image source={teste2} style={styles.groupImage} />
              <Image source={teste3} style={styles.groupImage} />
              <Image source={teste4} style={styles.groupImage} />
              <Image source={teste5} style={styles.groupImage} />
              <Image source={teste6} style={styles.groupImage} />
            </View>
            <Text style={styles.subtitle}>5 pessoas</Text>
          </View>
          <Image source={rightArrow} />
        </View>
      </View>

      <View style={styles.groupContainer}>
        <View style={styles.groupCard}>
          <View>
            <Text style={styles.groupTitle}>Família</Text>
            <View style={styles.groupImages}>
              <Image source={teste2} style={styles.groupImage} />
              <Image source={teste3} style={styles.groupImage} />
              <Image source={teste4} style={styles.groupImage} />
              <Image source={teste5} style={styles.groupImage} />
              <Image source={teste6} style={styles.groupImage} />
            </View>
            <Text style={styles.subtitle}>5 pessoas</Text>
          </View>
          <Image source={rightArrow} />
        </View>
      </View>

      <View style={styles.groupContainer}>
        <View style={styles.groupCard}>
          <View>
            <Text style={styles.groupTitle}>Família</Text>
            <View style={styles.groupImages}>
              <Image source={teste2} style={styles.groupImage} />
              <Image source={teste3} style={styles.groupImage} />
              <Image source={teste4} style={styles.groupImage} />
              <Image source={teste5} style={styles.groupImage} />
              <Image source={teste6} style={styles.groupImage} />
            </View>
            <Text style={styles.subtitle}>5 pessoas</Text>
          </View>
          <Image source={rightArrow} />
        </View>
      </View>

      <View style={styles.groupContainer}>
        <View style={styles.groupCard}>
          <View>
            <Text style={styles.groupTitle}>Família</Text>
            <View style={styles.groupImages}>
              <Image source={teste2} style={styles.groupImage} />
              <Image source={teste3} style={styles.groupImage} />
              <Image source={teste4} style={styles.groupImage} />
              <Image source={teste5} style={styles.groupImage} />
              <Image source={teste6} style={styles.groupImage} />
            </View>
            <Text style={styles.subtitle}>5 pessoas</Text>
          </View>
          <Image source={rightArrow} />
        </View>
      </View>
    </View>
  );
}
