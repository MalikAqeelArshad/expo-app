import { View, StyleSheet, TouchableWithoutFeedback, GestureResponderEvent } from "react-native";

import { ExpoIcon } from "../Icon";
import COLORS from "@/utils/colors";

type ListItemDeleteActionProps = {
   onPress?: (event: GestureResponderEvent) => void;
};

const ListItemDeleteAction = ({ onPress }: ListItemDeleteActionProps) => {
   return (
      <TouchableWithoutFeedback onPress={onPress}>
         <View style={styles.container}>
            <ExpoIcon name="trash-can" size={35} color={COLORS.white} />
         </View>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: COLORS.danger,
      width: 70,
      justifyContent: "center",
      alignItems: "center",
   },
});

export default ListItemDeleteAction;
