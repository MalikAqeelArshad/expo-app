import { KeyboardAvoidingView, View, Platform, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import COLORS from "@/utils/colors";

interface ScreenProps {
   fullScreen?: boolean; // hide status bar / full screen content
   statusBar?: boolean; // show/hide status bar
   barStyle?: "light" | "dark"; // status bar text color
   barColor?: string; // status bar background color
   background?: string; // screen background color
   children?: React.ReactNode;
}

const Screen = ({
   fullScreen = false,
   statusBar = true,
   barStyle = "dark",
   barColor,
   background,
   children,
}: ScreenProps) => {
   const insets = useSafeAreaInsets(); // get top safe area inset

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : undefined}
         style={{ flex: 1, backgroundColor: COLORS[background || "bgColor"] }}
         // keyboardVerticalOffset={Platform.OS === "ios" ? insets.top + 10 : 0}
      >
         {/* Status Bar Spacer */}
         {statusBar && (
            <View
               style={{
                  width: "100%",
                  height: fullScreen ? 0 : insets.top,
                  backgroundColor: COLORS[barColor || "bgColor"],
               }}
            />
         )}
         {/* Actual StatusBar */}
         <StatusBar
            animated
            translucent
            hidden={fullScreen}
            backgroundColor="transparent"
            barStyle={barStyle === "light" ? "light-content" : "dark-content"}
         />
         {/* Screen Content */}
         {children}
      </KeyboardAvoidingView>
   );
};

export default Screen;
