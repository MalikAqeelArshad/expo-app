import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import Screen from "@/components/Screen";
import Card from "@/components/Card";

const Products = () => {
   return (
      <Screen>
         <View style={styles.container}>
            <Card
               title="Red jacket for sale"
               subTitle="$100"
               image={require("@/assets/img/jacket.jpg")}
               onPress={() => router.push("/details")} // Navigate to details
            />
         </View>
      </Screen>
   );
};

const styles = StyleSheet.create({
   container: {
      padding: 15,
   },
});

export default Products;
