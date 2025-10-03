import { View, StyleSheet, TouchableWithoutFeedback, GestureResponderEvent } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../config/colors";

type ListItemDeleteActionProps = {
   onPress?: (event: GestureResponderEvent) => void,
};

function ListItemDeleteAction({ onPress }: ListItemDeleteActionProps) {
   return (
      <TouchableWithoutFeedback onPress={onPress}>
         <View style={styles.container}>
            <MaterialCommunityIcons name="trash-can" size={35} color={COLORS.white} />
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: COLORS.danger,
      width: 70,
      justifyContent: "center",
      alignItems: "center",
   },
});

export default ListItemDeleteAction;
