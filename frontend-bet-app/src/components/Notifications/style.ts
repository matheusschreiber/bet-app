import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  overlayContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
  },
  topContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    zIndex: 1002,
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

  mainContainer: {
    backgroundColor: "white",
    position: "absolute",
    padding: 20,
    borderRadius: 20,
    elevation: 30,
    gap: 20,
    top: 50,
    right: 30,
    zIndex: 2000,
  },
  iconWindowContainer: {
    backgroundColor: THEME.COLORS.LIGHT_GREEN,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemTitle: {
    fontFamily: "montserratBold",
  },
});
