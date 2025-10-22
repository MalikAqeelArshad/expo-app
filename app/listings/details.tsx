import { FlatList, Image, View, StyleSheet, ImageSourcePropType } from "react-native";

import Screen from "@/components/Screen";
import Text from "@/components/Text";
import { ListItem, ListItemSeparator } from "@/components/lists";

import COLORS from "@/utils/colors";
import { LISTINGS } from "@/utils/data";

type ScreenProps = {
   title?: string;
   subTitle?: string;
   imageUrl?: ImageSourcePropType;
   onPress: (page: number) => void;
};

const ListingDetailsScreen = ({
   title = "<Title>",
   subTitle = "<Subtitle>",
   imageUrl = require("@/assets/img/jacket.jpg"),
   onPress,
}: ScreenProps) => {
   return (
      <Screen statusBar={false}>
         <Image style={styles.image} source={imageUrl} />

         <View style={(title || subTitle) && styles.details}>
            {title && (
               <Text style={styles.title} numberOfLines={1}>
                  {title}
               </Text>
            )}
            {subTitle && (
               <Text style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
               </Text>
            )}
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
                  chevron={20}
                  style={{
                     container: { padding: 12 },
                     details: { gap: 3, marginLeft: 12 },
                     image: { width: 55, height: 55 },
                     title: { fontSize: 17, fontWeight: 600 },
                     subTitle: { fontSize: 16, fontWeight: 700 },
                  }}
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
