import { useState } from "react";
import { FlatList } from "react-native";
import { router } from "expo-router";

import Screen from "@/components/Screen";
import { ListItem, ListItemSeparator } from "@/components/lists";
import { MESSAGES } from "@/utils/data";

const Messages = () => {
   const [data, setData] = useState(MESSAGES.slice(0, 5));

   return (
      <Screen background="white">
         <FlatList
            data={data}
            keyExtractor={(x) => x.id.toString()}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
               <ListItem
                  image={item.image}
                  title={item.title}
                  subTitle={item.description}
                  onPress={() => router.push("/account")} // Example: navigate to account
                  // renderRightActions={() => (
                  //   <ListItemDelete onPress={() => console.log(item)} />
                  // )}
               />
            )}
            refreshing={false}
            onRefresh={() => setData(MESSAGES)}
         />
      </Screen>
   );
};

export default Messages;
