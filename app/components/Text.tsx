import { Text as AppText, TextProps, TextStyle } from "react-native";
import { STYLES } from "@/utils/styles";

interface AppTextProps extends TextProps {
   style?: TextStyle | TextStyle[];
}

const Text = ({ children, style, ...otherProps }: AppTextProps) => {
   return (
      <AppText style={[STYLES.TEXT, style]} {...otherProps}>
         {children}
      </AppText>
   );
};

export default Text;
