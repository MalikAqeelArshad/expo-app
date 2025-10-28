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
import Icon, { ExpoIcon } from "./Icon";
import { ListItem, ListItemSeparator } from "./lists";
import { TIcon } from "@/utils/types";

interface PickerItem {
   id: number | string;
   title: string;
}

interface PickerProps {
   icon?: TIcon | false;
   rightIcon?: TIcon | false;
   color?: string;
   background?: string;
   rounded?: boolean | number;
   placeholder?: string;
   items?: PickerItem[];
   style?: StyleProp<ViewStyle>;
   modalStyle?: StyleProp<ViewStyle>;
   chevron?: number | false;
   onSelect?: (item: PickerItem) => void;
}

const Picker = ({
   icon = { name: "apps" },
   rightIcon = { name: "chevron-down" },
   color,
   background,
   rounded,
   placeholder = "Please choose",
   items = [],
   style,
   modalStyle,
   chevron = 25,
   onSelect,
}: PickerProps) => {
   const [modalVisible, setModalVisible] = useState(false);
   const [selectedValue, setSelectedValue] = useState("");

   const handleSelect = (item: PickerItem) => {
      onSelect?.(item);
      setSelectedValue(item.title);
      setModalVisible(false);
   };

   return (
      <>
         <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={{ position: "relative", overflow: "hidden" }}>
               <Input
                  editable={false}
                  icon={icon}
                  color={color}
                  background={background}
                  rounded={rounded}
                  placeholder={placeholder}
                  value={selectedValue}
                  onPress={() => setModalVisible(true)}
                  style={{ paddingRight: 15, ...(style as object) }}
               />
               {rightIcon && (
                  <View style={styles.iconView}>
                     <ExpoIcon
                        name={rightIcon?.name}
                        size={rightIcon?.size || 25}
                        color={rightIcon?.color}
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
                        <ListItem
                           chevron={chevron}
                           title={item.title}
                           onPress={() => handleSelect(item)}
                        />
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
