import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Styles from "../config/styles";
const { COLORS, INPUT } = Styles;

const DEFAULT_PADDING = 15;
const ICON_WIDTH = 50;
const ICON_PADDING_OFFSET = 10;

const AppInput = ({
   icon,
   size = 25,
   iconColor = "dark",
   iconBackground = "transparent",
   color = "dark",
   background = "white",
   focusText,
   focusBorder = "dark",
   focusBackground = "white",
   rounded = 10,
   style = {},
   ...otherProps
}) => {
   const [text, setText] = useState("");
   const [isFocus, setIsFocus] = useState(false);

   const borderRadius = rounded === true ? 1000 : Number(rounded) || 0;
   const borderColor = COLORS[isFocus ? focusBorder : style?.borderColor] || COLORS.light;
   const textColor = COLORS[isFocus && focusText ? focusText : style?.color] || COLORS[color];
   const bgColor = COLORS[isFocus ? focusBackground : style?.backgroundColor] || COLORS[background];

   const hasIcon = Boolean(icon);
   const iconHasBg = Boolean(icon && iconBackground !== "transparent");
   const inputPaddingLeft = hasIcon
      ? ICON_WIDTH + (iconHasBg ? ICON_PADDING_OFFSET : 0)
      : DEFAULT_PADDING;
   const inputPaddingRight = style?.paddingRight || DEFAULT_PADDING;

   return (
      <View
         style={[
            styles.container,
            style,
            {
               borderColor,
               borderRadius: style?.borderRadius || borderRadius,
               backgroundColor: bgColor,
            },
         ]}
      >
         {hasIcon && (
            <View style={[styles.iconContainer, { backgroundColor: COLORS[iconBackground] }]}>
               <MaterialCommunityIcons
                  name={icon}
                  size={size}
                  color={COLORS[iconColor] || COLORS[color]}
               />
            </View>
         )}

         <TextInput
            {...otherProps}
            value={text}
            onChangeText={setText}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            placeholderTextColor={COLORS[color] + "99"}
            style={[
               INPUT,
               styles.input,
               {
                  paddingLeft: inputPaddingLeft,
                  paddingRight: inputPaddingRight,
                  color: textColor,
               },
            ]}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      borderWidth: 1,
      overflow: "hidden",
   },
   iconContainer: {
      position: "absolute",
      left: 0,
      width: ICON_WIDTH,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      // padding: 10,
      zIndex: 1,
   },
   input: {
      flex: 1,
      paddingVertical: 10,
   },
});

export default AppInput;
