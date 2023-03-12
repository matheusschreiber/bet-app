import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    // width: "90%",
    marginHorizontal: "auto",
  },
  descText: {
    backgroundColor: "black",
    color: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 20,
  },
  middleContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  teamContainer: {
    flexDirection: "row",
  },
  teamIcon: {
    fontSize: 30,
    padding: 15,
    borderRadius: 20,
    lineHeight: 30,
    height: 70,
    textAlignVertical: "center",
  },
  teamNameContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  teamName: {
    fontSize: 15,
    fontFamily: "montserratMedium",
  },
  teamScore: {
    fontSize: 50,
    fontFamily: "montserratLight",
    lineHeight: 50,
  },
  betShowSwitcher: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: THEME.COLORS.GRAY,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  headerText: {
    fontFamily: "montserratLight",
    fontSize: 10,
  },
  headerTextName: {
    fontFamily: "montserratLight",
    fontSize: 10,
    width: 150,
    textAlign: "center",
  },

  betContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  betUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: 150,
  },
  userPhoto: {
    borderRadius: 100,
    height: 40,
    width: 40,
    borderColor: THEME.COLORS.GREEN,
    borderWidth: 2,
  },
  winIcon: {
    backgroundColor: THEME.COLORS.LIGHT_GREEN,
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  loseIcon: {
    backgroundColor: THEME.COLORS.LIGHT_RED,
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  icon: {
    flex: 1,
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  pointsContainer: {
    flexDirection: "row",
    gap: 5,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 5,
    borderTopWidth: 0.5,
    borderColor: THEME.COLORS.GRAY,
  },
  subtitle: {
    color: THEME.COLORS.DARK_GRAY,
    fontSize: 15,
    marginLeft: 10,
    fontFamily: "montserratMedium",
    maxWidth: 150,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  vsText: {
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
    height: 30,
    width: 30,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 30,
    fontSize: 12,
  },
});
