import { FlatList, StyleSheet } from "react-native";
import { router } from "expo-router";

import Screen from "@/components/Screen";
import Card from "@/components/Card";
import { LISTINGS } from "@/utils/data";

const Listings = () => {
   return (
      <Screen barColor="dark" barStyle="light">
         <FlatList
            style={styles.container}
            data={LISTINGS}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
               <Card
                  title={item.title}
                  subTitle={"$" + item.price}
                  image={item.image}
                  onPress={() => router.push("/listings/details")} // Navigate to listing details
               />
            )}
         />
      </Screen>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
   },
});

export default Listings;
