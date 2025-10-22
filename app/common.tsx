import {
   Image,
   ImageBackground,
   Pressable,
   ScrollView,
   StyleSheet,
   TextInput,
   TouchableHighlight,
   View,
} from "react-native";
import { router } from "expo-router";

import Screen from "@/components/Screen";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Text from "@/components/Text";
import Icon from "@/components/Icon";
import Switch from "@/components/Switch";
import Picker from "@/components/Picker";

import { STYLES } from "@/utils/styles";
const { COLORS, TEXT, INPUT } = STYLES;

import { MESSAGES } from "@/utils/data";

const Common = () => {
   return (
      <Screen>
         <ImageBackground
            resizeMode="stretch"
            style={{ flex: 1 }}
            source={require("@/assets/img/background.jpg")}
         >
            <ScrollView style={{ flex: 1 }}>
               <View style={styles.container}>
                  <Image source={require("@/assets/favicon.png")} style={{ alignSelf: "center" }} />

                  <Text style={{ textAlign: "center" }}>App Text</Text>

                  <Switch />

                  <Picker icon="apps" items={MESSAGES} />

                  <View style={{ gap: 5, flexDirection: "row", alignItems: "flex-end" }}>
                     <Icon name="home" />
                     <Icon name="home" rounded={false} />
                     <Icon name="home" color="purple" background="pink" />
                     <Icon name="home" color="purple" rounded={false} />
                     <Icon name="home" size={25} />
                     <Icon name="home" size={25} color="purple" rounded={false} />
                  </View>

                  <TextInput
                     secureTextEntry
                     clearButtonMode="always"
                     placeholder="Password"
                     style={[INPUT, { borderWidth: 2 }]}
                  />

                  <Input placeholder="Default Input" />
                  <Input
                     icon="email"
                     keyboardType="email-address"
                     placeholder="Default Input with Icon"
                  />
                  <Input icon="account-tie" placeholder="Default Rounded Input with Icon" rounded />
                  <Input
                     icon="home"
                     iconColor="white"
                     iconBackground="dark"
                     placeholder="Default Input with Icon Background & Color"
                  />
                  <Input
                     icon="account-tie"
                     iconColor="white"
                     iconBackground="dark"
                     placeholder="Default Rounded Input with Icon Background & Color"
                     rounded
                  />

                  <Button
                     title="Default Button"
                     style={styles.btn}
                     onPress={() => alert("Button with Primary Background & Color")}
                  />
                  <Button
                     title="Button with Background & Color"
                     color="purple"
                     background="pink"
                     style={styles.btn}
                     onPress={() => alert("Button with Dynamic Background & Color")}
                  />

                  <TouchableHighlight
                     onPress={() => alert("TouchableHighlight Clicked")}
                     style={[styles.btn, { backgroundColor: COLORS.blue }]}
                  >
                     <Text style={styles.btnText}>TouchableHighlight</Text>
                  </TouchableHighlight>

                  <Pressable
                     delayLongPress={500}
                     onPress={() => router.push("/")}
                     onLongPress={() => alert("Long Pressable")}
                     style={[styles.btn, { backgroundColor: COLORS.green }]}
                  >
                     <Text style={styles.btnText}>Pressable & Long Pressable</Text>
                  </Pressable>

                  <TextInput
                     clearButtonMode="always"
                     placeholder="Placeholder"
                     style={{
                        width: "100%",
                        padding: 15,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#ccc",
                        backgroundColor: "#eee",
                     }}
                  />
               </View>
            </ScrollView>
         </ImageBackground>
      </Screen>
   );
};

const styles = StyleSheet.create({
   container: {
      gap: 15,
      width: "100%",
      paddingHorizontal: 20,
      paddingBottom: 25,
      alignItems: "center",
   },
   btn: {
      ...INPUT,
      borderRadius: 100,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 15,
   },
   btnText: {
      ...TEXT,
      color: COLORS.white,
   },
});

export default Common;
