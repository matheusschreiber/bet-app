import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    paddingTop: 50,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 300,
    zIndex: -1,
  },

  iconContainer: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 30,
    marginTop: 50,
  },
  bellIcon: {
    flex: 1,
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  profilePicture: {
    borderRadius: 10000,
    borderColor: THEME.COLORS.SOFT_GREEN,
    borderWidth: 4,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    fontSize: 20,
    fontFamily: "montserratMedium",
    color: "white",
    marginTop: 10,
  },
});
