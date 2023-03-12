import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  overlayContainer: {
    height: "100%",
    width: "100%",
    top: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1001,
  },
  titleCard: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    width: "100%",
  },
  mainContainer: {
    backgroundColor: "black",
    width: "100%",
    paddingTop: 50,
    height: "70%",
    overflow: "hidden",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderColor: THEME.COLORS.DARK_GRAY,
    marginBottom: 30,
  },
  closeIcon: {
    flex: 1,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  closeIconContainer: {
    position: "absolute",
    zIndex: 1002,
    right: 10,
    width: 60,
    height: 60,
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: THEME.COLORS.BLUE,
    paddingVertical: 15,
    paddingHorizontal: 50,
    width: "80%",
    marginLeft: "10%",
    borderRadius: 30,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontFamily: "montserratMedium",
    fontSize: 20,
  },
  gameCardSelected: {
    borderWidth: 4,
    borderColor: THEME.COLORS.BLUE,
  },
});
