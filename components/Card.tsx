import {
   View,
   StyleSheet,
   Image,
   TouchableOpacity,
   Platform,
   ImageSourcePropType,
} from "react-native";

import Text from "./Text";
import COLORS from "@/utils/colors";

interface CardProps {
   title: string;
   subTitle?: string;
   image: ImageSourcePropType;
   onPress?: () => void;
}

const Card = ({ title, subTitle, image, onPress }: CardProps) => {
   return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
         <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.details}>
               <Text style={styles.title} numberOfLines={1}>
                  {title}
               </Text>
               {subTitle && (
                  <Text style={styles.subTitle} numberOfLines={2}>
                     {subTitle}
                  </Text>
               )}
            </View>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      borderRadius: 15,
      backgroundColor: COLORS.white,
      marginBottom: 15,
      ...Platform.select({
         ios: {
            shadowColor: COLORS.light,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
         },
         android: { elevation: 5 },
         web: { boxShadow: "0px 5px 10px rgba(0,0,0,0.1)" },
      }),
   },
   card: {
      borderRadius: 15,
      overflow: "hidden",
   },
   details: {
      padding: 20,
   },
   image: {
      width: "100%",
      height: 200,
   },
   title: {
      marginBottom: 7,
   },
   subTitle: {
      color: COLORS.secondary,
      fontWeight: "bold",
   },
});

export default Card;
