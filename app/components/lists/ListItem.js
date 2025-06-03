import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Swipeable from 'react-native-gesture-handler/Swipeable';

import Text from "../Text";
import COLORS from "../../config/colors";

function ListItem({
   title,
   subTitle,
   image,
   IconComponent,
   onPress,
   chevron = true,
   titleLines = 1,
   subTitleLines = 2,
   renderRightActions,
}) {
   return (
      // <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={COLORS.medium} onPress={onPress}>
         <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.details}>
               {title && (
                  <Text style={styles.title} numberOfLines={titleLines}>
                     {title}
                  </Text>
               )}
               {subTitle && (
                  <Text style={styles.subTitle} numberOfLines={subTitleLines}>
                     {subTitle}
                  </Text>
               )}
            </View>
            {chevron && (
               <MaterialCommunityIcons color={COLORS.medium} name="chevron-right" size={25} />
            )}
         </View>
      </TouchableHighlight>
      // </Swipeable>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      flexDirection: "row",
      padding: 15,
      backgroundColor: COLORS.white,
   },
   image: {
      width: 70,
      height: 70,
      borderRadius: 35,
   },
   details: {
      flex: 1,
      marginLeft: 10,
      justifyContent: "center",
   },
   title: {
      fontWeight: "500",
   },
   subTitle: {
      color: COLORS.medium,
   },
});

export default ListItem;
