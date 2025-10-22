import { View, StyleSheet, FlatList } from "react-native";
import { router } from "expo-router";

import Screen from "@/components/Screen";
import Icon from "@/components/Icon";
import { ListItem, ListItemSeparator } from "@/components/lists";
import { MENU } from "@/utils/data";

const Account = () => {
   return (
      <Screen>
         <View style={styles.container}>
            <ListItem
               chevron={false}
               title="Aqeel Malik"
               subTitle="malik.aqeelarshad@gmail.com"
               numberOfLines={{ subTitle: 1 }}
               image={require("@/assets/img/photo.jpg")}
            />
         </View>

         <View style={styles.container}>
            <FlatList
               data={MENU}
               keyExtractor={(x) => x.title}
               ItemSeparatorComponent={ListItemSeparator}
               renderItem={({ item }) => (
                  <ListItem
                     onPress={() => router.push(item.page)}
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
            onPress={() => router.push("/")}
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

export default Account;
