import { Platform, TextStyle, ViewStyle } from "react-native";
import COLORS from "./colors";

// Platform check
export const ANDROID: boolean = Platform.OS === "android";

// Base text style
const TEXT: TextStyle = {
   color: COLORS.dark,
   fontSize: ANDROID ? 18 : 20,
   fontFamily: ANDROID ? "Roboto" : "Avenir",
};

const WIDTH_HEIGHT: ViewStyle = { height: 50, width: "100%" };

// Styles config
export const STYLES = {
   COLORS,
   TEXT,
   INPUT: {
      ...TEXT,
      ...WIDTH_HEIGHT,
      fontSize: ANDROID ? 14 : 16,
      paddingHorizontal: 15,
   } as TextStyle & ViewStyle,
   BUTTON: {
      ...TEXT,
      ...WIDTH_HEIGHT,
      fontSize: ANDROID ? 16 : 18,
      fontWeight: "600",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 15,
   } as TextStyle & ViewStyle,
};
