import { Text, TextProps, TextStyle } from "react-native";
import { STYLES } from "../config/styles";

interface AppTextProps extends TextProps {
   style?: TextStyle | TextStyle[];
}

const AppText: React.FC<AppTextProps> = ({ children, style, ...otherProps }) => {
   return (
      <Text style={[STYLES.TEXT, style]} {...otherProps}>
         {children}
      </Text>
   );
};

export default AppText;
