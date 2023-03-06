import { ReactNode } from "react";
import { Text } from "react-native";

type Props = {
  children: ReactNode;
  style?: Object;
};

export function MyText({ children, style }: Props) {
  return <Text style={{ fontFamily: "montserrat", ...style }}>{children}</Text>;
}
