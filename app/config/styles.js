import { Platform } from "react-native";
import COLORS from "./colors";

export const ANDROID = Platform.OS === "android";

const TEXT = {
   color: COLORS.dark,
   fontSize: ANDROID ? 18 : 20,
   fontFamily: ANDROID ? "Roboto" : "Avenir",
};

const WIDTH_HEIGHT = { height: 50, width: "100%" };

export default {
   COLORS,
   TEXT,
   INPUT: {
      ...TEXT,
      ...WIDTH_HEIGHT,
      fontSize: ANDROID ? 14 : 16,
      paddingHorizontal: 15,
   },
   BUTTON: {
      ...TEXT,
      ...WIDTH_HEIGHT,
      fontSize: ANDROID ? 16 : 18,
      fontWeight: "600",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 15,
   },
};
