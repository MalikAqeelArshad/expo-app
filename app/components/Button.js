import { Keyboard, Text, TouchableOpacity } from "react-native";

import Styles from "../config/styles";
const { COLORS, BUTTON } = Styles;

const AppButton = ({ background = "primary", color = "white", rounded = 1000, title, onPress }) => {
   return (
      <TouchableOpacity
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
