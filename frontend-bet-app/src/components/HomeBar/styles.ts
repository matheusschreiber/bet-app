import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
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
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
