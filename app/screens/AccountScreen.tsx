import { View, StyleSheet, FlatList } from "react-native";

import Screen from "@/components/Screen";
import Icon from "@/components/Icon";
import { ListItem, ListItemSeparator } from "@/components/lists";
import { MENU } from "@/utils/data";

type ScreenProps = {
   onPress: (page: number) => void;
};

const AccountScreen = ({ onPress }: ScreenProps) => {
   return (
      <Screen>
         <View style={styles.container}>
            <ListItem
               chevron={false}
               title="Aqeel Malik"
               subTitle="malik.aqeelarshad@gmail.com"
               subTitleLines={1}
               image={require("../assets/photo.jpg")}
            />
         </View>

         <View style={styles.container}>
            <FlatList
               data={MENU}
               keyExtractor={(x) => x.title}
               ItemSeparatorComponent={ListItemSeparator}
               renderItem={({ item }) => (
                  <ListItem
                     onPress={() => onPress(item.page)}
                     title={item.title}
                     IconComponent={
                        <Icon name={item.icon.name} background={item.icon.background} />
                     }
                  />
               )}
            />
         </View>

         <ListItem
            chevron={false}
            onPress={() => onPress(0)}
            title="Log Out"
            IconComponent={<Icon name="logout" background="yellow" />}
         />
      </Screen>
   );
};

const styles = StyleSheet.create({
   container: {
      marginVertical: 20,
   },
});

export default AccountScreen;
