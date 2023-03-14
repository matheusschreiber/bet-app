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
  contentContainer: {
    backgroundColor: "white",
    width: "90%",
    paddingBottom: 150,
    padding: 40,
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  blockContainer: {
    marginBottom: 50,
    gap: 10,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  blockTitle: {
    fontFamily: "montserratBold",
    color: THEME.COLORS.DARK_GRAY,
    fontSize: 18,
  },
  subtitle: {
    fontFamily: "montserratBold",
    color: THEME.COLORS.DARK_GRAY,
  },
  propText: {
    fontFamily: "montserrat",
    color: THEME.COLORS.DARK_GRAY,
  },

  switchContainer: {
    borderWidth: 2,
    borderColor: THEME.COLORS.BLUE,
    borderRadius: 30,
    marginLeft: 20,
    height: 30,
    width: 60,
    padding: 0,
  },
  switch: {
    height: 28,
    width: 28,
    borderRadius: 30,
    backgroundColor: THEME.COLORS.BLUE,
  },
});
