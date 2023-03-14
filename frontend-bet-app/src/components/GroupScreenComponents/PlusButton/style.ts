import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 10,
    height: 100,
    width: 100,
    zIndex: 100,
    elevation: 30,
  },
  outsideClickContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 1,
  },

  modalContainer: {
    position: "absolute",
    bottom: 50,
    right: 30,
    zIndex: 100,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    elevation: 30,
    gap: 10,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  newBetIconContainer: {
    padding: 10,
    borderRadius: 100,
    height: 40,
    width: 40,
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
  },
  inviteIconContainer: {
    padding: 10,
    borderRadius: 100,
    height: 40,
    width: 40,
    backgroundColor: THEME.COLORS.LIGHT_GREEN,
  },
  icon: {
    flex: 1,
    resizeMode: "contain",
  },
  lineText: {
    fontFamily: "montserratBold",
  },
});
