import { FlatList, Image, View, StyleSheet, ImageSourcePropType } from "react-native";

import Screen from "@/components/Screen";
import Text from "@/components/Text";
import { ListItem, ListItemSeparator } from "@/components/lists";

import COLORS from "@/utils/colors";
import { LISTINGS } from "@/utils/data";

type ScreenProps = {
   title?: string;
   subTitle?: string;
   image?: ImageSourcePropType;
   onPress: (page: number) => void;
};

const ListingDetailsScreen = ({ title, subTitle, image, onPress }: ScreenProps) => {
   return (
      <Screen statusBar={false}>
         <Image style={styles.image} source={image || require("../assets/jacket.jpg")} />

         <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
               {title || "title"}
            </Text>
            <Text style={styles.subTitle} numberOfLines={2}>
               {subTitle || "subTitle"}
            </Text>
         </View>

         <FlatList
            data={LISTINGS}
            keyExtractor={(x) => x.id.toString()}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
               <ListItem
                  image={item.image}
                  title={item.title}
                  subTitle={String(item.price)}
                  onPress={() => onPress(5)}
               />
            )}
         />
      </Screen>
   );
};

const styles = StyleSheet.create({
   image: {
      width: "100%",
      height: "43%",
      minHeight: 300,
   },
   details: {
      padding: 20,
   },
   title: {
      marginBottom: 7,
   },
   subTitle: {
      color: COLORS.secondary,
      fontWeight: "bold",
   },
});

export default ListingDetailsScreen;
