import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../config/colors";

interface IconProps {
   name: keyof typeof MaterialCommunityIcons.glyphMap;
   size?: number;
   color?: string;
   background?: string;
   rounded?: boolean | number;
}

const Icon: React.FC<IconProps> = ({ name, size = 40, color, background, rounded = true }) => {
   return (
      <View
         style={{
            width: size,
            height: size,
            borderRadius: rounded === false ? 0 : rounded !== true ? (rounded as number) : size / 2,
            backgroundColor: rounded === false ? "transparent" : COLORS[background || "dark"],
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <MaterialCommunityIcons
            name={name}
            size={size * (rounded === false ? 1 : 0.575)}
            color={COLORS[color || (rounded === false ? "dark" : "white")]}
         />
      </View>
   );
};

export default Icon;
