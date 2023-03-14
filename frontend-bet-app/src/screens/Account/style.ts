import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 140,
  },
  topContainer: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 100,
    marginTop: 80,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 10,
  },
  toolboxIconContainer: {
    height: 60,
    width: 60,
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  toolboxIcon: {
    flex: 1,
    height: 35,
    width: 35,
    resizeMode: "contain",
  },
  gamesTitle: {
    fontFamily: "montserratBold",
    alignSelf: "flex-start",
    fontSize: 18,
  },
  dateContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
