import { KeyboardAvoidingView, View, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";

import COLORS from "../config/colors";

const Screen = ({
   fullScreen = false,
   statusBar = true,
   barStyle = false,
   barColor,
   background,
   children,
}) => {
   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : null}
         style={{
            flex: 1,
            backgroundColor: COLORS[background] || COLORS.bgColor,
         }}
      >
         {statusBar && (
            <View
               style={{
                  width: "100%",
                  height: fullScreen ? 0 : Constants.statusBarHeight,
                  backgroundColor: COLORS[barColor] || COLORS.bgColor,
               }}
            />
         )}

         <StatusBar
            animated
            translucent
            hidden={fullScreen}
            backgroundColor="transparent"
            style={barStyle ? "light" : "dark"}
            barStyle={barStyle ? "light-content" : "dark-content"}
         />
         {children}
      </KeyboardAvoidingView>
   );
};

export default Screen;
