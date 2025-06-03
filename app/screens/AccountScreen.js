import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";

const MENU = [
   {
      page: 3,
      title: "My Listings",
      icon: {
         name: "format-list-bulleted",
         background: "primary",
      },
   },
   {
      page: 2,
      title: "My Messages",
      icon: {
         name: "email",
         background: "secondary",
      },
   },
];

function SettingsScreen({ onPress }) {
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
               ItemSeparatorComponent={<ListItemSeparator />}
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
}

const styles = StyleSheet.create({
   container: {
      marginVertical: 20,
   },
});

export default SettingsScreen;
