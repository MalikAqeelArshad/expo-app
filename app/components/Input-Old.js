import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Styles from "../config/styles";
const { COLORS, INPUT } = Styles;

const AppInputOld = ({
   icon,
   size = 25,
   iconColor,
   iconBackground,
   color,
   background = "white",
   focusText,
   focusBorder = "dark",
   focusBackground = "white",
   rounded = false,
   style,
   ...otherProps
}) => {
   const [text, onChangeText] = useState("");
   const [isFocus, setIsFocus] = useState(false);

   const bColor = COLORS[style?.borderColor] ? style.borderColor : "light";
   const bRadius = rounded === false ? 10 : rounded !== true ? rounded : 100;

   const bgColor = COLORS[isFocus ? focusBackground : style?.backgroundColor] || COLORS[background];

   const padLeft = style?.paddingLeft || (icon ? (COLORS[iconBackground] ? 45 : 35) : 0);

   return (
      <View
         style={[
            styles.container,
            style,
            {
               borderColor: COLORS[isFocus ? focusBorder : bColor],
               borderRadius: bRadius,
               paddingLeft: padLeft,
               backgroundColor: bgColor,
            },
         ]}
      >
         <TextInput
            {...otherProps}
            // placeholderTextColor="red"
            style={[
               INPUT,
               {
                  color:
                     isFocus && COLORS[focusText]
                        ? COLORS[focusText]
                        : COLORS[style?.color] || COLORS[color],
               },
            ]}
            onChangeText={onChangeText}
            value={text}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
         />
         {icon && (
            <View
               style={[
                  styles.icon,
                  {
                     backgroundColor: COLORS[iconBackground],
                     paddingLeft: rounded === true || (!isNaN(rounded) && rounded > 20) ? 3 : 0,
                  },
               ]}
            >
               <MaterialCommunityIcons
                  name={icon}
                  size={size}
                  style={{
                     color:
                        isFocus &&
                        focusText &&
                        !iconBackground &&
                        !style?.backgroundColor &&
                        background !== "white"
                           ? COLORS[focusText] || COLORS[color]
                           : COLORS[style?.color] || COLORS[iconColor],
                  }}
               />
            </View>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: "100%",
      borderWidth: 1,
      overflow: "hidden",
      alignItems: "center",
      flexDirection: "row",
   },
   icon: {
      width: 50,
      height: "100%",
      position: "absolute",
      left: 0,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
});

export default AppInputOld;
