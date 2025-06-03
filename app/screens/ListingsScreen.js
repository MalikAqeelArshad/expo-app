import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";

import { LISTINGS } from "../config/data";

function ListingsScreen({ onPress }) {
   return (
      <Screen barColor="dark" barStyle>
         <FlatList
            style={styles.container}
            data={LISTINGS}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
               <Card
                  title={item.title}
                  subTitle={"$" + item.price}
                  image={item.image}
                  onPress={() => onPress(4)}
               />
            )}
         />
      </Screen>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
   },
});

export default ListingsScreen;
