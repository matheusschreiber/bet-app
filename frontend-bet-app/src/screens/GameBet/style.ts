import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
  },
  teamsContainer: {
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
  },
  iconContainer: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
  },
  vsText: {
    backgroundColor: "white",
    height: 30,
    width: 30,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 30,
    fontFamily: "montserratBold",
    fontSize: 12,
  },
  teamName: {
    color: "white",
    textAlign: "center",
  },
  descText: {
    color: "white",
    textAlign: "center",
  },
  backArrowContainer: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginTop: 30,
  },
  backArrow: {
    height: 30,
    width: 30,
    flex: 1,
    resizeMode: "contain",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  subtitle: {
    color: THEME.COLORS.DARK_GRAY,
    fontSize: 15,
    marginLeft: 10,
    fontFamily: "montserratBold",
    maxWidth: 150,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  playersContainer: {
    backgroundColor: "white",
    height: "100%",
    padding: 30,
    margin: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  betAreaContainer: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  betAreaText: {
    fontFamily: "montserratMedium",
    width: "60%",
  },
  betAreaButton: {
    backgroundColor: THEME.COLORS.BLUE,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontFamily: "montserratBold",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  ticketIconBetArea: {
    flex: 1,
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  ticketIconBetAreaContainer: {
    height: 70,
    width: 70,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    marginRight: 20,
  },
  playersTitle: {
    fontFamily: "montserratMedium",
    color: "black",
    fontSize: 20,
    marginTop: 20,
  },
});
