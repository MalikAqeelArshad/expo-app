import { useState } from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { ExpoIcon } from "./Icon";
import { TIcon } from "@/utils/types";
import { STYLES } from "@/utils/styles";

const { COLORS, INPUT } = STYLES;
const DEFAULT_PADDING = 15;
const ICON_WIDTH = 50;
const ICON_PADDING_OFFSET = 10;

interface InputProps extends TextInputProps {
   icon?: TIcon | false;
   color?: any;
   background?: any;
   focusText?: string;
   focusBorder?: string;
   focusBackground?: string;
   rounded?: number | boolean;
   style?: any;
}

const Input = ({
   icon,
   color = "dark",
   background = "white",
   focusText,
   focusBorder = "dark",
   focusBackground = "white",
   rounded = 10,
   style = {},
   ...props // rest props
}: InputProps) => {
   const [text, setText] = useState("");
   const [isFocus, setIsFocus] = useState(false);

   const borderRadius = style?.borderRadius ?? (rounded === true ? 1000 : Number(rounded) || 0);
   const borderColor = COLORS[isFocus ? focusBorder : style?.borderColor] || COLORS.light;
   const textColor = COLORS[isFocus && focusText ? focusText : style?.color] || COLORS[color];
   const backgroundColor =
      COLORS[isFocus ? focusBackground : style?.backgroundColor] || COLORS[background];

   const hasIcon = !!(icon && typeof icon !== "boolean" && icon.name);
   const iconColor = hasIcon ? COLORS[icon!.color || color] : undefined;
   const iconBg = hasIcon ? COLORS[icon!.background!] ?? "transparent" : undefined;

   const inputPaddingLeft = hasIcon
      ? ICON_WIDTH + (iconBg !== "transparent" ? ICON_PADDING_OFFSET : 0)
      : DEFAULT_PADDING;
   const inputPaddingRight = style?.paddingRight || DEFAULT_PADDING;

   return (
      <View style={[styles.container, style, { borderColor, borderRadius, backgroundColor }]}>
         {hasIcon && (
            <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
               <ExpoIcon name={icon!.name} size={icon!.size || 25} color={iconColor!} />
            </View>
         )}

         <TextInput
            {...props}
            value={props.value ?? text}
            onChangeText={(val) => {
               setText(val); // local state
               props.onChangeText?.(val); // notify parent
            }}
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
      zIndex: 1,
   },
   input: { flex: 1, paddingVertical: 10 },
});

export default Input;
