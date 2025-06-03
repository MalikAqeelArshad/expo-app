import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../config/colors";

const Icon = ({ name, size = 40, color, background, rounded = true }) => {
   return (
      <View
         style={{
            width: size,
            height: size,
            borderRadius: rounded === false ? 0 : rounded !== true ? rounded : size / 2,
            backgroundColor: rounded === false ? "transparent" : COLORS[background] || COLORS.dark,
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <MaterialCommunityIcons
            name={name}
            size={size * (rounded === false ? 1 : 0.575)}
            color={COLORS[color] || (rounded === false ? COLORS.dark : COLORS.white)}
         />
      </View>
   );
};

export default Icon;
