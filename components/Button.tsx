import { Keyboard, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { STYLES } from "@/utils/styles";
import COLORS, { ColorKey } from "@/utils/colors";
const { BUTTON } = STYLES;

interface ButtonProps extends TouchableOpacityProps {
   color?: ColorKey;
   background?: ColorKey;
   rounded?: number;
   title: string;
   onPress?: () => void;
}

const Button = ({
   background = "primary",
   color = "white",
   rounded = 1000,
   title,
   onPress,
   ...otherProps
}: ButtonProps) => {
   return (
      <TouchableOpacity
         {...otherProps}
         onPress={() => [onPress?.(), Keyboard.dismiss()]}
         activeOpacity={0.875}
         style={[BUTTON, { backgroundColor: COLORS[background], borderRadius: rounded }]}
      >
         <Text
            style={{
               color: COLORS[color],
               fontSize: BUTTON.fontSize,
               fontWeight: BUTTON.fontWeight,
            }}
         >
            {title}
         </Text>
      </TouchableOpacity>
   );
};

export default Button;
