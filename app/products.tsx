import { View, StyleSheet } from "react-native";

import Screen from "@/components/Screen";
import Card from "@/components/Card";

const ProductsScreen = () => {
   return (
      <Screen>
         <View style={styles.container}>
            <Card
               title="Red jacket for sale"
               subTitle="$100"
               image={require("../assets/jacket.jpg")}
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

export default ProductsScreen;
