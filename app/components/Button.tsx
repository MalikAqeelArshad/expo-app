import { Keyboard, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { STYLES } from "../config/styles";

const { COLORS, BUTTON } = STYLES;

interface AppButtonProps extends TouchableOpacityProps {
   background?: string;
   color?: string;
   rounded?: number;
   title: string;
   onPress?: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({
   background = "primary",
   color = "white",
   rounded = 1000,
   title,
   onPress,
   ...otherProps
}) => {
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

export default AppButton;
