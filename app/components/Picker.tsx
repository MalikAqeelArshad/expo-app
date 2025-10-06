import { useState } from "react";
import {
   View,
   StyleSheet,
   FlatList,
   Modal,
   TouchableOpacity,
   TouchableWithoutFeedback,
   ViewStyle,
   StyleProp,
} from "react-native";

import Input from "./Input";
import Screen from "./Screen";
import Icon, { ExpoIcon, TExpoIcon } from "./Icon";
import { ListItem, ListItemSeparator } from "./lists";

interface PickerItem {
   id: number | string;
   title: string;
}

interface PickerProps {
   icon?: TExpoIcon;
   size?: number;
   iconColor?: string;
   iconBackground?: string;
   color?: string;
   background?: string;
   rounded?: boolean | number;
   placeholder?: string;
   rightIcon?: TExpoIcon | false;
   rightIconColor?: string;
   items?: PickerItem[];
   style?: StyleProp<ViewStyle>;
   modalStyle?: StyleProp<ViewStyle>;
}

const Picker = ({
   icon,
   size = 25,
   iconColor,
   iconBackground,
   color,
   background,
   rounded,
   placeholder = "Please choose",
   rightIcon = "chevron-down",
   rightIconColor,
   items = [],
   style,
   modalStyle,
}: PickerProps) => {
   const [modalVisible, setModalVisible] = useState(false);

   return (
      <>
         <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={{ position: "relative", overflow: "hidden" }}>
               <Input
                  editable={false}
                  placeholder={placeholder}
                  icon={icon}
                  size={size}
                  iconColor={iconColor}
                  iconBackground={iconBackground}
                  color={color}
                  background={background}
                  rounded={rounded}
                  onPress={() => setModalVisible(true)}
                  style={{ paddingRight: 15, ...(style as object) }}
               />
               {rightIcon !== false && (
                  <View style={styles.iconView}>
                     <ExpoIcon
                        name={rightIcon}
                        size={size}
                        color={rightIconColor}
                        style={{ right: 10, position: "absolute" }}
                     />
                  </View>
               )}
            </View>
         </TouchableWithoutFeedback>

         <Modal visible={modalVisible} animationType="slide" statusBarTranslucent>
            <Screen>
               <View style={styles.container}>
                  <TouchableOpacity style={styles.btnClose} onPress={() => setModalVisible(false)}>
                     <Icon name="close" size={50} background="red" />
                  </TouchableOpacity>
                  <FlatList
                     style={[styles.list, modalStyle]}
                     data={items}
                     keyExtractor={(k) => k.id.toString()}
                     renderItem={({ item }) => (
                        <ListItem title={item.title} onPress={() => console.log(item)} />
                     )}
                     ItemSeparatorComponent={ListItemSeparator}
                  />
               </View>
            </Screen>
         </Modal>
      </>
   );
};

const styles = StyleSheet.create({
   container: {
      height: "90%",
      width: "100%",
      position: "absolute",
      bottom: 0,
      backgroundColor: "#f8f4f4",
   },
   list: {
      backgroundColor: "#fff",
      paddingVertical: 25,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
   },
   btnClose: {
      width: 50,
      alignSelf: "center",
      alignItems: "center",
      position: "relative",
      top: 25,
      zIndex: 1,
   },
   iconView: {
      width: "100%",
      height: "100%",
      position: "absolute",
      justifyContent: "center",
   },
});

export default Picker;
