import {
   View,
   StyleSheet,
   Image,
   TouchableHighlight,
   ImageSourcePropType,
   GestureResponderEvent,
   StyleProp,
   ViewStyle,
   ImageStyle,
   TextStyle,
} from "react-native";
// import Swipeable from 'react-native-gesture-handler/Swipeable';

import Text from "../Text";
import COLORS from "@/utils/colors";
import { ExpoIcon } from "../Icon";

type ListItemProps = {
   title?: string;
   subTitle?: string;
   image?: ImageSourcePropType;
   IconComponent?: React.ReactNode;
   onPress?: (event: GestureResponderEvent) => void;
   chevron?: number | false;
   numberOfLines?: { title?: number; subTitle?: number };
   style?: {
      container?: StyleProp<ViewStyle>;
      details?: StyleProp<ViewStyle>;
      image?: StyleProp<ImageStyle>;
      title?: StyleProp<TextStyle>;
      subTitle?: StyleProp<TextStyle>;
   };
   renderRightActions?: () => React.ReactNode;
};

const ListItem = ({
   title,
   subTitle,
   image,
   IconComponent,
   onPress,
   chevron = 25,
   numberOfLines = { title: 1, subTitle: 2 },
   style,
   renderRightActions,
}: ListItemProps) => {
   return (
      // <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={COLORS.medium} onPress={onPress}>
         <View style={[styles.container, style?.container]}>
            {IconComponent}
            {image && <Image style={[styles.image, style?.image]} source={image} />}
            <View style={[styles.details, style?.details]}>
               {title && (
                  <Text style={[styles.title, style?.title]} numberOfLines={numberOfLines.title}>
                     {title}
                  </Text>
               )}
               {subTitle && (
                  <Text
                     style={[styles.subTitle, style?.subTitle]}
                     numberOfLines={numberOfLines.subTitle}
                  >
                     {subTitle}
                  </Text>
               )}
            </View>
            {chevron && <ExpoIcon color={COLORS.medium} name="chevron-right" size={chevron} />}
         </View>
      </TouchableHighlight>
      // </Swipeable>
   );
};

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
      borderRadius: 1000,
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
