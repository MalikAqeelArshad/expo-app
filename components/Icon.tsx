import { View } from "react-native";
import { ComponentType } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "@/utils/colors";

export const ExpoIcon: ComponentType<any> = MaterialCommunityIcons;
export type TExpoIcon = keyof typeof MaterialCommunityIcons.glyphMap;

interface IconProps {
   name: TExpoIcon;
   size?: number;
   color?: string;
   background?: string;
   rounded?: boolean | number;
}

const Icon = ({ name, size = 40, color, background, rounded = true }: IconProps) => {
   const flat = rounded === false;
   return (
      <View
         style={{
            width: size,
            height: size,
            borderRadius: flat ? 0 : rounded !== true ? (rounded as number) : size / 2,
            backgroundColor: flat ? "transparent" : COLORS[background || "dark"],
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <ExpoIcon
            name={name}
            size={size * (flat ? 1 : 0.575)}
            color={COLORS[color || (flat ? "dark" : "white")]}
         />
      </View>
   );
};

export default Icon;
