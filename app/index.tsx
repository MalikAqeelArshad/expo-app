import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { router } from "expo-router";

import Screen from "@/components/Screen";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { STYLES } from "@/utils/styles";

const Welcome = () => {
   return (
      <Screen fullScreen>
         <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require("@/assets/img/background.jpg")}
         >
            <View style={styles.logo}>
               <Image source={require("@/assets/favicon.png")} />
               <Text style={STYLES.TEXT}>Welcome to React Native</Text>
            </View>

            <View style={styles.container}>
               <Button title="Login" onPress={() => router.push("/account")} />
               <Button
                  title="Register"
                  background="secondary"
                  onPress={() => router.push("/common")}
               />
            </View>
         </ImageBackground>
      </Screen>
   );
};

const styles = StyleSheet.create({
   background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
   },
   logo: {
      gap: 35,
      top: "20%",
      alignItems: "center",
      position: "absolute",
   },
   container: {
      gap: 20,
      width: "100%",
      marginBottom: 50,
      paddingHorizontal: 20,
   },
});

export default Welcome;
