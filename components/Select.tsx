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
import { ExpoIcon, TExpoIcon } from "./Icon";
import { ListItem, ListItemSeparator } from "./lists";

interface SelectItem {
   id: number | string;
   title: string;
}
interface SelectProps {
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
   items?: SelectItem[];
   style?: StyleProp<TextInput>;
   modalStyle?: StyleProp<ViewStyle>;
   chevron?: number | false;
   searchable?: boolean;
   onSelect?: (item: SelectItem) => void;
}

const SCREEN_HEIGHT = Dimensions.get("window").height;
const MAX_HEIGHT = SCREEN_HEIGHT * 0.4;

const Select = ({
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
   chevron = 25,
   searchable = false,
   onSelect,
}: SelectProps) => {
   const [visible, setVisible] = useState(false);
   const [layout, setLayout] = useState<LayoutRectangle | null>(null);
   const [showAbove, setShowAbove] = useState(false);
   const [search, setSearch] = useState("");
   const ref = useRef<View>(null);

   const filtered = useMemo(
      () =>
         searchable && search
            ? items.filter((i) => i.title.toLowerCase().includes(search.toLowerCase().trim()))
            : items,
      [items, search, searchable]
   );

   const toggle = () => {
      if (visible) return setVisible(false);
      ref.current?.measureInWindow((px, py, w, h) => {
         const below = SCREEN_HEIGHT - (py + h);
         const above = py;
         setShowAbove(below < MAX_HEIGHT && above > below);
         setLayout({ x: px, y: py, width: w, height: h });
         setVisible(true);
      });
   };

   const handleSelect = (item: SelectItem) => {
      onSelect?.(item);
      setVisible(false);
      setSearch("");
   };

   return (
      <>
         <TouchableWithoutFeedback onPress={toggle}>
            <View ref={ref}>
               <Input
                  editable={false}
                  pointerEvents="none"
                  placeholder={placeholder}
                  icon={icon}
                  size={size}
                  iconColor={iconColor}
                  iconBackground={iconBackground}
                  color={color}
                  background={background}
                  rounded={rounded}
                  style={style}
               />
               {rightIcon && (
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

         <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={() => setVisible(false)}
         >
            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
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
                              {searchable && (
                                 <View style={styles.searchBox}>
                                    <Input
                                       autoFocus
                                       icon="magnify"
                                       value={search}
                                       onChangeText={setSearch}
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
                                       title={item.title}
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
