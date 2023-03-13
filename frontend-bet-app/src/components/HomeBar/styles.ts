import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1000,
  },
  container: {
    width: "90%",
    borderRadius: 25,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  topContainer: {
    position: "absolute",
    bottom: 20,
    left: "5%",
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 1000,
  },
});
