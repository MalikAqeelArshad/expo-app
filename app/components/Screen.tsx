import { KeyboardAvoidingView, View, Platform, StatusBar, StyleSheet } from "react-native";
import Constants from "expo-constants";

import COLORS from "../config/colors";

interface ScreenProps {
   fullScreen?: boolean;
   statusBar?: boolean;
   barStyle?: boolean;
   barColor?: string;
   background?: string;
   children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({
   fullScreen = false,
   statusBar = true,
   barStyle = false,
   barColor,
   background,
   children,
}) => {
   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={{ flex: 1, backgroundColor: COLORS[background || "bgColor"] }}
         //  keyboardVerticalOffset={Platform.OS === "ios" ? Constants.statusBarHeight + 10 : 0}
      >
         {statusBar && (
            <View
               style={{
                  width: "100%",
                  height: fullScreen ? 0 : Constants.statusBarHeight,
                  backgroundColor: COLORS[barColor || "bgColor"],
               }}
            />
         )}

         <StatusBar
            animated
            translucent
            hidden={fullScreen}
            backgroundColor="transparent"
            barStyle={barStyle ? "light-content" : "dark-content"}
         />

         {children}
      </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});

export default Screen;
