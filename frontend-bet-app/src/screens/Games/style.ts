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
  trophyIconContainer: {
    height: 60,
    width: 60,
    backgroundColor: THEME.COLORS.LIGHT_GREEN,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  trophyIcon: {
    flex: 1,
    height: 40,
    width: 40,
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
  listSelector: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
  },
  listSelectorTitle: {
    fontFamily: "montserratBold",
    fontSize: 15,
    width: 180,
    textAlign: "center",
    borderBottomColor: "black",
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
});
