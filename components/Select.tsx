import { useRef, useState, useMemo } from "react";
import {
   View,
   FlatList,
   Modal,
   TouchableWithoutFeedback,
   StyleSheet,
   Dimensions,
   LayoutRectangle,
   TextInput,
   StyleProp,
   ViewStyle,
} from "react-native";
import Input from "./Input";
import { ExpoIcon } from "./Icon";
import { ListItem, ListItemSeparator } from "./lists";
import { TIcon, TOption } from "@/utils/types";

interface SelectProps {
   icon?: TIcon | false;
   rightIcon?: TIcon | false;
   color?: string;
   background?: string;
   rounded?: boolean | number;
   placeholder?: string;
   options?: TOption[];
   style?: StyleProp<TextInput>;
   modalStyle?: StyleProp<ViewStyle>;
   chevron?: number | false;
   searchKey?: string | undefined;
   onSelect?: (item: TOption) => void;
}

const SCREEN_HEIGHT = Dimensions.get("window").height;
const MAX_HEIGHT = SCREEN_HEIGHT * 0.4; // 40% of screen height

const Select = ({
   icon,
   rightIcon = { name: "chevron-down" },
   color,
   background,
   rounded,
   placeholder = "Please choose",
   options = [],
   style,
   modalStyle,
   chevron = 25,
   searchKey,
   onSelect,
}: SelectProps) => {
   const ref = useRef<View>(null);
   const [showAbove, setShowAbove] = useState(false);
   const [modalVisible, setModalVisible] = useState(false);
   const [layout, setLayout] = useState<LayoutRectangle | null>(null);

   // 🔹 Separate value states
   const [selectedValue, setSelectedValue] = useState(""); // main input
   const [searchValue, setSearchValue] = useState(""); // search box input

   // 🔹 Filter using searchValue, not selectedValue
   const filtered = useMemo(
      () =>
         searchKey && searchValue
            ? options.filter((i) =>
                 i[searchKey]?.toLowerCase().includes(searchValue.toLowerCase().trim())
              )
            : options,
      [options, searchValue, searchKey]
   );

   const toggle = () => {
      if (modalVisible) return setModalVisible(false);
      ref.current?.measureInWindow((px, py, w, h) => {
         const below = SCREEN_HEIGHT - (py + h);
         const above = py;
         setShowAbove(below < MAX_HEIGHT && above > below);
         setLayout({ x: px, y: py, width: w, height: h });
         setSearchValue(""); // 🔹 Reset search each time modal opens
         setModalVisible(true);
      });
   };

   const handleSelect = (item: TOption) => {
      onSelect?.(item);
      setSelectedValue(item.value as string);
      setModalVisible(false);
   };

   return (
      <>
         <TouchableWithoutFeedback onPress={toggle}>
            <View ref={ref}>
               <Input
                  editable={false}
                  icon={icon}
                  color={color}
                  background={background}
                  rounded={rounded}
                  placeholder={placeholder}
                  value={selectedValue}
                  pointerEvents="none"
                  style={style}
               />
               {rightIcon && (
                  <View style={styles.iconView}>
                     <ExpoIcon
                        name={rightIcon.name}
                        size={rightIcon.size || 25}
                        color={rightIcon.color}
                        style={{
                           right: 10,
                           position: "absolute",
                           transform: [{ rotate: modalVisible ? "180deg" : "0deg" }],
                        }}
                     />
                  </View>
               )}
            </View>
         </TouchableWithoutFeedback>

         <Modal
            transparent
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
         >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
               <View style={styles.overlay}>
                  {layout && (
                     <TouchableWithoutFeedback>
                        <View
                           style={[
                              styles.outer,
                              modalStyle,
                              {
                                 left: layout.x,
                                 width: layout.width,
                                 top: showAbove
                                    ? layout.y - Math.min(MAX_HEIGHT, layout.y)
                                    : layout.y + layout.height,
                              },
                           ]}
                        >
                           <View style={styles.inner}>
                              {searchKey && (
                                 <View style={styles.searchBox}>
                                    <Input
                                       autoFocus
                                       icon={{ name: "magnify" }}
                                       value={searchValue}
                                       onChangeText={setSearchValue}
                                       placeholder="Search..."
                                       style={styles.searchInput}
                                    />
                                 </View>
                              )}
                              <FlatList
                                 data={filtered}
                                 keyExtractor={(k) => k.id.toString()}
                                 renderItem={({ item }) => (
                                    <ListItem
                                       chevron={chevron}
                                       title={item.label}
                                       onPress={() => handleSelect(item)}
                                    />
                                 )}
                                 ItemSeparatorComponent={ListItemSeparator}
                                 keyboardShouldPersistTaps="handled"
                              />
                           </View>
                        </View>
                     </TouchableWithoutFeedback>
                  )}
               </View>
            </TouchableWithoutFeedback>
         </Modal>
      </>
   );
};

const styles = StyleSheet.create({
   overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.1)" },
   outer: {
      position: "absolute",
      maxHeight: MAX_HEIGHT,
      backgroundColor: "transparent",
      borderRadius: 12,
      elevation: 5,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 2 },
   },
   inner: { backgroundColor: "#fff", borderRadius: 12, overflow: "hidden" },
   searchBox: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderColor: "#ddd",
      backgroundColor: "#fafafa",
   },
   searchInput: { fontSize: 16, paddingVertical: 4, height: 40 },
   iconView: { width: "100%", height: "100%", position: "absolute", justifyContent: "center" },
});

export default Select;
