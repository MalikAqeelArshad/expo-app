import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Button from "../components/Button";
import Text from "../components/Text";

import { STYLES } from "../config/styles";

type Props = {
   onPress: (page: number) => void;
};

function WelcomeScreen({ onPress }: Props) {
   return (
      <Screen fullScreen>
         <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require("../assets/background.jpg")}
         >
            <View style={styles.logo}>
               <Image source={require("../assets/favicon.png")} />
               <Text style={STYLES.TEXT}>Welcome to React Native</Text>
            </View>

            <View style={styles.container}>
               <Button title="Login" onPress={() => onPress(1)} />
               <Button title="Register" background="secondary" onPress={() => onPress(5)} />
            </View>
         </ImageBackground>
      </Screen>
   );
}

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

export default WelcomeScreen;
