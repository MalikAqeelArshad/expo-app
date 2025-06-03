import { Text } from "react-native";

import Styles from "../config/styles";

const AppText = ({ children, style, ...otherProps }) => {
   return (
      <Text style={[Styles.TEXT, style]} {...otherProps}>
         {children}
      </Text>
   );
};

export default AppText;
