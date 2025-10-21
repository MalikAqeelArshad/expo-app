import { Text as AppText, StyleProp, TextProps, TextStyle } from "react-native";
import { STYLES } from "@/utils/styles";

interface AppTextProps extends TextProps {
   style?: StyleProp<TextStyle>; // <- this allows TextStyle | TextStyle[] | undefined
}

const Text = ({ children, style, ...otherProps }: AppTextProps) => {
   return (
      <AppText style={[STYLES.TEXT, style]} {...otherProps}>
         {children}
      </AppText>
   );
};

export default Text;
